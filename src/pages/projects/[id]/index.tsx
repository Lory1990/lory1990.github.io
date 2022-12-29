import { Box, useTheme } from "@mui/material"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import { GetStaticProps, GetStaticPropsContext, NextPage } from "next"
import projects, { IProject } from "../../../assets/projects-list"
import Article from "../../../components/Article"
import TitleBand from "../../../components/bands/TitleBand"
import CustomHead from "../../../components/CustomHead"
import FooterContactForm from "../../../components/FooterContactForm"
import Hero from "../../../components/Hero"
import PageWrapper from "../../../components/PageWrapper"
import ProjectDescription from "../../../components/ProjectDescription"
import SocialLinks from "../../../components/SocialLinks"
import SectionTitle from "../../../components/typography/SectionTitle"
import Title from "../../../components/typography/Title"

interface IProjectProps extends IProject {}

const SingleProjectPage: NextPage<IProjectProps> = props => {
    const { hideTitleOnCover, article, background, subtitle, title, desktopScreenshots, mobileScreenshots, hero } = props

    const theme = useTheme()

    return (
        <div>
            <CustomHead title={title} />
            <Hero title={title} backgroundImage={background} subtitle={subtitle} hideTitleOnCover={hideTitleOnCover} {...hero} />
            <PageWrapper sx={{ marginBottom: "3em", marginTop: "3em" }}>
                <ProjectDescription {...props} />
            </PageWrapper>
            <Article data={article} />
            <PageWrapper>
                {desktopScreenshots && (
                    <>
                        <SectionTitle>Screenshots</SectionTitle>
                        <Splide
                            options={{
                                rewind: true,
                                type: "loop",
                                autoplay: true,
                                perMove: 1,
                                perPage: 1,
                                padding: "0rem",
                                focus: "center",
                                lazyLoad: "nearby",
                                trimSpace: "move",
                                preloadPages: 2
                            }}
                        >
                            {desktopScreenshots.map((image: string, index) => {
                                return (
                                    <SplideSlide key={index}>
                                        <Box sx={{ display: "flex", justifyContent: "center", height: "500px" }}>
                                            <img src={image} alt={`Desktop screenshot ${index + 1} for ${title}`} />
                                        </Box>
                                    </SplideSlide>
                                )
                            })}
                        </Splide>
                    </>
                )}
                {props.link && (
                    <>
                        <SectionTitle sx={{marginTop: "1.5em"}}>Social Links</SectionTitle>
                        <SocialLinks {...props} />
                    </>
                )}
                <FooterContactForm
                    title="Did you like this project?"
                    subtitle="Contact me if you want to create a similar one with me. <br /> I am always looking for new opportunities to network and work with creative and motivated people."
                />
            </PageWrapper>
        </div>
    )
}

export default SingleProjectPage

export async function getStaticPaths() {
    const paths = projects.map(event => {
        return {
            params: { id: event.slug }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<IProjectProps> = async ({ params }: GetStaticPropsContext) => {
    const { id } = params
    const singleProjectData = projects.find(event => event.slug === id)
    return {
        props: {
            ...singleProjectData
        }
    }
}
