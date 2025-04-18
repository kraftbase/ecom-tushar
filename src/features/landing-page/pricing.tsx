import Container from "@/components/common/container";
import GlowButton from "@/components/common/glow-button";
import GreyButton from "@/components/common/grey-button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";
import localFont from "next/font/local";

const tomatoGrotesk = localFont({
  src: "./../../app/fonts/TomatoGrotesk-Bold.otf",
});

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  originalPrice: string;
  discountLabel?: string;
  isPopularText?: string;
  href: string;
}

function Pricing() {
  const PricingCard = ({
    title,
    price,
    features,
    originalPrice,
    discountLabel,
    isPopularText,
    isPopular = false,
    href,
  }: PricingCardProps) => {
    return (
      <section
        aria-labelledby="pricing-heading"
        className={cn(
          "relative flex flex-col  p-8 rounded-2xl border border-[#959EFE]/20 overflow-hidden flex-1",
          "hover:relative hover:after:z-20 hover:after:absolute hover:after:inset-[.99px] hover:after:rounded-2xl hover:after:backdrop-blur-[2.91213px] hover:after:bg-[linear-gradient(130deg,_#121865_-97.79%,_#060726_51.6%)] hover:bg-[linear-gradient(235deg,_#15143A_18%,_#4450AC_49%,_#15143A_78%)] transition-all duration-500",
          "group"
        )}
      >
        {isPopular && (
          <div className="absolute h-20 -top-7 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center ">
            <Image
              src="/svg/price.svg"
              alt="Popular plan"
              width={149}
              height={29}
              className="w-auto h-auto"
            />
            <span className="absolute text-sm font-medium text-white">
              {isPopularText}
            </span>
          </div>
        )}
        <Image
          src={"/assets/pricing/Line Background.png"}
          alt="gird"
          width={1000}
          height={1000}
          className="w-full absolute left-0 top-0 h-2/3 z-30"
        />
        <div className={cn("z-40 rounded-lg   relative")}>
          {/* Top Row: star icon + duration (e.g. "1 month") */}
          <div className="flex items-center gap-2 text-sm mb-3">
            <Image
              src={"/assets/pricing/star.svg"}
              alt="Star icon"
              width={20}
              height={20}
              className="w-4.5 h-4.5"
            />
            <span className="text-[#CCD7FF] text-xl  font-bold">{title}</span>
          </div>

          {/* Price Row: original (strikethrough) + main price + discount label */}
          <div className="flex flex-col  items-start justify-center  mb-6 ">
            {/* Strikethrough price */}
            <span className="line-through text-[#686773]  text-[18px] font-normal">
              {originalPrice}
            </span>
            {/* New price */}
            <div className="flex gap-3">
              <span className="text-4xl font-bold">{price}</span>
              {/* Discount label (optional) */}
              {discountLabel && (
                <span className="text-[15px] font-medium px-3 py-1.5 rounded-full bg-[#0E122E] text-[#CCD7FF] flex justify-center items-center border border-[#161C44]">
                  {discountLabel}
                </span>
              )}
            </div>
          </div>

          {/* "What's included?" heading */}
          <h4 className="text-sm text-[#CAC9D1] font-semibold mb-3 border-t-[1px] border-[#97A2C2]/30 pt-6">
            What's included:
          </h4>

          {/* Feature list */}
          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-4 text-[#C4C8D4]"
              >
                <span className="flex justify-center items-center rounded-full w-5 h-5 text-[#CCD7FF] bg-[#3363FF]">
                  <Check size={14} strokeWidth={2} />
                </span>

                <span className="leading-tight font-medium">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="relative">
            <GlowButton
              text="Get Started"
              href={href}
              className={cn(
                "w-full z-50 text-base py-[30px] rounded-2xl absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              )}
            />
            <GreyButton
              text="Get Started"
              href={href}
              className={cn(
                "w-full z-50 text-base py-[28px] rounded-2xl opacity-100 group-hover:opacity-0 transition-opacity duration-300"
              )}
            />
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      <div
        className="relative z-10 flex flex-col items-center justify-center mt-24 lg:mt-32 h-full"
        id="pricing"
      >
        <div className="relative h-full w-full overflow-hidden max-w-[105rem]">
          <div
            className="mask-gradient w-1/5 2xl:w-2/5 rotate-180 h-full absolute top-0 right-0  z-40"
            aria-hidden
          />
          <div
            className="mask-gradient w-1/5 2xl:w-2/5  h-full absolute top-0 left-0 z-40"
            aria-hidden
          />
          <Image
            src="/assets/pricing/grid.svg"
            alt="pricing-grid"
            width={2000}
            height={2000}
            fetchPriority="high"
            className="w-full h-full"
          />
          <div className="absolute -top-full left-1/2 -translate-x-1/2 w-full h-full rounded-[1444px] opacity-40 bg-[#5834E9] blur-[115px] " />
        </div>
        <div className="absolute -top-0 left-1/2 -translate-x-1/2 w-80 h-16 z-20 rounded-[137.5px] opacity-30 bg-[#5834E9] blur-[50px]" />
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-full h-[2px] max-w-[105rem]"
          style={{
            background:
              "linear-gradient(90deg, #0E0B3D 0%, #4A56FF 40%, #B3B7F9 51%, #4A56FF 63%, #0E0B3D 100%)",
          }}
        />

        <div
          className={cn(
            "z-30 flex justify-center items-center flex-col absolute gap-2 lg:gap-6 -bottom-32 lg:bottom-6"
          )}
        >
          <div className="relative w-full flex justify-center items-center title-container overflow-x-clip">
            <Image
              src="/assets/features/line_left.svg"
              alt="line-left"
              width={400}
              height={200}
              className=" relative top-4 "
            />
            <h1
              className={cn(
                "rounded-[100px] border-[#959EFE]/60 border-[0.2px] py-1 px-7 text-[#959EFE] font-['Poppins'] text-base font-normal leading-6 relative"
              )}
            >
              <span className="absolute w-2 h-2 bg-[#4F60FA] rounded-full left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 blur-[2px]" />
              <span className="absolute w-2 h-2 bg-[#4F60FA] rounded-full right-0 top-1/2 -translate-y-1/2 translate-x-1/2 blur-[2px]" />
              Pricing
            </h1>

            <Image
              src="/assets/features/line_right.svg"
              alt="line-right"
              width={400}
              height={200}
              className=" relative top-4 "
            />
          </div>

          <h2
            className={` text-[22px] lg:text-5xl font-bold ${tomatoGrotesk.className}`}
          >
            Get Instant Access To <br />
            Beat The Competition.
          </h2>
          <h2 className="text-center text-[#CAC9D1]/70 text-base  lg:text-lg font-normal max-w-xl ">
            Get full access to powerful tools with a simple,{" "}
            <br className="lg:hidden" /> all-in-one pricing plan.
          </h2>
        </div>
      </div>
      <Container className="relative overflow-visible flex flex-col justify-center items-center max-w-7xl mx-auto py-40 lg:py-10 gap-6">
        <section className="flex flex-col lg:flex-row gap-8 w-full justify-center">
          <PricingCard
            title="1 month"
            price="₹2,999"
            features={[
              "10 tools worth ₹60,000/mo",
              "Access to Protools (₹23K/mo)",
              "100 new winning products/mo",
              "Validated winning products",
              "Pre-made product pages",
              "Ready-to-use video creatives",
              "Get supplier details",
            ]}
            originalPrice="40,000"
            discountLabel="15% off"
            href="https://courses.ecomtushar.com/offers/53SYwTzo/checkout"
          />
          <PricingCard
            title="6 month"
            price="₹2,999"
            features={[
              "10 tools worth ₹60,000/mo",
              "Access to Protools (₹23K/mo)",
              "100 new winning products/mo",
              "Validated winning products",
              "Pre-made product pages",
              "Ready-to-use video creatives",
              "Get supplier details",
            ]}
            originalPrice="40,000"
            isPopular={true}
            discountLabel="15% off"
            isPopularText="Most Popular"
            href="https://courses.ecomtushar.com/offers/6doCApEH/checkout"
          />
          <PricingCard
            title="12 month"
            price="₹2,999"
            features={[
              "10 tools worth ₹60,000/mo",
              "Access to Protools (₹23K/mo)",
              "100 new winning products/mo",
              "Validated winning products",
              "Pre-made product pages",
              "Ready-to-use video creatives",
              "Get supplier details",
            ]}
            originalPrice="40,000"
            isPopular={true}
            discountLabel="15% off"
            isPopularText="Highest Savings"
            href="https://courses.ecomtushar.com/offers/HFpFEJra/checkout"
          />
        </section>
      </Container>
    </>
  );
}

export default Pricing;
