import { Box } from "@mui/material"
import Image from "next/image"
import { Fade, Zoom } from "react-awesome-reveal"

export interface IImageAndTextBandProps {
    text?: string
    image?: string
    imageAlt?: string
    inverted?: boolean
}

const ImageAndTextBand: React.FC<IImageAndTextBandProps> = ({ image, text, imageAlt, inverted }) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: {
                    xs: "column-reverse",
                    sm: "column-reverse",
                    md: inverted ? "row-reverse" : "row"
                },
                gap: "5em",
                alignItems: "center"
            }}
        >
            <Fade direction="up">
                <Box sx={{ lineHeight: "2" }}>{text}</Box>
            </Fade>
            {image && (
                <Zoom delay={200}>
                    <Image src={image} alt={imageAlt || "An image"} width={300} height={300} />
                </Zoom>
            )}
        </Box>
    )
}

export default ImageAndTextBand
