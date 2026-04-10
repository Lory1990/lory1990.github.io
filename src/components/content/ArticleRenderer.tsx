import Image from "next/image"
import { ArticleData, ArticleDataType } from "@/types"
import PageWrapper from "@/components/layout/PageWrapper"

function VideoEmbed({ url }: { url: string }) {
  let embedUrl = url
  if (url.includes("youtube.com/watch")) {
    const id = new URL(url).searchParams.get("v")
    embedUrl = `https://www.youtube.com/embed/${id}`
  } else if (url.includes("youtu.be/")) {
    const id = url.split("youtu.be/")[1]?.split("?")[0]
    embedUrl = `https://www.youtube.com/embed/${id}`
  } else if (url.includes("youtube.com/live/")) {
    const parts = url.split("youtube.com/live/")[1]
    const id = parts?.split("?")[0]
    const tParam = url.match(/[?&]t=(\d+)/)?.[1]
    embedUrl = `https://www.youtube.com/embed/${id}${tParam ? `?start=${tParam}` : ""}`
  }

  return (
    <div className="relative aspect-video overflow-hidden rounded-lg">
      <iframe
        src={embedUrl}
        title="Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
  )
}

function TextBlock({ text }: { text: string }) {
  return (
    <div
      className="prose-invert max-w-none text-text-secondary leading-relaxed [&_a]:text-gold [&_a]:hover:text-gold-light [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-1"
      dangerouslySetInnerHTML={{ __html: text }}
    />
  )
}

function ImageTextBlock({
  data,
  inverted,
}: {
  data: ArticleData
  inverted?: boolean
}) {
  const imageStr = typeof data.image === "string" ? data.image : data.image?.[0]

  return (
    <div
      className={`flex flex-col gap-8 md:flex-row md:items-center ${
        inverted ? "md:flex-row-reverse" : ""
      }`}
    >
      {imageStr && (
        <div className="relative aspect-video w-full overflow-hidden rounded-lg md:w-1/2">
          <Image
            src={imageStr}
            alt={data.imageAlt || ""}
            fill
            className="object-cover"
          />
        </div>
      )}
      {data.text && (
        <div className="md:w-1/2">
          <TextBlock text={data.text as string} />
        </div>
      )}
    </div>
  )
}

function VideoTextBlock({
  data,
  inverted,
}: {
  data: ArticleData
  inverted?: boolean
}) {
  return (
    <div
      className={`flex flex-col gap-8 md:flex-row md:items-center ${
        inverted ? "md:flex-row-reverse" : ""
      }`}
    >
      {data.videoUrl && (
        <div className="md:w-1/2">
          <VideoEmbed url={data.videoUrl} />
        </div>
      )}
      {data.text && (
        <div className="md:w-1/2">
          <TextBlock text={data.text as string} />
        </div>
      )}
    </div>
  )
}

export default function ArticleRenderer({
  articles,
}: {
  articles: ArticleData[]
}) {
  return (
    <div className="space-y-16">
      {articles.map((article, i) => {
        const key = `article-${i}`
        switch (article.type) {
          case ArticleDataType.TITLE:
            return (
              <PageWrapper key={key}>
                <h2 className="font-heading text-2xl text-text-primary md:text-3xl">
                  {article.text as string}
                </h2>
              </PageWrapper>
            )
          case ArticleDataType.TEXT:
            return (
              <PageWrapper key={key}>
                <TextBlock text={article.text as string} />
              </PageWrapper>
            )
          case ArticleDataType.IMAGE: {
            const src =
              typeof article.image === "string"
                ? article.image
                : article.image?.[0]
            return src ? (
              <PageWrapper key={key}>
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={src}
                    alt={article.imageAlt || ""}
                    fill
                    className="object-cover"
                  />
                </div>
              </PageWrapper>
            ) : null
          }
          case ArticleDataType.TEXT_IMAGE:
            return (
              <PageWrapper key={key}>
                <ImageTextBlock data={article} />
              </PageWrapper>
            )
          case ArticleDataType.IMAGE_TEXT:
            return (
              <PageWrapper key={key}>
                <ImageTextBlock data={article} inverted />
              </PageWrapper>
            )
          case ArticleDataType.VIDEO_TEXT:
            return (
              <PageWrapper key={key}>
                <VideoTextBlock data={article} />
              </PageWrapper>
            )
          case ArticleDataType.TEXT_VIDEO:
            return (
              <PageWrapper key={key}>
                <VideoTextBlock data={article} inverted />
              </PageWrapper>
            )
          default:
            return null
        }
      })}
    </div>
  )
}
