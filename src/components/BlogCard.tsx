import { Button, Card, Slide, Typography, useTheme } from "@mui/material"
import { Box } from "@mui/system"
import hexRgb from "hex-rgb"
import Link from "next/link"
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
    const { hoverRef: refButtonHover, isHovered: isButtonHovered } = useHover()
    const { hoverRef: refCardHover, isHovered: isCardHovered } = useHover()
    const primaryColorRGB = hexRgb(theme.palette.primary.main)
    const router = useRouter();

    const onButtonClick = () =>{
        router.push(link)
    }



    return (
        <Card
            ref={refCardHover}
            sx={{
                width: "300px",
                height: "400px",
                position: "relative",
                backgroundImage: `url(${image})`,
                backgroundSize: "100%",
                backgroundPosition: "center",
                transition: "background-size 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                WebkitTransition: "background-size 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                ...isCardHovered && {
                    backgroundSize: "130%"
                }
            }}>


            <Box
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
            />
            <Box
                sx={{
                    position: "absolute",
                    WebkitTransition: "opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    transition: "opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    height: "100%",
                    width: "100%",
                    background:
                        `linear-gradient(0deg, rgba(0,0,0,0.6) 0%,
                    rgba(
                    ${primaryColorRGB.red / 2},
                    ${primaryColorRGB.green / 2},
                    ${primaryColorRGB.blue},0.2) 50%,
                    rgba(
                    ${primaryColorRGB.red},
                    ${primaryColorRGB.green},
                    ${primaryColorRGB.blue},0.5) 100%)`,
                    opacity: 0,
                    ...isCardHovered && {
                        opacity: 1
                    }
                }} />


            <Box sx={{ position: "absolute", bottom: "10px" }}>
                <Box sx={{ margin: "30px" }}>
                    <Typography
                        sx={{
                            fontSize: "24px",
                            fontWeight: 600,
                            color: "white"
                        }}>
                        {title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "white" }}>
                        {description}
                    </Typography>
                    <Slide direction="up" in={isCardHovered}>
                            <Button
                                ref={refButtonHover}
                                onClick={onButtonClick}
                                variant={isButtonHovered ? "contained" : "outlined"}
                                color="primary"
                                sx={{ marginTop: "30px", color: !isButtonHovered && "white", border: `2px solid ${theme.palette.primary}`, pointerEvents: "auto" }}
                            >
                            Read More
                        </Button>
                    </Slide>
                </Box>
            </Box>
        </Card >
    )
}