import { BroadcastOnHome, Person, VideoCameraFront } from "@mui/icons-material"
import { Box, Card, CardActionArea, CardContent } from "@mui/material"
import Typography from "@mui/material/Typography"
import { useTheme } from "@mui/system"
import { DateTime } from "luxon"
import Image from "next/image"
import Link from "next/link"
import { IEvent } from "../../assets/events-list"

export interface IEventCardProps extends IEvent { }

const EventCard: React.FC<IEventCardProps> = ({ slug, date, image, title, isOnline, venue, description }) => {
    const theme = useTheme()
    return (
        <Link href={`/events/${slug}`}>
            <Card elevation={1} sx={{ height: "150px" }}>
                <CardActionArea>
                    <div style={{ display: "flex" }}>
                        <Image src={image} style={{ objectFit: "contain" }} alt={`Image for ${title}}`} width="150" height="150" />

                        <CardContent sx={{ display: "flex", flexDirection: "column", justifyItems: "left", paddingLeft: "30px" }}>
                            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                                {title}
                            </Typography>
                            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }} color={theme.palette.grey[500]}>
                                {DateTime.fromFormat(date, "yyyy-mm-dd").toLocaleString(DateTime.DATE_MED)}
                            </Typography>
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
