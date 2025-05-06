import Head from "next/head";
import CenteredCTAText from "../components/ui/CenteredCTAText";
import CTA from "../components/ui/CTA";
import FAQs from "../components/ui/FAQs";
import Features from "../components/ui/Features";
import FooterCTA from "../components/ui/FooterCTA";
import Hero from "../components/ui/Hero";
import LogoGrid from "../components/ui/LogoGrid";
import Stats from "../components/ui/Stats";
import SiteNavigation from "../components/ui/SiteNavigation";
import Footer from "../components/ui/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
      </Head>
      <SiteNavigation />
      <Hero />
      <LogoGrid />
      <CenteredCTAText />
      <CTA />
      <Features />
      <Stats />
      <FAQs />
      <FooterCTA />
      <Footer />
    </>
  );
}
