import { Button, Card, Link, Theme, Typography, useTheme } from "@mui/material"
import { Box } from "@mui/system"
import hexRgb from "hex-rgb"
import useHover from "../hooks/useHover"
interface BlogCardProps {
    image: string
    title: string
    description: string
    link: string
}

export default function BlogCard({ image, title, description, link }: BlogCardProps) {
    const theme = useTheme()
    const { ref: refButtonHover, isHovered: isButtonHovered } = useHover()
    const primaryColorRGB = hexRgb(theme.palette.primary.main)

    return (
        <Card
            sx={{
                width: "300px",
                height: "400px",

            }}>
            <Box
                sx={{
                    backgroundPosition: "center",
                    backgroundSize: "100%",
                    backgroundImage: `url(${image})`,
                    transition: "background-size 2s ease-in",
                    height: "100%",
                    WebkitTransition: "background-size 2s ease-in",
                    ":hover": {
                        backgroundSize: "130%"
                    }
                }}>

                <Box
                    sx={theme => ({
                        background: "linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.25) 40%)",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "end",

                        ":hover": {

                            background:
                                `linear-gradient(0deg, rgba(0,0,0,0.7) 0%,
                            rgba(
                            ${primaryColorRGB.red / 2},
                            ${primaryColorRGB.green / 2},
                            ${primaryColorRGB.blue},0.7) 50%,
                            rgba(
                            ${primaryColorRGB.red},
                            ${primaryColorRGB.green},
                            ${primaryColorRGB.blue},0.8) 100%)`
                        }
                    })}

                >
                    <Box sx={{ margin: "30px" }}>
                        <Typography
                            sx={{
                                fontSize: "24px",
                                fontWeight: 600,
                                color: "white"
                            }}>
                            {title}
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: "white"
                            }}>
                            {description}
                        </Typography>
                        <Button

                            component={Link}
                            href={link}
                            ref={refButtonHover}
                            variant={isButtonHovered ? "contained" : "outlined"}
                            color="primary"
                            sx={{ marginTop: "30px", color: !isButtonHovered && "white", border: `2px solid ${theme.palette.primary}` }}
                        >
                            Read More
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Card >
    )
}