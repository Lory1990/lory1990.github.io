import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import projects, { IProject } from "../../assets/projects-list";
import BlogCard from "../../components/BlogCard";
import CardsBand from "../../components/CardsBand";
import CustomHead from "../../components/CustomHead";
import FooterContactForm from "../../components/FooterContactForm";
import Hero from "../../components/Hero";
import { IListProps } from "../../types/IListProps";

export interface IProjectListProps extends IListProps<IProject>{
  
}

const ProjectListPage: NextPage<IProjectListProps> = ({list}) => {
  return <div>
    <CustomHead title={"Projects"} />
    <Hero
      title={"Projects"}
    />
    <CardsBand
        columns={3}
    >
        {list.map((project: IProject) => {
          return <BlogCard
            key={project.slug}
            title={project.title}
            description={project.description}
            image={project.image}
            link={`projects/${project.slug}`}
          />;
        })}
      </CardsBand>
      <FooterContactForm 
        title={"Do like these projects? Do you need a software developer? Here I am!"}
      />
  </div>;
};


export const getStaticProps: GetStaticProps<IProjectListProps> = async (context: GetStaticPropsContext) => {
  return {
    props: {
      list: projects
    },
  };
};


export default ProjectListPage;