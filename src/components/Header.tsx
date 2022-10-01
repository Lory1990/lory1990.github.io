import { AppBar, IconButton, Drawer, Typography, useMediaQuery, useScrollTrigger, useTheme, List, ListItemButton, ListItemText, ListItem } from "@mui/material";
import { Box, Theme } from "@mui/system";
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from "react";
import useHover from "../hooks/useHover";
import { useRouter } from "next/router";
import Link from "next/link";


interface HeaderElement {
    label: string
    link: string
}

interface DrawerElement extends HeaderElement {
    setDrawerOpen: Function
}
interface HeaderProps {
    headerElements: HeaderElement[]
}


function HeaderElementComponent({ label, link }: HeaderElement) {
    const theme = useTheme()
    const { hoverRef, isHovered } = useHover()
    const router = useRouter()

    return (
        <Link href={link}>
            <Box
                ref={hoverRef}
                sx={{
                    height: "100%",
                    display: "flex",
                    cursor: "pointer",
                    marginLeft: "15px",
                    position: "relative",
                    marginRight: "15px",
                    flexDirection: "column",
                    justifyContent: "center",
                    color: (router.pathname == link || isHovered) ? theme.palette.secondary.main : "inherit",
                    transition: "color 500ms linear",
                }}
            >
                <Typography sx={{ fontWeight: "bold" }}>
                    {label.toUpperCase()}
                </Typography>
                <Box className="slider"
                    sx={{
                        width: router.pathname == link ? "100%" : "0%",
                        height: "2px",
                        borderBottom: `${theme.palette.secondary.main} 3px solid`,
                        transition: "width 500ms ease",
                        position: "absolute",
                        bottom: "0px"
                    }} />
            </Box>
        </Link>
    )
}

function DrawerItem({ link, label, setDrawerOpen }: DrawerElement) {
    const router = useRouter()

    return (
        <ListItem key={link} disablePadding>
            <ListItemButton onClick={() => setDrawerOpen(false)}>
                <Link href={link}>
                    <ListItemText primary={
                        <Typography
                            sx={(theme: Theme) => (
                                {
                                    fontWeight: "bold",
                                    color: router.pathname == link ? theme.palette.secondary.main : "inherit",
                                })}>
                            {label.toUpperCase()}
                        </Typography>}
                    />
                </Link>
            </ListItemButton>
        </ListItem>
    )
}
export default function Header({ headerElements }: HeaderProps) {
    const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
    const theme = useTheme()
    const [drawerOpen, setDrawerOpen] = useState(false)

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
        <>
            <AppBar
                elevation={trigger ? 4 : 0}
                position="fixed"
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
                            onClick={() => setDrawerOpen(!drawerOpen)}
                        >
                            <MenuIcon />
                        </IconButton>}
                </Box>
            </AppBar >

            <Drawer
                anchor={"right"}
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <Box>
                    <List>
                        {headerElements.map(({ label, link }) => (
                            <DrawerItem label={label} link={link} setDrawerOpen={setDrawerOpen} />
                        ))}
                    </List>
                </Box>

            </Drawer>

        </>
    )
}