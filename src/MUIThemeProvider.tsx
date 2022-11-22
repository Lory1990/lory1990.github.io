import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: "#754ef9",
        },
    },
    typography: {
        fontFamily: `"Poppins", "Roboto", "Helvetica", "Arial", sans-serif`
    }
});

interface MUIThemeProviderProps {
    children: JSX.Element | JSX.Element[]
}
export default function MUIThemeProvider({ children }: MUIThemeProviderProps) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
