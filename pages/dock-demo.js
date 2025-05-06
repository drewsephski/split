import Head from "next/head";
import FloatingDockDemo from "../components/floating-dock-demo";
import SiteNavigation from "../components/ui/SiteNavigation";

export default function DockDemoPage() {
  return (
    <>
      <Head>
        <title>Floating Dock Demo - Split</title>
        <meta name="description" content="Floating dock component demo" />
      </Head>
      <SiteNavigation />
      <div className="mt-32">
        <FloatingDockDemo />
      </div>
    </>
  );
}