// thedolcevita.com/menu/category
import Content from "../../components/Content/Content";
import SEO from "../components/SEO";

function Category({ category }) {
  return (
    <>
      <SEO content={`Menu ${category}`} />
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
