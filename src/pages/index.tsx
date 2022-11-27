import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import events, { IEvent } from "../assets/events-list";
import podcasts, { IPodcast } from "../assets/podcast-list";
import projects, { IProject } from "../assets/projects-list";
import techStack from "../assets/tech-stack";
import BlogCard from "../components/BlogCard";
import CardsBand from "../components/CardsBand";
import CircleImageAndText from "../components/CircleImageAndText";
import CustomHead from "../components/CustomHead";
import FloatingFollowMe from "../components/FloatingFollowMe";
import FooterContactForm from "../components/FooterContactForm";
import Hero from "../components/Hero";
import PageWrapper from "../components/PageWrapper";
import TechStackList from "../components/TechStackList";
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
      <Hero 
        title="This is the home"
        subtitle="I really do not know what to set"
        />
      <FloatingFollowMe
        githubLink="https://github.com/Lory1990"
        facebookLink="https://www.facebook.com/lory1990"
        linkedinLink="https://www.linkedin.com/in/lorenzodefrancesco"
      />
      <PageWrapper>
        <SectionTitle>My Tech Stack</SectionTitle>
        <TechStackList techStack={techStack.filter(ts=>ts.emphasize)} />
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
        <FooterContactForm />
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
