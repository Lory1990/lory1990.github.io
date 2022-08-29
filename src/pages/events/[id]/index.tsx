import { GetStaticProps, GetStaticPropsContext } from "next";

const Events: React.FC = () => {
  return <div>Events Page</div>;
};

export default Events;

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

    },
  };
};
