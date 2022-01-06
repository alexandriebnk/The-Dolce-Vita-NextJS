// thedolcevita.com/
import Head from "next/head";
import Home from "../components/Home/Home";

function HomePage() {
  return (
    <>
      <Head>
        <title>The Dolce Vita Restaurant</title>
        <meta
          name="description"
          content="The Dolce Vita Restaurant - Menu and Reservation"
        />
      </Head>
      <Home />
    </>
  );
}

export default HomePage;
