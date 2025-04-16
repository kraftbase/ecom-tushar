import FeaturesGrid from "@/features/landing-page/features-grid";
import FeaturesHeader from "@/components/common/features-header";
import HeroSection from "@/features/landing-page/hero-section";
import WeWorkedWith from "@/features/landing-page/we-worked-with";
import HowItWorks from "@/features/landing-page/how-it-works";
import PowerfulTools from "@/features/landing-page/powerful-tools";
import ToolsPrice from "@/features/landing-page/tools-price";
import Testimonials from "@/features/landing-page/testimonials";
import Pricing from "@/features/landing-page/pricing";
import FAQ from "@/features/landing-page/faq";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WeWorkedWith />
      <FeaturesHeader
        backgroundImage={{ src: "/image.png", alt: "background" }}
        mainImage={{
          src: "/assets/features/features-header.svg",
          alt: "features-header",
        }}
        title={{ text: "Features" }}
        heading="No Guesswork. Just Pure Scale."
        description="Get access to top ecommerce tools & apps, winning products, pre-made landers & creatives."
      />
      <FeaturesGrid />
      <FeaturesHeader
        backgroundImage={{ src: "/image.png", alt: "background" }}
        mainImage={{
          src: "/assets/features/features_two.png",
          alt: "features-header",
          width: 738,
        }}
        title={{ text: "Process" }}
        heading="How it works."
        description="Effortlessly access premium tools, launch winning products, and scale your store with ease."
      />
      <HowItWorks />
      <FeaturesHeader
        backgroundImage={{ src: "/image.png", alt: "background" }}
        mainImage={{
          src: "/assets/features/features_two.png",
          alt: "features-header",
        }}
        topContent={true}
        bottomSpacing="-bottom-10"
        title={{ text: "Features" }}
        heading="Powerful Spy Tools to Fuel Your Success"
        description="Power-packed tools to find, validate, and scale winning products effortlessly."
      />
      <PowerfulTools />
      <FeaturesHeader
        backgroundImage={{ src: "/image.png", alt: "background" }}
        mainImage={{
          src: "/assets/features/features_two.png",
          alt: "features-header",
          width: 738,
        }}
        title={{ text: "Features" }}
        heading="Powerful Spy Tools to Fuel Your Success"
        description="Power-packed tools to find, validate, and scale winning products effortlessly."
      />
      <ToolsPrice />
      <FeaturesHeader
        backgroundImage={{ src: "/image.png", alt: "background" }}
        mainImage={{
          src: "/assets/features/features_three.png",
          alt: "features-header",
          width: 633,
        }}
        title={{ text: "Testimonials" }}
        heading="Here's What The Community is Saying"
        description="Real reviews from real users."
      />
      <Testimonials />
      <Pricing />
      <FeaturesHeader
        backgroundImage={{ src: "/image.png", alt: "background" }}
        mainImage={{
          src: "/assets/features/features-header.svg",
          alt: "features-header",
        }}
        title={{ text: "FAQ" }}
        heading="Have Questions?"
        description="Answers to your questions. We have got everything you need to know"
      />
      <FAQ />
    </>
  );
}
