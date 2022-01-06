import Head from "next/head";

const SEO = ({ content }) => {
  return (
    <Head>
      <title>The Dolce Vita - {content}</title>
      <meta name="description" content={`The Dolce Vita - ${content}`} />
      <link rel="shortcut icon" href="/favicon.png" />
    </Head>
  );
};

export default SEO;
