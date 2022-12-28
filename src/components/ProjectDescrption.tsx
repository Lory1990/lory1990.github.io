import { Splide, SplideSlide } from "@splidejs/react-splide"
import { Box, Typography, useTheme } from "@mui/material"
import { DateTime } from "luxon"
import { IProject } from "../assets/projects-list"

const ProjectDescription : React.FC<IProject> = ({description, category, stack, date}) =>{

    const theme = useTheme()

    return <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "2rem"
                    }}
                >
                    <Box sx={{lineHeight: "200%",}}>{description}</Box>
                    <Box
                        sx={{
                            padding: "2rem",
                             background: theme.palette.primary.main,
                             color: theme.palette.neutral.main,
                             minWidth: "20vw",
                             gap: "1.5rem",
                             display: "flex",
                             flexDirection: "column",

                        }}
                    >
                        {category && (
                            <Box>
                                <Typography sx={{color: theme.palette.neutral.main, fontWeight: "bolder", fontSize: "1.2em"}}>Category</Typography>
                                {category.map(c => c.toString()).join(", ")}
                            </Box>
                        )}
                        <Box>
                            <Typography sx={{color: theme.palette.neutral.main, fontWeight: "bolder", fontSize: "1.2em"}}>Date</Typography>
                            {DateTime.fromISO(date).toFormat("yyyy")}
                        </Box>
                        {stack && (
                            <Box>
                                <Typography sx={{color: theme.palette.neutral.main, fontWeight: "bolder", fontSize: "1.2em"}}>Tech Stack</Typography>
                                {stack.map(c => c.toString()).join(", ")}
                            </Box>
                        )}
                    </Box>
                </Box>
}


export default ProjectDescription