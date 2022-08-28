import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";

const PoadcastSingle: NextPage = () => {
  return <div>Poadcast Single Page</div>;
};

export default PoadcastSingle;

export async function getStaticPaths() {
    return {
      paths: [
        { params: { id: '1' } } // See the "paths" section below
      ],
      fallback: false,
    };
  }

export const getStaticProps: GetStaticProps = async ({ locale }: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
};
