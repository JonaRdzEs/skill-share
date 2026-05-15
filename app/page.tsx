import { Header } from "@/src/components/landing/Header";
import { HeroSection } from "@/src/components/landing/sections/HeroSection";
import { AppStats } from "@/src/components/landing/sections/AppStats";
import { HowItWorks } from "@/src/components/landing/sections/HowItWorks";
import { WhyChooseUs } from "@/src/components/landing/sections/WhyChooseUs";
import { Testimonials } from "@/src/components/landing/sections/Testimonials";
import { PopularCategories } from "@/src/components/landing/sections/PopularCategories";
import { ReadyToStart } from "@/src/components/landing/sections/ReadyToStart";
import { Footer } from "@/src/components/landing/sections/Footer";

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
