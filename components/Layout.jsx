import { Urbanist } from "next/font/google";
import Nav from "./Nav";
import Footer from "./footer/Footer";
import CTA from "./CTA";
import TopPopup from "./TopPopup";

const inter = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "VivaTera | Real Estate Business App",
  description: "Created using Strapi CMS and Next.js",
};

export default function RootLayout({ children }) {
  return (
    <>
      <main className={`${inter.className} flex min-h-screen flex-col items-center`}>
        <TopPopup />
        <Nav />
        {children}
        <CTA />
        <Footer />
      </main >
    </>


  );
}
