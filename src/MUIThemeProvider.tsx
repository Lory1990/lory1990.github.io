import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        dashed: true;
    }
}

const theme = createTheme({
    palette: {
        primary: {
            main: "#754ef9",
        },
    },
    typography: {
        fontFamily: `"Poppins", "Roboto", "Helvetica", "Arial", sans-serif`
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                }
            },
            variants: [
                {
                    props: { variant: 'h6' },
                    style: {
                        fontSize: "1rem",
                        fontWeight: 600,
                    },
                },
            ],
        },
    }
});

interface MUIThemeProviderProps {
    children: JSX.Element | JSX.Element[]
}
export default function MUIThemeProvider({ children }: MUIThemeProviderProps) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
