import { Typography } from "@mui/material";
import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import events, { IEvent } from "../assets/events-list";
import podcasts, { IPodcast } from "../assets/podcast-list";
import projects, { IProject } from "../assets/projects-list";
import BlogCard from "../components/BlogCard";
import CardsBand from "../components/CardsBand";
import CustomHead from "../components/CustomHead";
import FloatingFollowMe from "../components/FloatingFollowMe";
import Header from "../components/Header";
import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/typography/SectionTitle";

export interface IHomeProps {
  events?: IEvent[];
  podcasts?: IPodcast[];
  projects?: IProject[];
}

export const Home: NextPage<IHomeProps> = ({ events, podcasts, projects }) => {
  return (
    <div>
      <CustomHead />
      <FloatingFollowMe
        githubLink="https://github.com/Lory1990"
        facebookLink="https://www.facebook.com/lory1990"
        linkedinLink="https://www.linkedin.com/in/lorenzodefrancesco"
      />
      <PageWrapper>
        <SectionTitle>My Projects</SectionTitle>
        <CardsBand columns={3}>
          {projects.map((project: IProject) => {
            return <BlogCard
              key={project.slug}
              title={project.title}
              description={project.description}
              image={project.image}
              link={`projects/${project.slug}`}
            />;
          })}
        </CardsBand>
      </PageWrapper>
    </div>
  );
};

export const getStaticProps: GetStaticProps<IHomeProps> = async (
  context: GetStaticPropsContext
) => {
  return {
    props: {
      events: events.slice(0, 3),
      podcasts: podcasts.slice(0, 3),
      projects: projects.slice(0, 3),
    },
  };
};

export default Home;
