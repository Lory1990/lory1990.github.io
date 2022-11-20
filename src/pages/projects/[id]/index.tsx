import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import projects, { IProject } from "../../../assets/projects-list";
import Article from "../../../components/Article";
import CustomHead from "../../../components/CustomHead";
import FooterContactForm from "../../../components/FooterContactForm";
import Hero from "../../../components/Hero";
import PageWrapper from "../../../components/PageWrapper";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { height } from "@mui/system";
import { Box, Typography } from "@mui/material";
import SectionTitle from "../../../components/typography/SectionTitle";

interface IProjectProps extends IProject {}

const SingleProjectPage: NextPage<IProjectProps> = ({
  hideTitleOnCover,
  article,
  background,
  subtitle,
  title,
  desktopScreenshots,
  mobileScreenshots,
  hero,
}) => {
  return (
    <div>
      <CustomHead title={title} />
      <Hero
        title={title}
        backgroundImage={background}
        subtitle={subtitle}
        hideTitleOnCover={hideTitleOnCover}
        {...hero}
      />
      {}
      <Article data={article} />
      <PageWrapper>
        {desktopScreenshots && (
          <>
          <SectionTitle>Screenshots</SectionTitle>
          <Splide
            options={{
              rewind: true,
              type: "loop",
              autoplay: true,
              perMove: 1,
              perPage: 1,
              padding: "0rem",
              focus: "center",
              lazyLoad: "nearby",
              trimSpace: "move",
              preloadPages: 2,
            }}
          >
            {desktopScreenshots.map((image: string, index) => {
              return (
                <SplideSlide key={index}>
                  <Box sx={{ display: "flex", justifyContent: "center",height: "500px" }}>
                    <img
                      src={image}
                      alt={`Desktop screenshot ${index + 1} for ${title}`}
                    />
                  </Box>
                </SplideSlide>
              );
            })}
          </Splide>
          </>
        )}
        <FooterContactForm />
      </PageWrapper>
    </div>
  );
};

export default SingleProjectPage;

export async function getStaticPaths() {
  const paths = projects.map((event) => {
    return {
      params: { id: event.slug },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<IProjectProps> = async ({
  params,
}: GetStaticPropsContext) => {
  const { id } = params;
  const singleProjectData = projects.find((event) => event.slug === id);
  return {
    props: {
      ...singleProjectData,
    },
  };
};
