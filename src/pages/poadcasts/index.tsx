import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";

const Poadcasts: NextPage = () => {
  return <div>Poadcasts Page</div>;
};

export default Poadcasts;

export const getStaticProps: GetStaticProps = async ({ locale }: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
};
