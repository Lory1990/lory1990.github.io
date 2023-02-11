import { Button, Theme, Typography } from "@mui/material"
import { Box, SxProps } from "@mui/system"

import EventIcon from "@mui/icons-material/Event"
import PlaceIcon from "@mui/icons-material/Place"
import React from "react"

interface ISingleDataProps {
  text?: string
  icon?: JSX.Element
}

const SingleData: React.FC<ISingleDataProps> = ({ icon, text }) => {
  if (!text) return null

  return (
    <Typography
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "5px",
        backgroundColor: "white",
        padding: "5px 10px",
        borderRadius: "500px"
      }}
    >
      {icon} {text}
    </Typography>
  )
}

interface IHeroButton {
  text: string
  onClick: () => void
}

export interface IHeroProps extends Omit<React.HTMLProps<HTMLDivElement>, "title"> {
  title?: string | JSX.Element
  subtitle?: string | JSX.Element
  date?: string
  place?: string
  background?: string
  backgroundImage?: string
  hideTitleOnCover?: boolean
  color?: string
  button?: IHeroButton
  sx?: SxProps<Theme>
}

const Hero: React.FC<IHeroProps> = ({ children, sx, date, place, background, backgroundImage, title, color = "white", subtitle, hideTitleOnCover, button }) => (
  <Box
    sx={{
      minHeight: "100vh",
      padding: "1em",
      width: "100%",
      background: background || "darkgrey",
      backgroundImage: backgroundImage ? "url(" + backgroundImage + ")" : undefined,
      backgroundSize: "cover",
      display: "flex",
      flexDirection: "column",
      ...sx
    }}
  >
    <Box
      sx={{
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        flex: "1"
      }}
    >
      {!hideTitleOnCover && (
        <>
          {typeof title == "string" && (
            <Typography variant="h1" sx={{ color, fontWeight: "bold", fontSize: { sm: "6rem", xs: "4em" } }}>
              {title}
            </Typography>
          )}
          {React.isValidElement(title) && (
            <Typography variant="h1" sx={{ color, fontWeight: "bold", fontSize: { sm: "6rem", xs: "4em" } }}>
              {title}
            </Typography>
          )}
          {subtitle && (
            <>
              {typeof subtitle == "string" ? (
                <Typography variant="subtitle1" sx={{ color, fontSize: "1.5em" }}>
                  {subtitle}
                </Typography>
              ) : (
                subtitle
              )}
            </>
          )}
          {button && (
            <Button onClick={button.onClick} variant="contained">
              {button.text}
            </Button>
          )}
        </>
      )}
    </Box>

    <Box
      sx={{
        display: "flex",
        flexDirection: {
          sm: "row",
          xs: "column"
        },
        gap: "0.75em",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        flex: "none"
      }}
    >
      <SingleData text={date} icon={<EventIcon />} />
      <SingleData text={place} icon={<PlaceIcon />} />
      {children}
    </Box>
  </Box>
)

export default Hero
