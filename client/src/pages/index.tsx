import Hero from "@/components/Hero";
import HomeLayout from "@/layouts/HomeLayout";
import Contact from "@/components/home/Contact";
import About from "@/components/home/About";
import Gallery from "@/components/home/Gallery";
import Features from "@/components/home/Features";
import { useAuth } from "@/contexts/auth";
import Header from "@/components/home/Header";
import DefaultLayout from "@/layouts/DefaultLayout";

export default function HomePage() {
  return (
    <DefaultLayout title="Home page">
      <Header />
      <About />
      <Features />
      {/* <Gallery /> */}
      {/* <Contact /> */}
    </DefaultLayout>
  );
}
