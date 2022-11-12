import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import { IPodcast } from "../../assets/podcast-list";
import CustomHead from "../../components/CustomHead";
import Hero from "../../components/Hero";
import { IListProps } from "../../types/IListProps";
import PageWrapper from "../../components/PageWrapper";
import PodcastCard from "../../components/PodcastCard";
import Image from "next/image";
import { fetchPodcastData } from "../../client/PodcastClient";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import { Box, Button } from "@mui/material";
import FooterContactForm from "../../components/FooterContactForm";

const fadeDuration = 500;

export interface IPodcastProps extends IListProps<IPodcast> {
  title?: string;
  description?: string;
}
const Poadcasts: NextPage<IPodcastProps> = ({ list, description, title }) => {
  const [showOther, setShowOther] = useState<boolean>();

  return (
    <div>
      <CustomHead title="Poadcast" />
      <Hero title="Poadcast" />

      <div>
        <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy82YjZkNmZmOC9wb2RjYXN0L3Jzcw">
          <Image
            src="https://www.gstatic.com/podcasts_console/promote/Italian_IT/IT_Google_Podcasts_Badge.svg"
            width={150}
            height={38}
            alt="Listen on Google Podcasts"
          />
        </a>
      </div>
      <PageWrapper
        sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <Fade duration={fadeDuration} cascade={true} direction={"up"}>
          {list?.slice?.(0,3)?.map?.((single: IPodcast, index: number) => {
            return <PodcastCard key={single.slug} index={index} {...single} />;
          })}
          {!showOther &&
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button onClick={() => setShowOther(true)} color="primary" variant="contained">Show more</Button>
            </Box>
          }
          </Fade>
          {showOther && (
            <Fade duration={fadeDuration} cascade={true} direction={"up"}>
              {list?.slice?.(3)?.map?.((single: IPodcast, index: number) => {
                return (
                  <PodcastCard key={single.slug} index={index} {...single} />
                );
              })}
            </Fade>
          )}
      </PageWrapper>
      <FooterContactForm 
        title={"I am available for collaboration"}
        subtitle={"Wnt to do a podcast with me?"}
      />
    </div>
  );
};

export const getStaticProps: GetStaticProps<IPodcastProps> = async (
  context: GetStaticPropsContext
) => {
  const data = await fetchPodcastData();

  return {
    props: {
      ...data,
      list: data.item,
    },
  };
};

export default Poadcasts;
