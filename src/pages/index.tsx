import { Box, Button, Typography, useTheme } from "@mui/material"
import { GetStaticProps, GetStaticPropsContext, NextPage } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { TextLoop } from "react-text-loop-next"
import events, { IEvent } from "../assets/events-list"
import podcasts, { IPodcast } from "../assets/podcast-list"
import projects, { IProject } from "../assets/projects-list"
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
        <Typography variant="body2" fontSize={"40px"} lineHeight={"50px"} color={theme.palette.primary.main} textTransform="uppercase" fontWeight={700}>
            {children}
        </Typography>
    )
}

const TextRoll: React.FC = () => {
    const [isMounted, setMounted] = useState<boolean>(false)
    console.log("isMounted", isMounted)

    const typeofWindow = typeof window

    useEffect(() => {
        if (typeofWindow === "undefined") return
        setTimeout(() => {
            setMounted(false)
        }, 1000)
    }, [typeofWindow])

    return <TitleTextRoll>IT Manager</TitleTextRoll>

    /*return (
        <TextLoop interval={300}>
            <TitleTextRoll>IT Manager</TitleTextRoll>
            <TitleTextRoll>Senior Developer</TitleTextRoll>
            <TitleTextRoll>Speaker</TitleTextRoll>
            <TitleTextRoll>Podcaster</TitleTextRoll>
            <TitleTextRoll>Mentor</TitleTextRoll>
        </TextLoop>
    )*/
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
                text="Ciao, io sono Lorenzo e da quando avevo 15 anni mi occupo di sviluppo web a 360 gradi.

                    Il mio punto forte è lo sviluppo frontend mobile first. Ho lavorato in Costa Crociere e adesso sono in Fabrick (Banca Sella).
                    
                    Sono uno sviluppare in grado di creare App e WebApp da zero e di integrare API e servizi terzi senza problemi. Il real-time è la mia quotidiantà, non è possibile farne a meno nel 2021."
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
            techStack: techStack.filter(ts => ts.hilight),
            events: events.slice(0, 3),
            podcasts: podcasts.slice(0, 3),
            projects: projects.filter(p => p.hilight)
        }
    }
}

export default Home
