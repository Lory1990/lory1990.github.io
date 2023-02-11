//https://dev.to/jameswallis/animating-next-js-page-transitions-with-framer-motion-1g9j
//https://letsbuildui.dev/articles/animated-page-transitions-in-nextjs

import { useTheme, Zoom } from "@mui/material"
import { Box } from "@mui/system"
import Image from "next/image"
import techStack, { ITechStack } from "../../assets/tech-stack"
import timelineEvents from "../../assets/timeline-carrer"
import CareerTimeline from "../../components/CareerTimeline"
import CTABand from "../../components/CTABand"
import FooterContactForm from "../../components/FooterContactForm"
import Hero from "../../components/Hero"
import PageWrapper from "../../components/PageWrapper"
import TechStackList from "../../components/TechStackList"
import SectionTitle from "../../components/typography/SectionTitle"
import CustomHead from "../../components/CustomHead"
import TextImageBand from "../../components/bands/TextImageBand"
import Link from "next/link"

import GooglePodcastBadge from "/img/podcast-badges/google.png"

interface ITechStackBandPros {
  techStack: ITechStack[]
  title: string
  inverted: boolean
  image?: string
  initialDelay?: number
}

const TechStackBand: React.FC<ITechStackBandPros> = ({ inverted, techStack, title, image, initialDelay = 0 }) => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        display: "flex",
        gap: {
          xs: "0em",
          md: "5em"
        },
        flexDirection: {
          xs: "column",
          sm: "column",
          md: inverted ? "row-reverse" : "row"
        }
      }}
    >
      <Box
        sx={{
          flex: 0.5,
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center"
        }}
      >
        <Box
          sx={{
            marginBottom: "0.5em",
            textAlign: "center",
            fontSize: "1.5em",
            fontWeight: "bold"
          }}
        >
          {title}
        </Box>
        {image && <Image src={image} height={200} width={300} alt={`Image for ${title}`} />}
      </Box>
      <TechStackList sx={{ flex: 1.5 }} columns={2} techStack={techStack} />
    </Box>
  )
}

const About: React.FC = () => {
  return (
    <div>
      <CustomHead title="About me" />
      <Hero title="Hi, I am Lorenzo" />
      <PageWrapper sx={{ marginTop: "2em" }}>
        <TextImageBand
          image="/img/lorenzo-de-francesco.jpeg"
          imageAlt="Lorenzo De Francesco"
          text={
            <>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
              was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </>
          }
        />
        <SectionTitle sx={{ marginBottom: "1em", marginTop: "1em" }}>My Ambitions</SectionTitle>
        <TextImageBand
          image="/img/about/team-building.svg"
          imageAlt="Architecture"
          inverted={true}
          text={
            <>
              My ambition is to create the best microservices software architecture on the cloud using Kubernetes as the orchestration platform. <br />
            </>
          }
        />
        <SectionTitle sx={{ marginBottom: "1em", marginTop: "1em" }}>IT Community</SectionTitle>
        <TextImageBand
          image="/img/events/2022-gdg-triveneto/badge.webp"
          imageAlt="Google Dev Fest"
          inverted={false}
          text={
            <>
              I am constantly learning and sharing my knowledge through various channels, the most active is{" "}
              <a href="https://www.linkedin.com/in/lorenzodefrancesco/" target="_blank" rel="noreferrer">
                linkedin
              </a>{" "}
              where I post every day some tips about Software development and IT Governance. <br />
              Moreover I participate as guarst or speaker to online and offline community events such as Google Developer Fests, Tech Meetups and Cloud Native Speech, you can see all my events to the{" "}
              <Link href="/events">dedicated page</Link>. <br />
              Last but not least I have also host my own podcast where I delve with cloud software architecture, microservices and frontend development, start listening using the bottom links. <br />
              <Box
                sx={{
                  marginTop: "1em",
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                  flexDirection: {
                    md: "row",
                    xs: "column"
                  },
                  gap: "0.5em"
                }}
              >
                <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy82YjZkNmZmOC9wb2RjYXN0L3Jzcw==" target="_blank" rel="noreferrer">
                  <Image src="/img/podcast-badges/google.png" width={330} height={80} alt="Listen on google podcast" style={{ height: 40, width: "auto" }} />
                </a>
                <a href="https://open.spotify.com/show/0kfHlz3PUtYdQMsUQvWSWv" target="_blank" rel="noreferrer">
                  <Image src="/img/podcast-badges/apple.svg" width={330} height={80} alt="Listen on apple podcast" style={{ height: 40, width: "auto" }} />
                </a>
                <a href="https://podcasts.apple.com/us/podcast/il-frontendista-imbruttito/id1588309592" target="_blank" rel="noreferrer">
                  <Image src="/img/podcast-badges/spotify.webp" width={330} height={80} alt="Listen on spotify podcast" style={{ height: 40, width: "auto" }} />
                </a>
              </Box>
            </>
          }
        />
        <SectionTitle sx={{ marginBottom: "1em", marginTop: "1em" }}>My Stack</SectionTitle>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1em"
          }}
        >
          <TechStackBand inverted={false} image={"/img/about/frontend.svg"} title="Frontend" techStack={techStack.filter(ts => ts.category == "FE")} initialDelay={200} />
          <TechStackBand inverted={true} image={"/img/about/backend.svg"} title="Backend" techStack={techStack.filter(ts => ts.category == "BE")} initialDelay={0} />
          <TechStackBand inverted={false} image={"/img/about/cloud.svg"} title="Cloud" techStack={techStack.filter(ts => ts.category == "CLOUD")} />
        </Box>
        <CTABand sx={{ marginTop: "2em", marginBottom: "2em" }} primaryText="Want to work together" secondaryText="Want to work together" buttonText="Contact Me" />
        <Zoom>
          <SectionTitle>My carrer</SectionTitle>
        </Zoom>
        <CareerTimeline timelineEvents={timelineEvents} />
        <FooterContactForm />
      </PageWrapper>
    </div>
  )
}

export default About
