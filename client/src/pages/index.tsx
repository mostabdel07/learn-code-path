import Hero from "@/components/Hero";
import HomeLayout from "@/layouts/HomeLayout";
import Contact from "@/components/home/Contact";
import About from "@/components/home/About";
import Gallery from "@/components/home/Gallery";
import Features from "@/components/home/Features";
import { useAuth } from "@/contexts/auth";
import Header from "@/components/home/Header";

export default function HomePage() {
  const { isAuthenticated } = useAuth();
  return (
    <HomeLayout isAuthenticated={isAuthenticated}>
      <Header />
      <About />
      <Features />
      <Gallery />
      <Contact />
    </HomeLayout>
  );
}
