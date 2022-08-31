import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import events, { IEvent } from '../../../assets/events-list'

interface IEventPageProps extends IEvent{
}

const Events: NextPage<IEventPageProps> = (props) => {
  return <div>
    <h1>Events Page</h1>
    data: {JSON.stringify(props)}
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
