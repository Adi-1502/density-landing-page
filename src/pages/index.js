import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/NavBar";
import GetEarlyAccess from "@/components/GetEarlyAccess";
import Cards from "@/components/Cards";
import FaqSection from "@/components/Faq";
import SocialMedia from "@/components/SocialMedia";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <NavBar />
      <GetEarlyAccess />
      <Cards />
      <FaqSection />
      <SocialMedia></SocialMedia>
    </div>
  );
}
