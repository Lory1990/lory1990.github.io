import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import podcasts, { IPodcast } from "../../assets/podcast-list";
import { IListProps } from "../../types/IListProps";

export interface IPodcastProps extends IListProps<IPodcast>{
  
}

const Poadcasts: NextPage<IPodcastProps> = () => {
  return <div>Poadcasts Page</div>;
};

export const getStaticProps: GetStaticProps<IPodcastProps> = async (context: GetStaticPropsContext) => {
  return {
    props: {
      list: podcasts
    },
  };
};



export default Poadcasts;