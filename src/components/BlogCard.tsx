import { Button, Card, CardContent, Fade, Typography, useTheme } from "@mui/material"
import { Box } from "@mui/system"
import hexRgb from "hex-rgb"
import { useRouter } from "next/router"
import useHover from "../hooks/useHover"
interface BlogCardProps {
    image: string
    title: string
    description: string
    link: string
}

export default function BlogCard({ image, title, description, link }: BlogCardProps) {
    const theme = useTheme()
    const { hoverRef: refTitleHover, isHovered: isTitleHovered } = useHover()
    const { hoverRef: refCardHover, isHovered: isCardHovered } = useHover()
    const primaryColorRGB = hexRgb(theme.palette.primary.main)
    const router = useRouter()

    const onButtonClick = () => {
        router.push(link)
    }

    return (
        <Box sx={{ width: "300px", position: "relative", height: "400px" }} >
            <Card
                elevation={0}
                ref={refCardHover}
                sx={{
                    height: "300px",
                    width: "100%",
                    backgroundImage: `url(${image})`,
                    backgroundSize: "100%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    transition: "background-size 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    WebkitTransition: "background-size 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    ":hover": {
                        backgroundSize: "130%"
                    }
                }}
            >
                {/* <Box
                sx={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    opacity: 1,
                    background: "linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.0) 40%)",
                    WebkitTransition: "opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    transition: "opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    ...isCardHovered && {
                        opacity: 0
                    }
                }}
            /> */}
                <Box
                    sx={{
                        position: "absolute",
                        WebkitTransition: "opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        transition: "opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        height: "300px",
                        width: "100%",
                        background: `rgba(
                        ${primaryColorRGB.red},
                        ${primaryColorRGB.green},
                        ${primaryColorRGB.blue},0.3)`,
                        borderRadius: "10px",
                        // background:
                        //     `linear-gradient(0deg, rgba(0,0,0,0.6) 0%,
                        // rgba(
                        // ${primaryColorRGB.red / 2},
                        // ${primaryColorRGB.green / 2},
                        // ${primaryColorRGB.blue},0.2) 50%,
                        // rgba(
                        // ${primaryColorRGB.red},
                        // ${primaryColorRGB.green},
                        // ${primaryColorRGB.blue},0.5) 100%)`,
                        opacity: 0,
                        ...((isCardHovered || isTitleHovered) && {
                            opacity: 1
                        })
                    }}
                />

                <Box sx={{ display: "flex", justifyContent: "center", width: "100%", height: "100%", alignItems: "center" }}>
                    <Fade in={isCardHovered || isTitleHovered}>
                        <Box>
                            <Button onClick={onButtonClick} variant="contained" color="neutral">
                                Read More
                            </Button>
                        </Box>
                    </Fade>
                </Box>
            </Card>
            <Box sx={{ display: "flex", justifyContent: "flex-end", position: "absolute", width: "100%", top: "250px", right: -30 }}>
                <Card ref={refTitleHover} elevation={1} sx={{ width: "90%" }}>
                    <CardContent>
                        <Typography gutterBottom variant="body1" sx={{ fontWeight: "bold", fontSize: "1.20em" }}>
                            {title}
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: "" }} color={theme.palette.grey[700]}>
                            {description}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    )
}