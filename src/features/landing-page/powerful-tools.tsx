import Container from "@/components/common/container";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const featureCardClassName =
  "rounded-2xl p-2 flex-1 relative border-2 border-[#0C0F26] bg-[linear-gradient(180deg,_rgba(0,_2,_15,_0.00)_0%,_#00041F_100%)]";

interface FeatureCardProps {
  title: string;
  description: string;
  className?: string;
  src: string;
}

const FeatureCard = ({
  title,
  description,
  className,
  src,
}: FeatureCardProps) => {
  return (
    <article className={className}>
      <div className="relative z-30 flex flex-col items-start justify-start gap-4 p-4 lg:p-8 ">
        <div className="flex w-full justify-between items-center gap-4">
          <Image src={src} alt="bolt" width={40} height={40} />
          <h3 className="text-xl font-medium mb-2 text-start flex-1 ">
            {title}
          </h3>
          <div className="px-3.5 py-2 bg-[#0E122E] rounded-[100px]">
            <ArrowUpRight color="#C4C8D4" size={18} />
          </div>
        </div>

        <p className="text-base lg:text-[18px]  text-white/70 text-start">
          {description}
        </p>
      </div>
    </article>
  );
};

const PowerfulTools = () => {
  return (
    <Container className="relative flex justify-center flex-col items-start max-w-7xl mx-auto pt-24 lg:pt-16 pb-10 gap-6 ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
        {/* First Column */}
        <FeatureCard
          title="PipiAds"
          description="Discover top-performing TikTok ads and winning dropshipping products."
          className={featureCardClassName}
          src="/assets/features/7.png"
        />
        <FeatureCard
          title="Adnosaur"
          description="Track and analyze competitor ad campaigns to refine your strategy."
          className={featureCardClassName}
          src="/assets/features/1.png"
        />
        <FeatureCard
          title="Shophunter.io"
          description="Spy on competitor stores and uncover best-selling products."
          className={featureCardClassName}
          src="/assets/features/2.png"
        />

        {/* Second Column */}
        <FeatureCard
          title="FutureLib"
          description="Get AI-driven insights on emerging trends and market shifts."
          className={featureCardClassName}
          src="/assets/features/5.png"
        />
        <FeatureCard
          title="Winning Hunter"
          description="Find high-converting products with proven sales data."
          className={featureCardClassName}
          src="/assets/features/icon.png"
        />
        <FeatureCard
          title="Chat GPT+"
          description="Generate persuasive product descriptions and ad copy instantly."
          className={featureCardClassName}
          src="/assets/features/6.png"
        />

        <FeatureCard
          title="Foreplay.co"
          description="Uncovers hidden opportunities, empowering brands to innovate smarter and faster."
          className={featureCardClassName}
          src="/assets/features/9.jpeg"
        />
        <FeatureCard
          title="Runway.ml"
          description="Transforms ideas into visuals, videos, and multimedia, instantly bringing imagination to life"
          className={featureCardClassName}
          src="/assets/features/10.jpeg"
        />
        <FeatureCard
          title="Pacdora"
          description="Turns concepts into shelf-ready visuals, optimizing aesthetics and efficiency to help brands stand out."
          className={featureCardClassName}
          src="/assets/features/8.png"
        />

        {/* Third Column */}
        <FeatureCard
          title="Canva"
          description="Generate persuasive product descriptions and ad copy instantly."
          // Apply grid placement only on large screens
          className={`${featureCardClassName} lg:col-start-2 lg:col-span-1`}
          src="/assets/features/4.png"
        />
      </div>
    </Container>
  );
};

export default PowerfulTools;
