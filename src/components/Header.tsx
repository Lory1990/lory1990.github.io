import { AppBar, Button, IconButton, Toolbar, Typography, useMediaQuery, useScrollTrigger, useTheme } from "@mui/material";
import { Box, Theme } from "@mui/system";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
import useHover from "../hooks/useHover";

export interface HeaderElement {
    label: string
    link: string
}
interface HeaderProps {
    headerElements: HeaderElement[]
}


function HeaderElementComponent({ label, link }: HeaderElement) {
    const theme = useTheme()
    const { hoverRef, isHovered } = useHover()
    return (
        <Box
            onClick={() => console.log(label)}
            ref={hoverRef}
            sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                marginLeft: "15px",
                marginRight: "15px",
                borderBottom: `${theme.palette.secondary.main} 2px solid`,
                color: isHovered ? theme.palette.secondary.main : "inherit",
                transition: "color 300ms linear",
            }}
        >
            <Typography  >
                {label.toUpperCase()}
            </Typography>
        </Box>
    )
}

export default function Header({ headerElements }: HeaderProps) {
    const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
    const theme = useTheme()
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    const toolbarStyle = matches
        ?
        {
            minHeight: "64px",
            paddingLeft: "24px",
            paddingRight: "24px"
        }
        :
        {
            minHeight: "48px",
        }

    return (
        <AppBar
            elevation={trigger ? 4 : 0}
            position="sticky"
            sx={{
                background: trigger ? theme.palette.primary.main : 'transparent',
                transition: "background 200ms linear",
                ...toolbarStyle
            }}>
            <Box sx={{
                display: "flex",
                justifyContent: "end",
                height: "64px"
            }}>

                {matches
                    ?
                    <Box
                        sx={{
                            display: "flex",
                            height: "100%"
                        }}>
                        {headerElements.map(({ link, label }) => <HeaderElementComponent key={label} link={link} label={label} />)}
                    </Box>

                    : <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        sx={{ ml: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>}

                <div id="cont"></div>
            </Box>
        </AppBar >
    )
}