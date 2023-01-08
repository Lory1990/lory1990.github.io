import { Box } from "@mui/material"
import { GetStaticProps, GetStaticPropsContext, NextPage } from "next"
import events, { IEvent } from "../../../assets/events-list"
import Article from "../../../components/Article"
import FooterContactForm from "../../../components/FooterContactForm"
import Hero from "../../../components/Hero"
import ReactPlayer from "react-player"
import PageWrapper from "../../../components/PageWrapper"
import OtherEventsForYou from "../../../components/OtherEventsForYou"
import CustomHead from "../../../components/CustomHead"

interface IEventPageProps extends IEvent {}

const Events: NextPage<IEventPageProps> = ({ hideTitleOnCover, article, date, venue, subtitle, link, description, title, video, cover }) => {
    return (
        <div>
            <CustomHead title={title} />
            <Hero title={title} date={date} backgroundImage={cover} subtitle={subtitle} place={venue} hideTitleOnCover={hideTitleOnCover} />

            {(description || video) && (
                <PageWrapper>
                    {description && <Box sx={{ textAlign: "center", marginBottom: "1em" }}>{description}</Box>}

                    {video && typeof window !== "undefined" && (
                        <Box sx={{ display: "flex", alignContent: "center", justifyContent: "center" }}>
                            <ReactPlayer url={video} controls={true} />
                        </Box>
                    )}
                </PageWrapper>
            )}

            <Article data={article} />
            <PageWrapper>
                {link && (
                    <Box sx={{ textAlign: "center" }}>
                        <a href={link} target="_blank" rel="noreferrer">
                            See the event on the partner site
                        </a>
                    </Box>
                )}
            </PageWrapper>
            <OtherEventsForYou />
            <FooterContactForm />
        </div>
    )
}

export default Events

export async function getStaticPaths() {
    const paths = events.map(event => {
        return {
            params: { id: event.slug }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<IEventPageProps> = async ({ params }: GetStaticPropsContext) => {
    const { id } = params
    const singleEventData = events.find(event => event.slug === id)
    return {
        props: {
            ...singleEventData
        }
    }
}
