import { Box, SxProps, Theme } from "@mui/material"

export interface IPageWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    sx?: SxProps<Theme>
}

export const PageWrapper: React.FC<IPageWrapperProps> = ({ children, sx }) => {
    return (
        <Box
            sx={{
                marginTop: "1em",
                marginLeft: {
                    md: "auto",
                    xs: "1.5em"
                },
                marginRight: {
                    md: "auto",
                    xs: "1.5em"
                },
                maxWidth: {
                    sm: "1200px",
                    xs: "none"
                },
                ...sx
            }}
        >
            {children}
        </Box>
    )
}

export default PageWrapper
