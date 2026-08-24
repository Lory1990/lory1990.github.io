import { aspectRatio, imageSrcSet, imageUrl } from "@/lib/blog/image"
import type { CmsImage } from "@/lib/blog/types"
import { cn } from "@/lib/cn"

/**
 * An image coming from the CMS.
 *
 * Uses <img> rather than next/image on purpose: the site is exported statically
 * with `images.unoptimized`, so next/image would optimise nothing while also
 * getting in the way of Sanity's CDN crops. Here we ask the CDN for the
 * variants and hand the browser a real srcset.
 *
 * `lqip` is the blurred thumbnail Sanity computes on upload; it sits behind the
 * image so the download reads as a fading-in picture, not an empty box.
 */

const DEFAULT_WIDTHS = [480, 768, 1024, 1440, 1920]

export default function BlogImage({
  image,
  sizes,
  widths = DEFAULT_WIDTHS,
  ratio,
  priority = false,
  className,
}: {
  image: CmsImage
  sizes: string
  widths?: number[]
  /** Crop ratio (width/height). Without it the original's shape is kept. */
  ratio?: number
  /** Only for an article's cover: it is the LCP element and must not be lazy. */
  priority?: boolean
  className?: string
}) {
  const displayRatio = ratio ?? aspectRatio(image)
  const largest = widths[widths.length - 1]
  const src = imageUrl(image, {
    width: largest,
    height: ratio ? Math.round(largest / ratio) : undefined,
    crop: Boolean(ratio),
  })
  if (!src) return null

  return (
    // eslint-disable-next-line @next/next/no-img-element -- see note above: next/image optimises nothing in a static export
    <img
      src={src}
      srcSet={imageSrcSet(image, widths, { ratio, crop: Boolean(ratio) })}
      sizes={sizes}
      alt={image.alt ?? ""}
      width={image.width ?? undefined}
      height={
        ratio && image.width
          ? Math.round(image.width / ratio)
          : (image.height ?? undefined)
      }
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      className={cn(className)}
      style={{
        aspectRatio: displayRatio,
        backgroundImage: image.lqip ? `url(${image.lqip})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  )
}
