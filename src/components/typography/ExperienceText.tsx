import { Box, SxProps, Theme } from "@mui/material"

export interface IExperienceTextProps extends React.HTMLAttributes<HTMLDivElement> {
    sx?: SxProps<Theme>
    years?: number
}

export const ExperienceText: React.FC<IExperienceTextProps> = ({ years, sx }) => {
    if (!years) return null

    return (
        <Box sx={{ ...sx, display: "flex" }}>

            <Box sx={{ fontWeight: "bold", marginRight: "0.2em" }}>Experience:</Box>
            <Box>{years} {years > 1 ? " years" : "year"}</Box>
        </Box>
    )
}

export default ExperienceText
