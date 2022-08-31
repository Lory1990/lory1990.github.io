import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import podcasts, { IPodcast } from "../../../assets/podcast-list";

interface IPodcastProps extends IPodcast{
}

const SinglePodcastPage: NextPage<IPodcastProps> = (props) => {
  return <div>
    <h1>Single Podcast Props</h1>
    data: {JSON.stringify(props)}
    </div>;
};

export default SinglePodcastPage;

export async function getStaticPaths() {
  const paths = podcasts.map(event =>{
    return {
      params: { id: event.slug },
    }
  })
    return {
      paths,
      fallback: false,
    };
  }

export const getStaticProps: GetStaticProps<IPodcastProps> = async ({ params }: GetStaticPropsContext) => {
  const { id } = params;
  const singleData  = podcasts.find(event => event.slug === id)
  return {
    props: {
      ...singleData
    },
  };
};
