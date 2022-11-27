import { Typography } from "@mui/material"
import { GetStaticProps, GetStaticPropsContext, NextPage } from "next"
import projects, { IProject } from "../../assets/projects-list"
import BlogCard from "../../components/BlogCard"
import CardsBand from "../../components/CardsBand"
import CustomHead from "../../components/CustomHead"
import FooterContactForm from "../../components/FooterContactForm"
import Hero from "../../components/Hero"
import PageWrapper from "../../components/PageWrapper"
import { IListProps } from "../../types/IListProps"

export interface IProjectListProps extends IListProps<IProject> {}

const ProjectListPage: NextPage<IProjectListProps> = ({ list }) => {
    return (
        <div>
            <CustomHead title={"Projects"} />
            <Hero title={"Projects"} />
            <PageWrapper>
                <Typography sx={{ textAlign: "center", margin: "1em 0" }}>
                    Here you can find my projects I have been working on since 2007. I am specialized in Full Stack Enterprise Application development from scratch to the final result. <br />
                    The main fileds i am working on are: Crypto, Web3, Fintech, Insuretech
                </Typography>
                <CardsBand columns={3}>
                    {list.map((project: IProject) => {
                        return <BlogCard key={project.slug} title={project.title} description={project.description} image={project.image} link={`projects/${project.slug}`} />
                    })}
                </CardsBand>
                <FooterContactForm title={"Do like these projects? Do you need a software developer? Here I am!"} />
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
