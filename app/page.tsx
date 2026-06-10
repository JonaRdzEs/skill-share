import { Header } from "@/src/features/landing/components";
import {
  HeroSection,
  AppStats,
  HowItWorks,
  WhyChooseUs,
  Testimonials,
  PopularCategories,
  ReadyToStart,
  Footer,
} from "@/src/features/landing/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-22 md:pt-38 bg-linear-to-br from-indigo-50 via-white to-blue-50">
        <HeroSection />
        <AppStats />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <PopularCategories />
        <ReadyToStart />
        <Footer />
      </main>
    </>
  );
}
