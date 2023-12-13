import Gallery from "@/components/Gallery/Gallerys";
import Cta from "@/components/Home/Cta";
import Faq from "@/components/Home/Faq";
import Project from "@/components/Home/Project";
import Testi from "@/components/Home/Testi";
import Why from "@/components/Home/Why";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import Detail from "@/components/About/Detail";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>M3M Noida Projects | M3M Properties</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="M3M The Cullinan in Sector 94, Noida, is a top-tier residential and commercial development in Uttar Pradesh. M3M, a renowned and trusted name in India's real estate sector, has successfully delivered premium residential and commercial projects nationwide." />
        <meta name="keywords" content="M3M Properties, 2, 3 & 4 Bhk Apartments, m3m noida, m3m noida projects, m3m noida sector-94, m3m noida apartments, m3m noida projects sector -94, m3m noida homes, m3m noida residency, m3m noida sector-94 homes, m3m noida sector 94 apartments, m3m noida luxury projects" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon.ico" />
      </Head>
      <Header />
      <Cta />
      <Project />
      <Detail />
      <Why />
      <Gallery />
      <Testi />
      <Faq />
      <Footer />
    </>
  );
}
