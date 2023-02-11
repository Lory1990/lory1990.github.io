import { Box, SxProps, Theme } from "@mui/material"

export interface ITitleProps extends React.HTMLAttributes<HTMLDivElement> {
  sx?: SxProps<Theme>
}

export const Title: React.FC<ITitleProps> = ({ children, sx }) => {
  return <Box sx={{ fontSize: "1.5em", fontWeight: "bold", marginBottom: "15px", ...sx }}>{children}</Box>
}

export default Title
