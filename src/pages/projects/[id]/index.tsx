import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import projects, { IProject } from "../../../assets/projects-list";

interface IProjectProps extends IProject{
}

const SingleProjectPage: NextPage<IProjectProps> = (props) => {
  return <div>
    <h1>Single Project Props</h1>
    data: {JSON.stringify(props)}
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
