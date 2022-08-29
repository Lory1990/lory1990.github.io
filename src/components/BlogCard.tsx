import { Button, Card, Link, Theme, Typography, useTheme } from "@mui/material"
import { Box } from "@mui/system"
import useHover from "../hooks/useHover"
interface BlogCardProps {
    image: string
    title: string
    description: string
    link: string
}

export default function BlogCard({ image, title, description, link }: BlogCardProps) {
    const theme2 = useTheme()
    const { ref: refButtonHover, isHovered: isButtonHovered } = useHover()
    return (
        <Card
            sx={{
                width: "300px",
                height: "400px",
                backgroundImage: `url(${image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}>

            <Box
                sx={{
                    background: "linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.25) 40%)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "end",
                    " :hover": {
                        background: "linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(125,0,0,0.7) 50%, rgba(255,0,0,0.8) 100%)",
                        //transition: (theme: Theme) => theme.transitions.create('all', {
                        //    duration: theme.transitions.duration.shortest,
                        //})
                    }

                }}>
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
        </Card>
    )
}