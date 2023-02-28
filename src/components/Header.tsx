import { AppBar, IconButton, Drawer, Typography, useMediaQuery, useScrollTrigger, useTheme } from "@mui/material"
import { Box, Theme } from "@mui/system"
import MenuIcon from "@mui/icons-material/Menu"
import React, { useContext, useState } from "react"
import useHover from "../hooks/useHover"
import { useRouter } from "next/router"
import Link from "next/link"
import { outlinedColor } from "../utils"
import CloseIcon from "@mui/icons-material/Close"
import { ThemeContext } from "../context/ThemeProvider"
import { HeaderColor } from "../types/HeaderColor"

export interface HeaderElement {
  label: string
  link: string
  onClick?: () => void
  type?: "vertical" | "horizontal"
}

interface HeaderProps {
  headerElements: HeaderElement[]
}

function HeaderElementComponent({ label, link, type, onClick }: HeaderElement) {
  const theme = useTheme()
  const { hoverRef, isHovered } = useHover()
  const { pathname } = useRouter()

  return (
    <Link
      href={link}
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Box
        ref={hoverRef}
        onClick={onClick}
        sx={{
          height: type == "horizontal" ? "100%" : "unset",
          textAlign: type == "vertical" ? "center" : "unset",
          width: type == "vertical" ? "fit-content" : "unset",
          marginTop: type == "vertical" ? "10px" : "unset",
          marginBottom: type == "vertical" ? "10px" : "unset",
          display: "flex",
          cursor: "pointer",
          marginLeft: "15px",
          position: "relative",
          marginRight: "15px",
          flexDirection: "column",
          justifyContent: "center",
          color: pathname.startsWith(link) || isHovered ? theme.palette.primary.main : "#313450",
          transition: "color 300ms linear"
        }}
      >
        <Typography sx={{ fontSize: type == "vertical" ? "25px" : "18px" }}>{label}</Typography>
        <Box
          className="slider"
          sx={{
            position: "absolute",
            height: "1px",
            bottom: type == "vertical" ? "-3px" : "10px",
            right: isHovered ? "unset" : 0,
            width: pathname.startsWith(link) ? "100%" : isHovered ? "100%" : "0%",
            borderBottom: `${theme.palette.primary.main} 3px solid`,
            transition: "width 500ms ease"
          }}
        />
      </Box>
    </Link>
  )
}

export default function Header({ headerElements }: HeaderProps) {
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"))
  const [drawerOpen, setDrawerOpen] = useState(false)
  const themeContext = useContext(ThemeContext)
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  })

  const toolbarStyle = matches
    ? {
        minHeight: "64px",
        paddingLeft: "24px",
        paddingRight: "24px"
      }
    : {
        minHeight: "48px"
      }

  return (
    <>
      <AppBar
        elevation={0}
        position="fixed"
        sx={{
          zIndex: 1201,
          backgroundColor: matches ? (trigger ? "white" : themeContext.headerColor) : "unset",
          transition: "background 200ms linear",
          borderBottom: (themeContext.headerColor === HeaderColor.TRANSPARENT && !trigger) || !matches ? "unset" : `2px solid ${outlinedColor}`, //matches ? (trigger ? `2px solid ${outlinedColor}` : "unset") : "unset",
          ...toolbarStyle
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            height: "64px"
          }}
        >
          {matches ? (
            <Box
              sx={{
                display: "flex",
                height: "100%"
              }}
            >
              {headerElements.map(({ link, label }) => (
                <HeaderElementComponent key={label} link={link} label={label} />
              ))}
            </Box>
          ) : (
            <IconButton size="large" color="primary" sx={{ mr: 1 }} onClick={() => setDrawerOpen(!drawerOpen)}>
              {drawerOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          )}
        </Box>
      </AppBar>

      <Drawer
        anchor={"top"}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }
        }}
      >
        {headerElements?.map?.(({ label, link }) => (
          <HeaderElementComponent key={label} link={link} label={label} onClick={() => setDrawerOpen(false)} type={"vertical"} />
        ))}
      </Drawer>
    </>
  )
}
