// thedolcevita.com/
import PageNotFound from "../components/PageNotFound/PageNotFound";
import SEO from "../components/SEO";

function ErrorPage() {
  return (
    <>
      <SEO content="Page not Found" />
      <PageNotFound />
    </>
  );
}

export default ErrorPage;
