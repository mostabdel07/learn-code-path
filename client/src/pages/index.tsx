import About from "@/components/home/About";
import Features from "@/components/home/Features";
import Header from "@/components/home/Header";
import DefaultLayout from "@/layouts/DefaultLayout";
import Caroussel from "@/components/Caroussel";

export default function HomePage() {
  return (
    <DefaultLayout title="Home page">
      <Header />
      <About />
      <Features />
      <Caroussel />
    </DefaultLayout>
  );
}
