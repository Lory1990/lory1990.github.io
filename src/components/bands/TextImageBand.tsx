import { Box } from "@mui/material"
import Image from "next/image"
import { Fade, Zoom } from "react-awesome-reveal"
import IArticleData from "../../types/IArticleData"

export interface ITextImageBandProps extends Omit<IArticleData, "type"> {
    imageAlt?: string
    inverted?: boolean
}

const TextImageBand: React.FC<ITextImageBandProps> = ({ image, text, imageAlt, inverted }) => {
    return (
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
            <Fade direction="up" style={{ flex: 1 }}>
                <Box sx={{ lineHeight: "2", flex: 1, textAlign: "justify" }}>{text}</Box>
            </Fade>
            {image && (
                <Zoom delay={200} style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                    <Box>
                        <Image style={{ margin: "auto" }} src={Array.isArray(image) ? image[0] : image} alt={imageAlt || "An image"} width={300} height={300} />
                    </Box>
                </Zoom>
            )}
        </Box>
    )
}

export default TextImageBand
