import { Box, SxProps } from "@mui/material"

export interface ICardsBandProps extends React.HTMLAttributes<HTMLDivElement> {
    columns?: number
}

const CardsBand: React.FC<ICardsBandProps> = ({ children, columns }) => {
    if (columns) {
        return (
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Box
                    sx={{
                        display: "grid",
                        flex: "1",
                        gridTemplateColumns: {
                            xs: `1fr`,
                            md: `repeat(${columns}, 1fr)`
                        },
                        justifyItems: "center",
                        rowGap: {
                            xs: `10px`,
                            sm: `40px`
                        }
                    }}
                >
                    {children}
                </Box>
            </Box>
        )
    } else {
        return (
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "20px",
                    justifyContent: "center",
                    margin: "40px 0px"
                }}
            >
                {children}
            </Box>
        )
    }
}

export default CardsBand
