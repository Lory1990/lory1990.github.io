import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import events, { IEvent } from '../../assets/events-list'
import { IListProps } from "../../types/IListProps";

export interface IEventListProps extends IListProps<IEvent>{
  
}

const EventsListPage: NextPage<IEventListProps> = () => {
  return <div>Events Page</div>;
};

export const getStaticProps: GetStaticProps<IEventListProps> = async (context: GetStaticPropsContext) => {
  return {
    props: {
      list: events
    },
  };
};



export default EventsListPage;