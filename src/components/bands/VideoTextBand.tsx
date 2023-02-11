import { Box } from "@mui/material"
import IArticleData from "../../types/IArticleData"
import PageWrapper from "../PageWrapper"
import ReactPlayer from "react-player"

export interface ITextImageBandProps extends Omit<IArticleData, "type"> {
  inverted?: boolean
}

const VideoTextBand: React.FC<ITextImageBandProps> = ({ image, text, imageAlt, inverted, videoUrl }) => {
  return (
    <PageWrapper>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column-reverse",
            sm: "column-reverse",
            md: inverted ? "row-reverse" : "row"
          },
          gap: {
            xs: "1em",
            sm: "1em",
            md: "5em"
          },
          alignItems: "center"
        }}
      >
        <Box sx={{ lineHeight: "2", flex: 1, textAlign: "justify" }}>{text}</Box>

        {videoUrl && typeof window !== "undefined" && (
          <Box
            sx={{
              width: {
                xs: "100%"
              }
            }}
          >
            <ReactPlayer width={"100%"} url={videoUrl} />
          </Box>
        )}
      </Box>
    </PageWrapper>
  )
}

export default VideoTextBand
