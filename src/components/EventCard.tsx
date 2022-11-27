import { BroadcastOnHome, Person, VideoCameraFront } from "@mui/icons-material"
import { Box, Card, CardContent } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import { IEvent } from "../assets/events-list"
import { DateTime } from "luxon"

export interface IEventCardProps extends IEvent {}

const EventCard: React.FC<IEventCardProps> = ({ slug, date, image, title, isOnline, venue }) => {
    return (
        <Link href={`/events/${slug}`}>
            <Card
                sx={{
                    display: {
                        sm: "grid",
                        xs: "flex"
                    },
                    flexDirection: "column",
                    gap: "0.5em",
                    gridTemplateColumns: "60px 1fr 50px 1fr",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "10px",
                    "&:hover": {
                        boxShadow: "0 6px 12px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
                    }
                }}
            >
                <Image src={image} style={{ borderRadius: "100%" }} alt={`Image for ${title}}`} width={50} height={50} />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box sx={{ fontWeight: "bold" }}>{title}</Box>
                    <Box sx={{ fontSize: "0.8em", color: "#999" }}>{venue}</Box>
                </Box>
                <Box>{isOnline ? <VideoCameraFront /> : <Person />}</Box>
                <Box sx={{ textAlign: { sm: "right", xs: "center" }, fontWeight: "bold", color: "blue" }}>{DateTime.fromISO(date).toFormat("dd MMM yy")}</Box>
            </Card>
        </Link>
    )
}

export default EventCard
