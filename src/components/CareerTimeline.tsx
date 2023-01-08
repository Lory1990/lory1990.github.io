import Timeline from "@mui/lab/Timeline"
import TimelineItem from "@mui/lab/TimelineItem"
import TimelineSeparator from "@mui/lab/TimelineSeparator"
import TimelineConnector from "@mui/lab/TimelineConnector"
import TimelineContent from "@mui/lab/TimelineContent"
import TimelineDot from "@mui/lab/TimelineDot"
import { Chip, Typography, useMediaQuery, useTheme } from "@mui/material"
import { Box } from "@mui/system"

interface TimelineProps {
    timelineEvents: TimelineEvent[]
}

interface TimelineEventContentProps {
    timelineEvent: TimelineEvent
    isLeft: boolean
}

export interface TimelineEvent {
    position: string
    company: string
    location: string
    from: string
    to: string
    description: string
}

function TimelineEventContent({ timelineEvent, isLeft }: TimelineEventContentProps) {
    const { position, company, location, from, to, description } = timelineEvent
    const theme = useTheme()
    const mediaQuery = useMediaQuery(theme.breakpoints.down("sm"))
    return (
        <TimelineContent sx={{ paddingTop: "0px", paddingBottom: "0px" }}>
            <Typography variant="body1" sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                {position}
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", fontSize: "1.1rem" }} gutterBottom color={theme.palette.grey[500]}>{`${company} | ${location}`}</Typography>
            <Chip label={`${from} - ${to}`} color="primary" style={{ marginBottom: "1.25rem", fontSize: "0.85rem", fontWeight: "bold" }} />
            <Box sx={{ display: "flex", justifyContent: isLeft ? "end" : "" }}>
                <Typography
                    variant="body1"
                    sx={{
                        maxWidth: mediaQuery ? "100%" : "60%",
                        fontSize: "0.9rem",
                        fontWeight: "bold"
                    }}
                    gutterBottom
                    color={theme.palette.grey[400]}
                >
                    {description}
                </Typography>
            </Box>
        </TimelineContent>
    )
}

export default function CareerTimeline({ timelineEvents }: TimelineProps) {
    const theme = useTheme()
    const mediaQuery = useMediaQuery(theme.breakpoints.down("sm"))
    return (
        <Timeline position={mediaQuery ? "left" : "alternate"}>
            {!mediaQuery && (
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent />
                </TimelineItem>
            )}
            {timelineEvents?.map?.((timelineEvent, index) => (
                <TimelineItem
                    key={`${index}-${timelineEvent.position}`}
                    sx={{
                        ...(mediaQuery && {
                            ":before": {
                                display: "none"
                            }
                        })
                    }}
                >
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" color="primary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineEventContent isLeft={mediaQuery ? true : index % 2 == 0} timelineEvent={timelineEvent} />
                </TimelineItem>
            ))}
        </Timeline>
    )
}