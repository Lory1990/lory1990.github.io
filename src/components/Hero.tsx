import { Button, Typography } from "@mui/material"
import { Box } from "@mui/system"

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
                gap: "5px"
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

interface IHeroProps {
    title?: string | JSX.Element
    subtitle?: string
    date?: string
    place?: string
    backgroundImage?: string
    hideTitleOnCover?: boolean
    color?: string
    button?: IHeroButton
}

const Hero: React.FC<IHeroProps> = ({ date, place, backgroundImage, title, color = "white", subtitle, hideTitleOnCover, button }) => (
    <Box
        sx={{
            minHeight: "100vh",
            padding: "1em",
            width: "100%",
            background: "darkgrey",
            backgroundImage: "url(" + backgroundImage + ")",
            backgroundSize: "cover",
            display: "flex",
            flexDirection: "column"
        }}
    >
        <Box
            sx={{
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
                        <Typography variant="subtitle1" sx={{ color, fontSize: "1.5em" }}>
                            {subtitle}
                        </Typography>
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
        </Box>
    </Box>
)

export default Hero
