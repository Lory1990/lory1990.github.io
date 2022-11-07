import axios from "axios";
import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import podcasts, { IPodcast } from "../../assets/podcast-list";
import CustomHead from "../../components/CustomHead";
import Hero from "../../components/Hero";
import { IListProps } from "../../types/IListProps";
import xmlParser from 'fast-xml-parser'
import PageWrapper from "../../components/PageWrapper";
import PodcastCard from "../../components/PodcastCard";
import Image from "next/image";
import { useState } from "react";
import { fetchPodcastData } from "../../client/PodcastClient";

export interface IPodcastProps extends IListProps<IPodcast>{
  title?:string
  description?:string
}
const Poadcasts: NextPage<IPodcastProps> = ({ list, description, title}) => {

  return <div>
    <CustomHead title="Poadcast" />
    <Hero title="Poadcast" />
    

    <div>
      <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy82YjZkNmZmOC9wb2RjYXN0L3Jzcw">
        <Image src="https://www.gstatic.com/podcasts_console/promote/Italian_IT/IT_Google_Podcasts_Badge.svg" width={150} height={38} alt="Listen on Google Podcasts" />
      </a>
    </div>
    <PageWrapper>
    {list?.map?.((single : IPodcast, index : number) =>{
      return <PodcastCard
        key={index}
        {...single}
        />
    })}
    </PageWrapper>

  </div>;
};

export const getStaticProps: GetStaticProps<IPodcastProps> = async (context: GetStaticPropsContext) => {
  
  const data = await fetchPodcastData();

  return {
    props: {
      ...data,
      list: data.item
    },
  };
};



export default Poadcasts;