import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, GetStaticPropsContext } from "next";

const Events: React.FC = () => {
  return <div>Events Page</div>;
};

export default Events;

export const getStaticProps: GetStaticProps = async ({ locale }: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
};
