import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ["latin"] });

function AboutPage( ) {
  return (
    <>
    <Head>
      <title>Sobre nós</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={`${styles.main} ${inter.className}`}>
      
        <h1>Sobre nós</h1>
        <Navbar />
    
    </main>
  </>
  );
}

export default AboutPage;