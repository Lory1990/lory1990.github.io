import { Box } from "@mui/material"
import { SxProps, Theme } from "@mui/system"
import Image from "next/image"
import IArticleData from "../../types/IArticleData"
import PageWrapper from "../PageWrapper"

export interface ITextImageBandProps extends Omit<IArticleData, "type"> {
  imageAlt?: string
  inverted?: boolean
  sx?: SxProps<Theme>
  id?: string,
}

const TextImageBand: React.FC<ITextImageBandProps> = ({ image, text, imageAlt = "An image", inverted, sx, id, imageWidth = 300, imageHeight = 300 }) => {
  return (
    <PageWrapper id={id}>
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
          alignItems: "center",
          ...sx
        }}
      >
        <Box sx={{ lineHeight: "2", flex: 1, textAlign: "justify" }}>{text}</Box>
        {image && (
          // <Box sx={{ width: {xs: "90vw", sm: "90vw", md: imageWidth}, flex: "none", overflow: "hidden", position: "relative", height: imageHeight }} height={imageHeight}>
            // <Image style={{ margin: "auto", objectFit: "contain" }} src={Array.isArray(image) ? image[0] : image} sizes="(max-width: 90vw) 90vw" alt={imageAlt} fill={true}  />
            <Box sx={{flex: 1, overflow: "hidden", position: "relative", maxWidth: {xs: "90vw", sm: "90vw", md: imageWidth}}}>
              <img src={Array.isArray(image) ? image[0] : image}  alt={imageAlt} style={{ width: "100%", margin: "auto", objectFit: "contain" }} /> 
            </Box>
          // </Box>
        )}
      </Box>
    </PageWrapper>
  )
}

export default TextImageBand
