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
        <Box sx={{ width: "300px", position: "relative", height: "400px" }}>
            {/* background image */}
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
                        backgroundSize: "120%"
                    }
                }}
            >
                {/* background color filter*/}
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
                        ${primaryColorRGB.blue},0.1)`,
                        // backdropFilter: "blur(1px)",
                        borderRadius: "10px",
                        opacity: 0,
                        ...((isCardHovered || isTitleHovered) && {
                            opacity: 1
                        })
                    }}
                />

                {/* read more button */}
                <Box sx={{ display: "flex", justifyContent: "center", width: "100%", height: "100%", alignItems: "center" }}>
                    <Fade in={isCardHovered || isTitleHovered}>
                        <Box>
                            <Button onClick={onButtonClick} variant="contained" color="neutral" sx={{ boxShadow: "none", "&:hover": { boxShadow: "none", } }}>
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
                        <Typography variant="body1" color={theme.palette.grey[700]}>
                            {description}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    )
}
