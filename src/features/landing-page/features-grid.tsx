"use client";
import Container from "@/components/common/container";
import GlowButton from "@/components/common/glow-button";
import Image from "next/image";
import React, { useRef } from "react";
import { LottieRefCurrentProps } from "lottie-react";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import sevenSpy from "../../../public/assets/lottie_animations/features/seven_spy.json";
import hundredHandpicked from "../../../public/assets/lottie_animations/features/hundred_handpicked.json";
import premadeProduct from "../../../public/assets/lottie_animations/features/Pre-made_product_pages.json";
import preDesigned from "../../../public/assets/lottie_animations/features/pre_designed_landing_pages.json";
import LauchTenX from "../../../public/assets/lottie_animations/features/launch_10x_faster.json";
import handpickedCreatives from "../../../public/assets/lottie_animations/features/handpicked_creatives.json";
import dynamic from "next/dynamic";

function FeaturesGrid() {
  const lottieRefs = {
    sevenSpy: useRef<LottieRefCurrentProps | null>(null),
    hundredHandpicked: useRef<LottieRefCurrentProps | null>(null),
    premadeProduct: useRef<LottieRefCurrentProps | null>(null),
    preDesigned: useRef<LottieRefCurrentProps | null>(null),
    LauchTenX: useRef<LottieRefCurrentProps | null>(null),
    handpickedCreatives: useRef<LottieRefCurrentProps | null>(null),
  };

  const handleMouseEnter = (
    ref: React.RefObject<LottieRefCurrentProps | null>
  ) => {
    if (ref.current) {
      ref.current.play();
    }
  };

  const handleMouseLeave = (
    ref: React.RefObject<LottieRefCurrentProps | null>
  ) => {
    if (ref.current) {
      ref.current.stop();
    }
  };

  return (
    <Container className="relative overflow-visible flex flex-col justify-center items-center font-satoshi ">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 py-10">
        {/* Top Row - 2 cards */}

        <div className="flex flex-col md:flex-row gap-6">
          <article
            className="rounded-2xl p-4 flex-1 relative z-30 after:z-20 after:absolute after:inset-[.08rem] after:rounded-2xl after:bg-[#060925]/95 bg-[linear-gradient(20deg,_#15143A_18%,_#4450AC_49%,_#15143A_78%)] overflow-hidden flex justify-center items-center flex-col "
            onMouseEnter={() => handleMouseEnter(lottieRefs.sevenSpy)}
            onMouseLeave={() => handleMouseLeave(lottieRefs.sevenSpy)}
          >
            <header className="relative z-40 flex flex-col items-center justify-center gap-4 lg:p-4">
              <h3 className="text-lg lg:text-2xl font-bold mb-2">
                10 Spy Tools Used by the Pros
              </h3>
              <p className="text-sm lg:text-xl text-[#F8F8F8B2]/70 text-center font-normal">
                Find winning products, analyze top stores, and uncover ad
                strategies in seconds.
              </p>
            </header>

            <Lottie
              lottieRef={lottieRefs.sevenSpy}
              animationData={sevenSpy}
              loop={false}
              aria-hidden
              className="w-[98%]  rounded-2xl lg:rounded-none lg:w-3/4 relative z-50"
            />
          </article>

          <article
            className="rounded-2xl p-4 flex-1 relative z-30 after:z-20 after:absolute after:inset-[.08rem] after:rounded-2xl after:bg-[#060925]/95 bg-[linear-gradient(20deg,_#15143A_18%,_#4450AC_49%,_#15143A_78%)] overflow-hidden pb-80"
            onMouseEnter={() => handleMouseEnter(lottieRefs.hundredHandpicked)}
            onMouseLeave={() => handleMouseLeave(lottieRefs.hundredHandpicked)}
          >
            <header className="relative z-40 flex flex-col items-center justify-center gap-4 lg:p-4 lg:px-9">
              <h3 className="text-lg lg:text-2xl font-bold mb-2 text-center">
                100 Handpicked Winning Products to Make You Win
              </h3>
              <p className="text-sm lg:text-xl text-[#F8F8F8B2]/70 text-center">
                Our experienced team meticulously selects & validates 100
                winning products every month to ensure your store stays ahead of
                the competition.
              </p>
            </header>

            <Lottie
              lottieRef={lottieRefs.hundredHandpicked}
              animationData={hundredHandpicked}
              loop={false}
              aria-hidden
              className="w-[98%] rounded-2xl lg:rounded-none lg:w-3/4 absolute bottom-[1.2px] left-1/2 -translate-x-1/2 z-30"
            />
          </article>
        </div>

        {/* Middle Full-Width Card */}
        <article
          className="flex flex-col lg:flex-row justify-center items-center  rounded-2xl p-2 lg:p-4 flex-1 relative after:z-20 after:absolute after:inset-[.08rem] after:rounded-2xl  after:bg-[#060925]/95 bg-[linear-gradient(235deg,_#15143A_18%,_#4450AC_49%,_#15143A_78%)]"
          onMouseEnter={() => handleMouseEnter(lottieRefs.premadeProduct)}
          onMouseLeave={() => handleMouseLeave(lottieRefs.premadeProduct)}
        >
          <Lottie
            lottieRef={lottieRefs.premadeProduct}
            animationData={premadeProduct}
            loop={false}
            aria-hidden
            className="z-30 order-2 lg:order-1 lg:flex-1"
          />
          <header className="relative z-40 flex flex-col items-center lg:items-start justify-center gap-4 p-4 lg:p-8 order-1 lg:order-2 flex-1 ">
            <h3 className="text-lg lg:text-2xl font-bold mb-2 text-center w-full">
              Pre-Made Product Pages & <br className="lg:hidden" /> Creatives.{" "}
              <br className="hidden lg:block" /> Launch 10x Faster.
            </h3>
            <p className="text-sm lg:text-xl text-[#F8F8F8B2]/70 text-center lg:leading-9 w-full">
              Get fully optimized product pages,{" "}
              <br className="hidden lg:block" /> conversion-focused ad
              creatives, and <br className="hidden lg:block" /> compelling
              copy—designed to help you <br className="hidden lg:block" />
              scale faster with ease. No design skills{" "}
              <br className="hidden lg:block" /> needed, just launch and grow.
            </p>
          </header>
        </article>

        {/* Bottom Row - 3 cards */}
        <div className="flex flex-col md:flex-row gap-6">
          <article
            className="rounded-2xl p-2  flex-1 relative after:z-20 after:absolute after:inset-[.08rem] after:rounded-2xl after:bg-[#060925]/95 bg-[linear-gradient(235deg,_#15143A_18%,_#4450AC_49%,_#15143A_78%)]"
            onMouseEnter={() => handleMouseEnter(lottieRefs.preDesigned)}
            onMouseLeave={() => handleMouseLeave(lottieRefs.preDesigned)}
          >
            <header className="relative z-40 flex flex-col items-center lg:items-start justify-center gap-4 p-4 lg:p-8 lg:pb-0 ">
              <h3 className="text-lg lg:text-xl font-bold mb-2 text-start">
                Pre-Designed Landing Pages
              </h3>
              <p className="text-sm lg:text-xl text-[#F8F8F8B2]/70 text-center lg:text-left ">
                No designers needed. Ready-to-use product pages you can just
                copy, paste, and launch.
              </p>
            </header>

            <Lottie
              lottieRef={lottieRefs.preDesigned}
              animationData={preDesigned}
              loop={false}
              aria-hidden
              className="rounded-2xl relative z-50"
            />
          </article>
          <article
            className="rounded-2xl p-2  flex-1 relative after:z-20 after:absolute after:inset-[.08rem] after:rounded-2xl after:bg-[#060925]/95 bg-[linear-gradient(235deg,_#15143A_18%,_#4450AC_49%,_#15143A_78%)]"
            onMouseEnter={() =>
              handleMouseEnter(lottieRefs.handpickedCreatives)
            }
            onMouseLeave={() =>
              handleMouseLeave(lottieRefs.handpickedCreatives)
            }
          >
            <header className="relative z-30 flex flex-col items-center lg:items-start justify-center gap-4 p-4 lg:p-8 lg:pb-0 ">
              <h3 className="text-lg lg:text-xl font-bold mb-2 ">
                Handpicked Creatives
              </h3>
              <p className="text-sm lg:text-[21px] text-[#F8F8F8B2]/70 text-center lg:text-left ">
                Carefully curated top-performing ad creatives, ready for you to
                launch ads instantly.
              </p>
            </header>

            <Lottie
              lottieRef={lottieRefs.handpickedCreatives}
              animationData={handpickedCreatives}
              loop={false}
              aria-hidden
              className="w-full  relative z-50"
            />
          </article>
          <article
            className="rounded-2xl p-2  flex-1 relative after:z-20 after:absolute after:inset-[.08rem] after:rounded-2xl after:bg-[#060925]/95 bg-[linear-gradient(235deg,_#15143A_18%,_#4450AC_49%,_#15143A_78%)]"
            onMouseEnter={() => handleMouseEnter(lottieRefs.LauchTenX)}
            onMouseLeave={() => handleMouseLeave(lottieRefs.LauchTenX)}
          >
            <header className="relative z-30 flex flex-col items-center lg:items-start justify-center gap-4 p-4 lg:p-8 lg:pb-0 ">
              <h3 className="text-lg lg:text-xl font-bold mb-2 ">
                Launch 10x Faster
              </h3>
              <p className="text-sm lg:text-xl text-[#F8F8F8B2]/70 text-center lg:text-left">
                No more wasted time and ad spend. Launch your next product
                within minutes, not weeks.
              </p>
            </header>
            {/* <Image
              src={"/assets/features/Lightning Bolt.png"}
              alt="illustation"
              width={600}
              height={342}
              className="w-full z-30 absolute bottom-0 left-1/2 -translate-x-1/2"
            /> */}
            <Lottie
              lottieRef={lottieRefs.LauchTenX}
              animationData={LauchTenX}
              loop={false}
              aria-hidden
              className="w-full relative z-50"
            />
          </article>
        </div>
      </div>
      <GlowButton
        text="Get Access"
        className="my-10 text-base cursor-pointer px-8 py-6"
        href="/#pricing"
      />
    </Container>
  );
}

export default FeaturesGrid;
