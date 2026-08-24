import { CMS } from "./client"
import type { CmsImage } from "./types"

/**
 * URLs for images uploaded to the CMS.
 *
 * These images stay on Sanity's CDN and deliberately do not go through
 * next/image: the site is statically exported with `images.unoptimized`, so the
 * Next optimizer never runs. Asking the CDN for the crops instead (it can
 * resize, recompress and serve AVIF/WebP) gives a real srcset, which
 * `unoptimized` would otherwise take away.
 */

// A Sanity asset reference looks like `image-<assetId>-<width>x<height>-<ext>`.
const REF = /^image-([a-zA-Z0-9]+)-(\d+x\d+)-(\w+)$/

interface Transform {
  width?: number
  height?: number
  quality?: number
  /**
   * Crop around the image's point of interest. Needed by fixed-ratio cards,
   * where the original can have any shape.
   */
  crop?: boolean
}

function assetPath(ref: string): string | null {
  const match = REF.exec(ref)
  if (!match) return null
  const [, assetId, dimensions, extension] = match
  return `${assetId}-${dimensions}.${extension}`
}

export function imageUrl(
  image: CmsImage,
  { width, height, quality = 80, crop = false }: Transform = {}
): string | null {
  const path = assetPath(image.ref)
  if (!path) return null

  const url = new URL(
    `https://cdn.sanity.io/images/${CMS.projectId}/${CMS.dataset}/${path}`
  )
  if (width) url.searchParams.set("w", String(width))
  if (height) url.searchParams.set("h", String(height))
  if (crop) {
    url.searchParams.set("fit", "crop")
    url.searchParams.set("crop", "entropy")
  }
  url.searchParams.set("q", String(quality))
  // Let the CDN pick the best format the requesting browser accepts.
  url.searchParams.set("auto", "format")
  return url.toString()
}

/**
 * Candidates for a srcset. They stop at the original's width: asking the CDN to
 * upscale costs bytes and buys nothing.
 *
 * `ratio` (width/height) is for fixed-ratio crops: each candidate's height is
 * derived from its width, so every variant has the same shape and the layout
 * does not shift depending on which one the browser picks.
 */
export function imageSrcSet(
  image: CmsImage,
  widths: number[],
  { ratio, ...transform }: Omit<Transform, "width" | "height"> & { ratio?: number } = {}
): string | undefined {
  const max = image.width ?? Infinity
  const usable = widths.filter((w) => w <= max)
  const selected = usable.length > 0 ? usable : [Math.min(...widths, max)]

  const entries = selected
    .map((w) => {
      const url = imageUrl(image, {
        ...transform,
        width: w,
        height: ratio ? Math.round(w / ratio) : undefined,
      })
      return url ? `${url} ${w}w` : null
    })
    .filter((entry): entry is string => entry !== null)

  return entries.length > 0 ? entries.join(", ") : undefined
}

/** The original's aspect ratio, used to reserve space and avoid layout shift. */
export function aspectRatio(image: CmsImage): number | undefined {
  if (!image.width || !image.height) return undefined
  return image.width / image.height
}
