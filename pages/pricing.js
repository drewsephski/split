import Head from "next/head";
import Pricing from "../components/ui/Pricing";
import FAQs from "../components/ui/FAQs";
import SiteNavigation from "../components/ui/SiteNavigation";
import Footer from "../components/ui/Footer";

export default function index() {
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
        <title>Pricing - Split</title>
      </Head>
      <SiteNavigation />
      <Pricing />
      <FAQs />
      <Footer />
    </>
  );
}
