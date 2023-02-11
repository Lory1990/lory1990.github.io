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
import VideoTextBand from "../../../components/bands/VideoTextBand"
import CTABand from "../../../components/CTABand"

interface IEventPageProps extends IEvent { }

const Events: NextPage<IEventPageProps> = ({ hideTitleOnCover, article, date, venue, subtitle, link, description, title, video, cover, hero }) => {
  return (
    <div>
      <CustomHead title={title} />
      <Hero title={title} date={date} backgroundImage={cover} subtitle={subtitle} place={venue} hideTitleOnCover={hideTitleOnCover} {...hero} />

      {description && video && <VideoTextBand videoUrl={video} text={description} />}
      {description && link && <PageWrapper>DA FARE</PageWrapper>}

      {!description && video && (
        <>
          {video && typeof window !== "undefined" && (
            <Box sx={{ display: "flex", alignContent: "center", justifyContent: "center" }}>
              <ReactPlayer url={video} controls={true} width={"100%"} height={"50vh"} />
            </Box>
          )}
        </>
      )}

      {!description && link && (
        <CTABand
          onClick={() => {
            window.open(link, "_blank")
          }}
          buttonText="See on partner website"
        />
      )}

      <Article data={article} />

      <OtherEventsForYou />
      <FooterContactForm title="Shall we do a webinar together?" subtitle="Drop me a message 💬, i love partecipating to events!" />
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
