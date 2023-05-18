import { Box, Button } from "@mui/material"
import { GetStaticProps, GetStaticPropsContext, NextPage } from "next"
import events, { IEvent } from "../../../assets/events-list"
import Article from "../../../components/Article"
import Hero from "../../../components/Hero"
import ReactPlayer from "react-player"
import PageWrapper from "../../../components/PageWrapper"
import OtherEventsForYou from "../../../components/OtherEventsForYou"
import CustomHead from "../../../components/CustomHead"
import VideoTextBand from "../../../components/bands/VideoTextBand"
import CTABand from "../../../components/CTABand"
import PodcastList from "../../../components/PodcastList"

interface IEventPageProps extends IEvent {}

const Events: NextPage<IEventPageProps> = ({ podcast, hideTitleOnCover, article, date, venue, subtitle, link, description, title, video, cover, hero }) => {
  return (
    <div>
      <CustomHead title={title} />
      <Hero title={title} date={date} backgroundImage={cover} subtitle={subtitle} place={venue} hideTitleOnCover={hideTitleOnCover} {...hero} />

      {description && video && link && (
        <VideoTextBand
          videoUrl={video}
          text={
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1em" }}>
              <span dangerouslySetInnerHTML={{ __html: description }} />
              <Box sx={{ textAlign: "center" }}>
                <Button color="primary" variant="contained" href={link} target="_blank" rel="noreferrer">
                  Go to the event
                </Button>
              </Box>
            </Box>
          }
        />
      )}
      {description && !video && link && (
        <PageWrapper sx={{ textAlign: "center", display: "flex", gap: "15px", alignItems: "center", flexDirection: { xs: "column", sm: "row" } }}>
          <Box sx={{ marginBottom: "1em", flex: 1 }}>
            <span dangerouslySetInnerHTML={{ __html: description }} />
            {podcast && <PodcastList {...podcast} />}
          </Box>
          <CTABand
            sx={{ flex: 1 }}
            onClick={() => {
              window.open(link, "_blank")
            }}
            primaryText="Do you want to know more?"
            buttonText="Go to the event"
          />
        </PageWrapper>
      )}

      {description && video && !link && (
        <VideoTextBand
          videoUrl={video}
          text={
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1em" }}>
              <span dangerouslySetInnerHTML={{ __html: description }} />
              {podcast && <PodcastList {...podcast} />}
            </Box>
          }
        />
      )}

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
          buttonText="Go to the event"
        />
      )}

      <Article data={article} />

      <OtherEventsForYou />
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
