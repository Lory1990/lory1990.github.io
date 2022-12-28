import { Box } from "@mui/material"
import Image from "next/image"
import { Fade, Zoom } from "react-awesome-reveal"
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
                <Fade direction="up" style={{ flex: 1 }}>
                    <Box sx={{ lineHeight: "2", flex: 1, textAlign: "justify" }}>{text}</Box>
                </Fade>
                {videoUrl && typeof window !== "undefined" && (
                    <Zoom delay={200} style={{ flex: 1, display: "flex", justifyContent: "center", width: "100%"}}>
                        <Box sx={{
                            width:{
                                xs: "100%"
                            }
                        }}>
                            <ReactPlayer
                                width={"100%"}
                                url={videoUrl}
                            />
                        </Box>
                    </Zoom>
                )}
            </Box>
        </PageWrapper>
    )
}

export default VideoTextBand
