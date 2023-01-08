import { GetStaticProps, GetStaticPropsContext, NextPage } from "next"
import { IPodcast } from "../../assets/podcast-list"
import Hero from "../../components/Hero"
import { IListProps } from "../../types/IListProps"
import PageWrapper from "../../components/PageWrapper"
import PodcastCard from "../../components/PodcastCard"
import Image from "next/image"
import { fetchPodcastData } from "../../client/PodcastClient"
import { Fade } from "react-awesome-reveal"
import { useState } from "react"
import FooterContactForm from "../../components/FooterContactForm"
import ListWithShowMore from "../../components/ListWithShowMore"
import CustomHead from "../../components/CustomHead"

const fadeDuration = 500

export interface IPodcastProps extends IListProps<IPodcast> {
    title?: string
    description?: string
}
const Podcasts: NextPage<IPodcastProps> = ({ list, description, title }) => {
    return (
        <div>
            <CustomHead title="Podcast" />
            <Hero title="Podcast" />

            <div>
                <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy82YjZkNmZmOC9wb2RjYXN0L3Jzcw">
                    <Image src="https://www.gstatic.com/podcasts_console/promote/Italian_IT/IT_Google_Podcasts_Badge.svg" width={150} height={38} alt="Listen on Google Podcasts" />
                </a>
            </div>
            <PageWrapper sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <ListWithShowMore
                    animationComponent={Fade}
                    animationComponentProps={{ duration: 750, cascade: true, direction: "left" }}
                    list={list}
                    singleElementComponent={PodcastCard}
                    sliceList={3}
                />
            </PageWrapper>
            <FooterContactForm title={"I am available for collaboration"} subtitle={"Want to do a podcast with me?"} />
        </div>
    )
}

export const getStaticProps: GetStaticProps<IPodcastProps> = async (context: GetStaticPropsContext) => {
    const data = await fetchPodcastData()

    return {
        props: {
            ...data,
            list: data.item
        }
    }
}

export default Podcasts
