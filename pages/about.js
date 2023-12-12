
import Testi from "@/components/Home/Testi";

import Header from "../components/Header"
import Footer from "@/components/Footer";
import Detail from "@/components/About/Detail";
import Head from "next/head";

export default function Home() {
  return (
   <>
   <Head>
        <title>M3M Noida Projects | About</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A dynamic leader, Vishal Raheja started his entrepreneurial journey with Investoxpert in 2016. A visionary by nature, he is a seasoned professional with over 10 years of experience in the real estate and BFSI sector. He is playing an instrumental role in setting policies and procedures for the Sales and Marketing team in the company and actively involved in setting benchmark practices for Customer Relation Management." />
        <meta name="keywords" content="M3M Properties, 2, 3 & 4 Bhk Apartments, m3m noida, m3m noida projects, m3m noida sector-94, m3m noida apartments, m3m noida projects sector -94, m3m noida homes, m3m noida residency, m3m noida sector-94 homes, m3m noida sector 94 apartments, m3m noida luxury projects" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon.ico" />
      </Head>
   <Header />
   
   <Detail />
  
   <Testi />
   
   <Footer />
   
   </>
  )
}
