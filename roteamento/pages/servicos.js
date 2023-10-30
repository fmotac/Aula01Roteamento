import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

function ServicesPage() {
  return (
    <>
      <Head>
        <title>Pagina Inicial</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div>
          <h1>Serviços</h1>
          <Navbar />
        </div>
      </main>
    </>
  );
}

export default ServicesPage;
