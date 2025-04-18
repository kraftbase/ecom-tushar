import Image from "next/image";
import { cn } from "@/lib/utils";
import Particles from "./particles";
import Marquee from "../Marque/Marque";
import localFont from "next/font/local";

const tomatoGrotesk = localFont({
  src: "./../../app/fonts/TomatoGrotesk-Bold.otf",
});

interface FeaturesHeaderProps {
  mainImage?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };

  title: {
    text: string;
    className?: string;
  };
  heading: string;
  description: string;
  topContent?: boolean;
  className?: string;
  headingClassName?: string;
  bottomSpacing?: string;
}

const FeaturesHeader = ({
  mainImage,

  title,
  heading,
  description,
  topContent,
  className,
  headingClassName,
  bottomSpacing,
}: FeaturesHeaderProps) => {
  return (
    <section className="container-main w-screen lg:w-full mx-auto px-3 md:px-8 xl:px-18 max-w-[95rem] relative lg:pt-20 pb-10 mb-10 lg:mb-0 overflow-x-clip">
      <div className="relative z-10 flex flex-col items-center justify-center">
        {mainImage && (
          <Image
            src={mainImage.src}
            alt={mainImage.alt}
            width={mainImage.width || 716}
            height={mainImage.height || 342}
          />
        )}

        <div className="w-full lg:w-2/3 h-full absolute top-0 left-1/2 -translate-x-1/2 z-10">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={100}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={50}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={true}
            sizeRandomness={0}
          />
        </div>

        {/* <Image
          src={backgroundImage.src}
          alt={backgroundImage.alt}
          width={backgroundImage.width || 600}
          height={backgroundImage.height || 342}
          className="absolute"
        /> */}
        <div
          className={cn(
            "z-30 flex justify-center items-center flex-col absolute gap-1 lg:gap-6 bottom-6",
            bottomSpacing
          )}
        >
          <div className="relative w-full flex justify-center items-center title-container overflow-x-clip">
            <Image
              src="/assets/features/line_left.svg"
              alt="line-left"
              width={400}
              height={200}
              className=" relative top-4 md:top-5 "
            />
            <h1
              className={cn(
                "rounded-[100px] border-[#959EFE]/60 border-[0.2px] py-1 px-7 text-[#959EFE] font-satoshi text-sm lg:text-base font-normal leading-6 relative",
                title.className
              )}
            >
              <span className="absolute w-2 h-2 bg-[#4F60FA] rounded-full left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 blur-[2px]" />
              <span className="absolute w-2 h-2 bg-[#4F60FA] rounded-full right-0 top-1/2 -translate-y-1/2 translate-x-1/2 blur-[2px]" />
              {title.text}
            </h1>
            <Image
              src="/assets/features/line_right.svg"
              alt="line-right"
              width={400}
              height={200}
              className=" relative  top-4 md:top-5"
            />
          </div>
          {topContent && (
            <div className="relative w-40 gap-2 flex justify-start items-center border border-[#1F275F] rounded-full overflow-hidden lg:p-1">
              {/* {[1, 2, 3, 4, 5].map((num) => (
                <Image
                  key={num}
                  src={"/assets/features/icon.png"}
                  alt="icon"
                  width={50}
                  height={50}
                />
              ))} */}
              <Marquee
                icons={true}
                className="w-fit h-fit"
                images={[
                  "/assets/features/icon.png",
                  "/assets/features/1.png",
                  "/assets/features/2.png",
                  "/assets/features/3.png",
                  "/assets/features/4.png",
                ]}
              />
            </div>
          )}
          <h1
            className={cn(
              `text-[22px] lg:text-5xl font-bold ${tomatoGrotesk.className}`,
              headingClassName
            )}
          >
            {heading}
          </h1>
          <h1 className="text-center text-[#CAC9D1]/70 text-base lg:text-lg font-normal max-w-lg">
            {description}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default FeaturesHeader;
