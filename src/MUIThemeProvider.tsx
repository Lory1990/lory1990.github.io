import * as React from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles"

// declare module '@mui/material/Button' {
//     interface ButtonPropsColorOverrides {
//         white: true;
//     }
// }

declare module "@mui/material/styles" {
    interface Palette {
        neutral: Palette["primary"]
    }
    interface PaletteOptions {
        neutral: PaletteOptions["primary"]
    }

    interface PaletteColor {
        darker?: string
    }
    interface SimplePaletteColorOptions {
        darker?: string
    }
}

declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
        neutral: true
    }
}

const theme = createTheme({
    palette: {
        primary: {
            main: "#754ef9"
        },
        neutral: {
            main: "#fff",
            contrastText: "#754ef9",
            dark: "#d6d6d6"
        }
    },
    typography: {
        fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
        button: {
            textTransform: "none",
            fontWeight: "bold"
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "20px",
                    boxShadow: "none"
                }
            }
            //     variants: [
            //         {
            //             props: { color: 'white' },
            //             style: {
            //                 color: "white",
            //                 backgroundColor: "white"

            //             },
            //         },
            //     ],
        },

        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: "0.75rem"
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: "#323450"
                }
            },
            variants: [
                {
                    props: { variant: "h6" },
                    style: {
                        fontSize: "1rem",
                        fontWeight: 600
                    }
                }
            ]
        }
    }
})
theme.shadows[1] = "0px 0px 15px rgb(0 0 0 / 10%)"
interface MUIThemeProviderProps {
    children: JSX.Element | JSX.Element[]
}
export default function MUIThemeProvider({ children }: MUIThemeProviderProps) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
