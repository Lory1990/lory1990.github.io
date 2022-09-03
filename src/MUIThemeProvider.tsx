import * as React from 'react';
import { lime } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: lime[500],
        },
    },
});

interface MUIThemeProviderProps {
    children: JSX.Element | JSX.Element[]
}
export default function MUIThemeProvider({ children }: MUIThemeProviderProps) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
