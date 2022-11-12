
import { Box } from "@mui/material";
import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import events, { IEvent } from "../../assets/events-list";
import CustomHead from "../../components/CustomHead";
import EventCard from "../../components/EventCard";
import Hero from "../../components/Hero";
import { DateTime } from "luxon";
import { IListProps } from "../../types/IListProps";
import Title from "../../components/typography/Title";
import PageWrapper from "../../components/PageWrapper";
import FooterContactForm from "../../components/FooterContactForm";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import ListWithShowMore from "../../components/ListWithShowMore";

export interface IEventListProps extends IListProps<IEvent> {}

const EventsListPage: NextPage<IEventListProps> = ({ list }) => {

  const nextEvent = list.filter(event => DateTime.fromISO(event.date).diffNow("day").days > 0).reverse()?.[0];
  const pastEvents = list.filter(event => DateTime.fromISO(event.date).diffNow("day").days < 0);

  return (
    <div>
      <CustomHead title={"Events"} />
      <Hero 
        title={"Events"}
      />
      <PageWrapper>
        {nextEvent &&
          <>
            <Title>Next Event</Title>
            <EventCard {...nextEvent} />
            <Title sx={{marginTop: "15px"}}>Past Events</Title>
          </>
        }
        
        <ListWithShowMore
          animationComponent={Fade}
          animationComponentProps={{duration:750, cascade: true, direction: "left"}}
          list={pastEvents}
          singleElementComponent={EventCard}
          sliceList={3}
        />

        <FooterContactForm 
          title="I am available for talks"
          subtitle="Do you need a techinical speaker? Drop a message 👇"
        /> 
      </PageWrapper>
    </div>
  );
};

export const getStaticProps: GetStaticProps<IEventListProps> = async (
  context: GetStaticPropsContext
) => {
  return {
    props: {
      list: events.sort((a : IEvent, b: IEvent) =>{
        return DateTime.fromISO(b.date).diff(DateTime.fromISO(a.date),"day").days
      }),
    },
  };
};

export default EventsListPage;
