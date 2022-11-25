import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot'
import { Chip, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';

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
    return <TimelineContent>
        <Typography variant="h6" >{position}</Typography>
        <Typography variant="subtitle2" sx={{ fontWeight: "bold", marginBottom: "0.5rem" }} color={theme.palette.grey[500]}>{`${company} | ${location}`}</Typography>
        <Chip label={`${from} - ${to}`} color="primary" style={{ marginBottom: "1.25rem", fontSize: "0.75rem", fontWeight: "bold" }} />
        <Box sx={{ display: "flex", justifyContent: isLeft ? "end" : "" }}>
            <Typography variant="body2" sx={{ maxWidth: "50%", fontSize: "0.8rem" }} color={theme.palette.grey[500]}>{description}</Typography>
        </Box>
    </TimelineContent>
}

export default function CareerTimeline({ timelineEvents }: TimelineProps) {
    return (
        <Timeline position="alternate">
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent />
            </TimelineItem>
            {
                timelineEvents.map((timelineEvent, index) => (
                    <TimelineItem key={`${index}-${timelineEvent.position}`}>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" color="primary" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineEventContent
                            isLeft={index % 2 == 0}
                            timelineEvent={timelineEvent} />
                    </TimelineItem>
                ))}
        </Timeline>
    )
}


