import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import projects, { IProject } from "../../../assets/projects-list";
import Article from "../../../components/Article";
import CustomHead from "../../../components/CustomHead";
import FooterContactForm from "../../../components/FooterContactForm";
import Hero from "../../../components/Hero";
import PageWrapper from "../../../components/PageWrapper";

interface IProjectProps extends IProject {}

const SingleProjectPage: NextPage<IProjectProps> = ({
  hideTitleOnCover,
  article,
  background,
  date,
  description,
  subtitle,
  image,
  link,
  title,
  githubLink,
  hero,
}) => {
  return (
    <div>
      <CustomHead title={title} />
      <Hero
        title={title}
        backgroundImage={background}
        subtitle={subtitle}
        hideTitleOnCover={hideTitleOnCover}
        {...hero}
      />
      <Article data={article} />
      <PageWrapper>
        <FooterContactForm />
      </PageWrapper>
    </div>
  );
};

export default SingleProjectPage;

export async function getStaticPaths() {
  const paths = projects.map((event) => {
    return {
      params: { id: event.slug },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<IProjectProps> = async ({
  params,
}: GetStaticPropsContext) => {
  const { id } = params;
  const singleProjectData = projects.find((event) => event.slug === id);
  return {
    props: {
      ...singleProjectData,
    },
  };
};
