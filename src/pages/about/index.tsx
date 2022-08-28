import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, GetStaticPropsContext } from "next";

//https://dev.to/jameswallis/animating-next-js-page-transitions-with-framer-motion-1g9j
//https://letsbuildui.dev/articles/animated-page-transitions-in-nextjs

const About: React.FC = () => {
  return <div>About Page</div>;
};

export default About;

export const getStaticProps: GetStaticProps = async ({ locale }: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
};
