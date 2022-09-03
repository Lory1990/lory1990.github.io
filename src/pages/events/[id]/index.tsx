import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import events, { IEvent } from '../../../assets/events-list'
import CustomHead from "../../../components/CustomHead";
import Hero from "../../../components/Hero";

interface IEventPageProps extends IEvent{
}

const Events: NextPage<IEventPageProps> = ({date, subtitle, description, image, title, video}) => {
  return <div>
    <CustomHead title={title} />
    <Hero
      title={title}
      date={date}
      image={image}
      subtitle={subtitle}
     />
     qui metto altre cose
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
