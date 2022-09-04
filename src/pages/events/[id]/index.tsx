import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import events, { IEvent } from '../../../assets/events-list'
import Article from "../../../components/Article";
import CustomHead from "../../../components/CustomHead";
import FooterContactForm from "../../../components/FooterContactForm";
import Hero from "../../../components/Hero";

interface IEventPageProps extends IEvent{
}

const Events: NextPage<IEventPageProps> = ({article, date, subtitle, description, image, title, video}) => {
  return <div>
    <CustomHead title={title} />
    <Hero
      title={title}
      date={date}
      backgroundImage={image}
      subtitle={subtitle}
     />
     <Article data={article} />
    <FooterContactForm />
    </div>;
};

export default Events;

export async function getStaticPaths() {
  const paths = events.map(event =>{
    return {
      params: { id: event.slug },
    }
  })
    return {
      paths,
      fallback: false,
    };
  }

export const getStaticProps: GetStaticProps<IEventPageProps> = async ({ params }: GetStaticPropsContext) => {
  const { id } = params;
  const singleEventData  = events.find(event => event.slug === id)
  return {
    props: {
      ...singleEventData
    },
  };
};
