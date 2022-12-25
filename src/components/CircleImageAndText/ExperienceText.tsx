import { Box, SxProps, Theme, Typography, useTheme } from "@mui/material"

export interface IExperienceTextProps {
    sx?: SxProps<Theme>
    years: number
}

export const ExperienceText: React.FC<IExperienceTextProps> = ({ years, sx }) => {
    const theme = useTheme()
    return (
        <Box sx={{ ...sx, display: "flex" }}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginRight: "0.5rem" }} color={theme.palette.grey[700]}>
                Experience:
            </Typography>
            <Typography variant="subtitle1" sx={{ marginRight: "0.5rem" }} color={theme.palette.grey[600]}>
                {years} {years > 1 ? " years" : "year"}
            </Typography>
        </Box>
    )
}

export default ExperienceText
