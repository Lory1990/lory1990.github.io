import { GetStaticProps, GetStaticPropsContext } from "next";
import projects, { IProject } from "../../assets/projects-list";
import { IListProps } from "../../types/IListProps";

export interface IProjectListProps extends IListProps<IProject>{
  
}

const ProjectListPage: React.FC = (props: IProjectListProps) => {
  return <div>Projects Page</div>;
};


export const getStaticProps: GetStaticProps<IProjectListProps> = async (context: GetStaticPropsContext) => {
  return {
    props: {
      list: projects
    },
  };
};


export default ProjectListPage;