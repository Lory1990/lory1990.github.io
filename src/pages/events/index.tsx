import { Box } from "@mui/material"
import { DateTime } from "luxon"
import { GetStaticProps, GetStaticPropsContext, NextPage } from "next"
import Image from "next/image"
import { Fade } from "react-awesome-reveal"
import events, { IEvent } from "../../assets/events-list"
import CustomHead from "../../components/CustomHead"
import EventCard from "../../components/EventCard"
import FooterContactForm from "../../components/FooterContactForm"
import Hero from "../../components/Hero"
import ListWithShowMore from "../../components/ListWithShowMore"
import PageWrapper from "../../components/PageWrapper"
import Title from "../../components/typography/Title"
import { IListProps } from "../../types/IListProps"

export interface IEventListProps extends IListProps<IEvent> {}

const EventsListPage: NextPage<IEventListProps> = ({ list }) => {
    const nextEvent = list.filter(event => DateTime.fromISO(event.date).diffNow("day").days > 0).reverse()?.[0]
    const pastEvents = list.filter(event => DateTime.fromISO(event.date).diffNow("day").days < 0)

    return (
        <div>
            <CustomHead title={"Events"} />
            <Hero
                title={"Events"}
                sx={{
                    backgroundImage: undefined,
                    position: "relative",
                    background: "linear-gradient(135deg, #00401BCC 20%, #95CD7D 100%)"
                }}
            >
                <Box sx={{ position: "absolute", right: "10px", bottom: "20px" }}>
                    <Image src="/img/events.png" alt="Projects" width={657} height={435} />
                </Box>
            </Hero>
            <PageWrapper>
                {nextEvent && (
                    <>
                        <Title>Next Event</Title>
                        <EventCard {...nextEvent} hilight={true} />
                        <Title sx={{ marginTop: "3em" }}>Past Events</Title>
                    </>
                )}

                <ListWithShowMore
                    animationComponent={Fade}
                    animationComponentProps={{ duration: 750, cascade: true, direction: "left", triggerOnce: true }}
                    list={pastEvents}
                    singleElementComponent={EventCard}
                    sliceList={3}
                />

                <FooterContactForm title="I am available for talks" subtitle="Do you need a techinical speaker? Drop a message 👇" />
            </PageWrapper>
        </div>
    )
}

export const getStaticProps: GetStaticProps<IEventListProps> = async (context: GetStaticPropsContext) => {
    return {
        props: {
            list: events.sort((a: IEvent, b: IEvent) => {
                return DateTime.fromISO(b.date).diff(DateTime.fromISO(a.date), "day").days
            })
        }
    }
}

export default EventsListPage
