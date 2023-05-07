import Hero from "@/components/Hero";
import HomeLayout from "@/layouts/HomeLayout";
import Contact from "@/sections/Contact";
import About from "@/sections/About";
import Gallery from "@/sections/Gallery";
import Features from "@/sections/Features";
import { useAuth } from "@/contexts/auth";
import Header from "@/sections/Header";

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
