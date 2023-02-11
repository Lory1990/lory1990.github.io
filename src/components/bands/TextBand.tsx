import PageWrapper from "../PageWrapper"

export interface ITextImageProps {
  text?: string | React.ReactNode
}
const TextBand: React.FC<ITextImageProps> = ({ text }) => {
  if (!text) return

  if (typeof text === "string") {
    return (
      <PageWrapper>
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </PageWrapper>
    )
  } else {
    return <PageWrapper>{text}</PageWrapper>
  }
}

export default TextBand
