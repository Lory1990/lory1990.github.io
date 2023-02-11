import { Box, Button, Typography, useTheme } from "@mui/material"
import { GetStaticProps, GetStaticPropsContext, NextPage } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import events, { IEvent } from "../assets/events-list"
import podcasts, { IPodcast } from "../assets/podcast-list"
import projects, { IProject } from "../assets/projects-list"
import { TextLoop } from "react-text-loop-next"
import techStack, { ITechStack } from "../assets/tech-stack"
import TextImageBand from "../components/bands/TextImageBand"
import BlogCard from "../components/BlogCard"
import CardsBand from "../components/CardsBand"
import CustomHead from "../components/CustomHead"
import FloatingFollowMe from "../components/FloatingFollowMe"
import FooterContactForm from "../components/FooterContactForm"
import Hero from "../components/Hero"
import PageWrapper from "../components/PageWrapper"
import TechStackList from "../components/TechStackList"
import SectionTitle from "../components/typography/SectionTitle"

export interface IHomeProps {
  events?: IEvent[]
  podcasts?: IPodcast[]
  projects?: IProject[]
  techStack?: ITechStack[]
}

const TitleTextRoll: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children }) => {
  const theme = useTheme()
  return (
    <Typography variant="body2" fontSize={"40px"} lineHeight={"50px"} textTransform="uppercase" fontWeight={700} color={theme.palette.primary.main}>
      {children}
    </Typography>
  )
}

const TextRoll: React.FC = () => {
  if (process.env.NODE_ENV === "development") return <span>IT Manager</span>

  return (
    <TextLoop fade={true}>
      <TitleTextRoll>IT Manager</TitleTextRoll>
      <TitleTextRoll>Senior Developer</TitleTextRoll>
      <TitleTextRoll>Speaker</TitleTextRoll>
      <TitleTextRoll>Podcaster</TitleTextRoll>
      <TitleTextRoll>Mentor</TitleTextRoll>
    </TextLoop>
  )
}

export const Home: NextPage<IHomeProps> = ({ events, podcasts, projects, techStack }) => {
  const router = useRouter()

  return (
    <div>
      <CustomHead />
      <Hero
        sx={{
          "&:before": {
            content: '""',
            zIndex: 9,
            background: "rgba(255, 255, 255, 0.78)",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }
        }}
        title={
          <Typography fontSize={"40px"} lineHeight={"50px"} color={"#333"} fontWeight={700} textTransform={"uppercase"}>
            Hi 👋 I am Lorenzo, your friendly <br /> <TextRoll />
          </Typography>
        }
        subtitle={
          <Typography variant="subtitle1" marginBottom={"38px"} marginTop={"25px"} fontSize={"18px"} lineHeight={"27px"} color={"#666"} fontWeight={300} textTransform="uppercase">
            I manage teams to create the best user experience <br /> My goal? Reduce IT costs while increasing profits and conversions
          </Typography>
        }
        backgroundImage="/img/home-hero.jpeg"
        button={{
          text: "DISCOVER MORE",
          onClick: () =>
            window.document.getElementById("description").scrollIntoView({
              behavior: "smooth",
              block: "start"
            })
        }}
      />
      <FloatingFollowMe githubLink="https://github.com/Lory1990" facebookLink="https://www.facebook.com/lory1990" linkedinLink="https://www.linkedin.com/in/lorenzodefrancesco" />
      <a id="description" style={{ top: "-10em" }}></a>
      <TextImageBand
        sx={{
          marginTop: "4em",
          marginBottom: "4em"
        }}
        image="/img/lorenzo-de-francesco.jpeg"
        imageAlt="Lorenzo De Francesco"
        text={
          <>
            I am Lorenzo, a highly skilled and passionate IT manager, with more than 10 years of experience in the fintech industry software development. I am currently working at{" "}
            <a href="https://step4business.com" target="_blank" rel="noreferrer">
              Step4Business
            </a>{" "}
            to create the best marketplace for entrepreneur 2.0
            <br />I have developed a broad knowledge of cloud technologies and know how to successfully implement them an enterprise application made of microservices. In addition to my work
            commitment, I am also an active member of the IT community, constantly participating in events and conferences to stay up-to-date and share my knowledge with others.
          </>
        }
      />
      <PageWrapper>
        <SectionTitle sx={{ marginTop: "3em", marginBottom: "1em" }}>My Projects</SectionTitle>
        <CardsBand columns={3}>
          {projects.map((project: IProject) => (
            <BlogCard key={project.slug} title={project.title} description={project.boxDescription} image={project.image} link={`projects/${project.slug}`} />
          ))}
        </CardsBand>
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "row"
          }}
        >
          <Link href={"/projects"} passHref={true}>
            <Button variant="contained">Want to see more projects?</Button>
          </Link>
        </Box>
        <SectionTitle sx={{ marginTop: "3em", marginBottom: "1em" }}>My Tech Stack</SectionTitle>
        <TechStackList techStack={techStack} />
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "row"
          }}
        >
          <Link href={"/about"} passHref={true}>
            <Button variant="contained">Discover more</Button>
          </Link>
        </Box>
        <FooterContactForm title="Do you want to work together?" subtitle="Contact me 📩 I am here to develop your best project ever!" />
      </PageWrapper>
    </div>
  )
}

export const getStaticProps: GetStaticProps<IHomeProps> = async (context: GetStaticPropsContext) => {
  return {
    props: {
      techStack: techStack.filter(ts => ts.highlight),
      events: events.slice(0, 3),
      podcasts: podcasts.slice(0, 3),
      projects: projects.filter(p => p.highlight)
    }
  }
}

export default Home
