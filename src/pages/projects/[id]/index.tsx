import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import projects, { IProject } from "../../../assets/projects-list";
import CustomHead from "../../../components/CustomHead";
import Hero from "../../../components/Hero";

interface IProjectProps extends IProject{
}

const SingleProjectPage: NextPage<IProjectProps> = ({ article, background, date, description, subtitle, image,link,title,githubLink }) => {
  return <div>
  <CustomHead title={title} />
  <Hero
    title={title}
    date={date}
    image={image}
    backgoundImage={backgound}
    subtitle={subtitle}
   />
   qui metto altre cose
  </div>;
};

export default SingleProjectPage;

export async function getStaticPaths() {
  const paths = projects.map(event =>{
    return {
      params: { id: event.slug },
    }
  })
    return {
      paths,
      fallback: false,
    };
  }

export const getStaticProps: GetStaticProps<IProjectProps> = async ({ params }: GetStaticPropsContext) => {
  const { id } = params;
  const singleProjectData  = projects.find(event => event.slug === id)
  return {
    props: {
      ...singleProjectData
    },
  };
};
