import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import podcasts, { IPodcast } from "../../../assets/podcast-list";
import Article from "../../../components/Article";
import CustomHead from "../../../components/CustomHead";
import Hero from "../../../components/Hero";

interface IPodcastProps extends IPodcast{
}

const SinglePodcastPage: NextPage<IPodcastProps> = ({ date, title, description, article, subtitle, image, slug }) => {
  return <div>
    <CustomHead title={title} />
    <Hero
      title={title}
      date={date}
      backgroundImage={image}
      subtitle={subtitle}
     />
     <Article data={article} />
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
