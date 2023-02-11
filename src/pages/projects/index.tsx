import { Box, Typography, useTheme } from "@mui/material"
import { GetStaticProps, GetStaticPropsContext, NextPage } from "next"
import Image from "next/image"
import { useContext, useEffect } from "react"
import projects, { IProject } from "../../assets/projects-list"
import BlogCard from "../../components/BlogCard"
import CardsBand from "../../components/CardsBand"
import CustomHead from "../../components/CustomHead"
import FooterContactForm from "../../components/FooterContactForm"
import Hero from "../../components/Hero"
import PageWrapper from "../../components/PageWrapper"
import { ThemeContext } from "../../context/ThemeProvider"
import { HeaderColor } from "../../types/HeaderColor"
import { IListProps } from "../../types/IListProps"

export interface IProjectListProps extends IListProps<IProject> { }

const ProjectListPage: NextPage<IProjectListProps> = ({ list }) => {
    const theme = useTheme()
    const themeContext = useContext(ThemeContext)

    useEffect(() => { themeContext.setHeaderColor(HeaderColor.WHITE) }, [])

    return (
        <div>
            <CustomHead title={"Projects"} />
            <Hero
                title={"Projects"}
                sx={{
                    backgroundImage: undefined,
                    position: "relative",
                    background: "linear-gradient(135deg, rgba(117,78,249,1) 30%, rgba(175,152,252,1) 100%)"
                }}
            >
                <Box sx={{ position: "absolute", right: "10px", bottom: "20px" }}>
                    <Image src="/img/projects.png" alt="Projects" width={320} height={298} />
                </Box>
            </Hero>
            <PageWrapper>
                <Typography sx={{ textAlign: "center", margin: "1em 0", lineHeight: "200%" }}>
                    Here you can find my projects I have been working on since 2007. I am specialized in Full Stack Enterprise Application development from scratch to the final result. <br />
                    The main fileds i am working on are: Crypto, Web3, Fintech, Insuretech
                </Typography>
                <CardsBand columns={3}>
                    {list.map((project: IProject) => {
                        return <BlogCard key={project.slug} title={project.title} description={project.boxDescription} image={project.image} link={`projects/${project.slug}`} />
                    })}
                </CardsBand>
                <FooterContactForm title={"Do like these projects?"} subtitle="Contact me 📩 I am here to develop your best project ever!" />
            </PageWrapper>
        </div>
    )
}

export const getStaticProps: GetStaticProps<IProjectListProps> = async (context: GetStaticPropsContext) => {
    return {
        props: {
            list: projects
        }
    }
}

export default ProjectListPage
