import { BroadcastOnHome, Person, VideoCameraFront } from "@mui/icons-material"
import { Box, Button, Card, CardActionArea, CardActions, CardContent, Chip, Theme, useMediaQuery } from "@mui/material"
import Typography from "@mui/material/Typography"
import { useTheme } from "@mui/system"
import { DateTime } from "luxon"
import Image from "next/image"
import Link from "next/link"
import { IEvent } from "../../assets/events-list"
import LocationOnIcon from "@mui/icons-material/LocationOn"

const EventCard: React.FC<IEvent> = ({ slug, date, image, title, isOnline, venue, shortDescription: description, subtitle }) => {
  const theme = useTheme()
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"))

  return (
    <Link href={`/events/${slug}`}>
      <Card elevation={1} sx={{ height: matches ? "unset" : "175px", display: "flex" }}>
        <CardActionArea>
          <div style={{ display: "flex", flexDirection: matches ? "column" : "row", alignItems: matches ? "center" : "unset", marginTop: matches ? "1em" : "unset" }}>
            <Image src={image} style={{ objectFit: "contain", borderRadius: matches ? "10%" : "unset" }} alt={`Image for ${title}`} width="175" height="175" />

            <CardContent sx={{ display: "flex", flexDirection: "column", justifyItems: "left", paddingLeft: "30px", width: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "baseline" }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: "bold" }} color={theme.palette.grey[500]}>
                    {DateTime.fromFormat(date, "YYYY-MM-DD").toLocaleString(DateTime.DATE_MED)}
                  </Typography>
                </div>
                <Chip sx={{ fontWeight: "bold" }} label={isOnline ? "Online" : "In Presence"} />
              </div>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                {title}
              </Typography>
              {subtitle && (
                <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                  {subtitle}
                </Typography>
              )}
              {venue && (
                <div style={{ display: "flex", alignItems: "center", marginTop: matches ? "0.5em" : "unset" }}>
                  <LocationOnIcon fontSize="small" sx={{ color: theme.palette.grey[500], marginLeft: "-0.4rem", marginRight: "0.2rem" }} />
                  <Typography variant="subtitle2" sx={{ fontSize: "0.8rem" }} color={theme.palette.grey[500]}>
                    {venue}
                  </Typography>
                </div>
              )}

              <Typography variant="subtitle2" sx={{ marginTop: "1em" }} color={theme.palette.grey[700]}>
                {description}
              </Typography>
            </CardContent>
          </div>

          {/*<Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box sx={{ fontWeight: "bold" }}>{title}</Box>
                    <Box sx={{ fontSize: "0.8em", color: "#999" }}>{venue}</Box>
                </Box>
                <Box>{isOnline ? <VideoCameraFront /> : <Person />}</Box>
                <Box sx={{ textAlign: { sm: "right", xs: "center" }, fontWeight: "bold", color: "blue" }}>{DateTime.fromISO(date).toFormat("dd MMM yy")}</Box> */}
        </CardActionArea>
      </Card>
    </Link>
  )
}

export default EventCard
