import FeaturesGrid from "@/features/landing-page/features-grid";
import FeaturesHeader from "@/components/common/features-header";
import HeroSection from "@/features/landing-page/hero-section";
import WeWorkedWith from "@/features/landing-page/we-worked-with";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WeWorkedWith />
      <FeaturesHeader />
      <FeaturesGrid />
    </>
  );
}
