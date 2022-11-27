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
import { Bounce, Fade } from "react-awesome-reveal"
import CustomHead from "../../components/CustomHead"
import TextImageBand from "../../components/bands/TextImageBand"

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
            <Fade direction={inverted ? "right" : "left"} delay={initialDelay}>
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
                            color: theme.palette.primary.main,
                            fontWeight: "bolder"
                        }}
                    >
                        {title}
                    </Box>
                    {image && <Image src={image} height={200} width={300} alt={`Image for ${title}`} />}
                </Box>
            </Fade>

            <TechStackList sx={{ flex: 1.5 }} columns={2} techStack={techStack} initialDelay={initialDelay + 100} />
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
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                />
                <Fade direction="bottom-left">
                    <SectionTitle sx={{ marginBottom: "1em", marginTop: "1em" }}>My Ambitions</SectionTitle>
                </Fade>
                <TextImageBand
                    image="/img/about/team-building.svg"
                    imageAlt="Architecture"
                    inverted={true}
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                />
                <Fade direction="top-left">
                    <SectionTitle sx={{ marginBottom: "1em", marginTop: "1em" }}>My Stack</SectionTitle>
                </Fade>
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
                <Bounce>
                    <CTABand sx={{ marginTop: "2em", marginBottom: "2em" }} primaryText="Want to work together" secondaryText="Want to work together" buttonText="Contact Me" />
                </Bounce>
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
