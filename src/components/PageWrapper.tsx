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
                    sm: "auto",
                    xs: "10px"
                },
                marginRight: {
                    sm: "auto",
                    xs: "10px"
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
