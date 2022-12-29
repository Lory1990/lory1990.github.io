import { Box, Typography, useTheme } from "@mui/material"
import { DateTime } from "luxon"
import { IProject } from "../assets/projects-list"
import Title from "./typography/Title"

const ProjectDescription: React.FC<IProject> = ({ description, title, category, stack, date, role, team }) => {
    const theme = useTheme()

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: {
                    xs: "column",
                    sm: "row"
                },
                gap: "2rem"
            }}
        >
            <Box sx={{ lineHeight: "200%", textAlign: { xs: "center", sm: "left" } }}>
                <Title sx={{ fontSize: "3em", marginBottom: "0.75em" }}>{title}</Title>
                <span dangerouslySetInnerHTML={{ __html: description }} />
            </Box>
            <Box
                sx={{
                    minWidth: {
                        xs: "100%",
                        sm: "30vw"
                    }
                }}
            >
                <Box
                    sx={{
                        padding: "2rem",
                        background: theme.palette.primary.main,
                        color: theme.palette.neutral.main,
                        gap: "1.5rem",
                        display: "flex",
                        flexDirection: "column"
                    }}
                >
                    {category && (
                        <Box>
                            <Typography sx={{ color: theme.palette.neutral.main, fontWeight: "bolder", fontSize: "1.2em" }}>Category</Typography>
                            {category.map(c => c.toString()).join(", ")}
                        </Box>
                    )}
                    {role && (
                        <Box>
                            <Typography sx={{ color: theme.palette.neutral.main, fontWeight: "bolder", fontSize: "1.2em" }}>Role</Typography>
                            {role}
                        </Box>
                    )}
                    {team && (
                        <Box>
                            <Typography sx={{ color: theme.palette.neutral.main, fontWeight: "bolder", fontSize: "1.2em" }}>Team</Typography>
                            {team}
                        </Box>
                    )}
                    <Box>
                        <Typography sx={{ color: theme.palette.neutral.main, fontWeight: "bolder", fontSize: "1.2em" }}>Date</Typography>
                        {DateTime.fromISO(date).toFormat("yyyy")}
                    </Box>
                    {stack && (
                        <Box>
                            <Typography sx={{ color: theme.palette.neutral.main, fontWeight: "bolder", fontSize: "1.2em" }}>Tech Stack</Typography>
                            {stack.map(c => c.toString()).join(", ")}
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    )
}

export default ProjectDescription
