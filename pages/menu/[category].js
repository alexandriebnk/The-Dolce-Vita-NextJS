// thedolcevita.com/menu/category
import Content from "../../components/Content/Content";
import Head from "next/head";

function Category({ category }) {
  return (
    <>
      <Head>
        <title>Menu {category}</title>
        <meta name="description" content={`Menu ${category}`} />
      </Head>
      <Content />;
    </>
  );
}

export function getStaticProps({ params = {} } = {}) {
  return {
    props: {
      category: params.category,
    },
  };
}

export function getStaticPaths() {
  const paths = [
    "starters",
    "salads",
    "main",
    "desserts",
    "brunch",
    "cocktails",
  ].map((item) => {
    return {
      params: {
        category: item,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export default Category;
