import { Box, SxProps, Theme } from "@mui/material"

export interface ISectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
    sx?: SxProps<Theme>
}

export const SectionTitle: React.FC<ISectionTitleProps> = ({ children, sx }) => {
    return <Box sx={{ fontSize: "2em", fontWeight: "bold", marginBottom: "5px", ...sx }}>{children}</Box>
}

export default SectionTitle
