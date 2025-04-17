"use client";
import Container from "@/components/common/container";
import GlowButton from "@/components/common/glow-button";
import Image from "next/image";
import React from "react";

function FeaturesGrid() {
  return (
    <Container className="relative overflow-visible flex flex-col justify-center items-center ">
      <div className="max-w-6xl mx-auto flex flex-col gap-6 py-10">
        {/* Top Row - 2 cards */}

        <div className="flex flex-col md:flex-row gap-6">
          <div className=" rounded-2xl p-6 flex-1 relative z-30 after:z-20 after:absolute after:inset-[.08rem] after:rounded-2xl after:bg-[#060925]/95 bg-[linear-gradient(20deg,_#15143A_18%,_#4450AC_49%,_#15143A_78%)] overflow-hidden pb-80">
            <div className="relative z-40 flex flex-col items-center justify-center gap-4 lg:p-8">
              <h3 className="text-lg lg:text-2xl font-bold mb-2">
                7 Spy Tools Used by the Pros
              </h3>
              <p className="text-sm lg:text-xl text-white/70 text-center">
                Find winning products, analyze top stores, and uncover ad
                strategies in seconds.
              </p>
            </div>

            <Image
              src={"/assets/features/Illustration.png"}
              alt="illustation"
              width={600}
              height={342}
              className="w-full lg:w-3/4 absolute bottom-0 left-1/2 -translate-x-1/2 z-40"
            />
          </div>

          <div className=" rounded-2xl p-6 flex-1 relative z-30 after:z-20 after:absolute after:inset-[.08rem] after:rounded-2xl after:bg-[#060925]/95 bg-[linear-gradient(20deg,_#15143A_18%,_#4450AC_49%,_#15143A_78%)] overflow-hidden pb-80">
            <div className="relative z-30 flex flex-col items-center justify-center gap-4 lg:p-8">
              <h3 className="text-lg lg:text-2xl font-bold mb-2 text-center">
                100 Handpicked Winning Products to Make You Win
              </h3>
              <p className="text-sm lg:text-xl text-white/70 text-center">
                Our experienced team meticulously selects & validates 100
                winning products every month to ensure your store stays ahead of
                the competition.
              </p>
            </div>
            <Image
              src={"/assets/features/Illustration-2.png"}
              alt="illustation"
              width={600}
              height={342}
              className="w-full lg:w-3/4 z-30 absolute bottom-0 left-1/2 -translate-x-1/2"
            />
          </div>
        </div>

        {/* Middle Full-Width Card */}
        <div className=" flex flex-col lg:flex-row justify-center items-center  rounded-2xl p-2 lg:p-6 flex-1 relative after:z-20 after:absolute after:inset-[.08rem] after:rounded-2xl  after:bg-[#060925]/95 bg-[linear-gradient(235deg,_#15143A_18%,_#4450AC_49%,_#15143A_78%)]">
          <Image
            src={"/assets/features/Wishlist.png"}
            alt="illustation"
            width={600}
            height={342}
            className="z-40 order-2 lg:order-1 flex-1"
          />
          <div className="relative z-30 flex flex-col items-center lg:items-start justify-center gap-4 p-4 lg:p-8 order-1 lg:order-2 flex-1 ">
            <h3 className="text-lg lg:text-2xl font-bold mb-2 text-center">
              Pre-Made Product Pages & Creatives. Launch 10x Faster.
            </h3>
            <p className="text-sm lg:text-xl text-white/70 text-center lg:leading-11">
              Get fully optimized product pages, conversion-focused ad
              creatives, and compelling copy—designed to help you scale faster
              with ease. No design skills needed, just launch and grow.
            </p>
          </div>
        </div>

        {/* Bottom Row - 3 cards */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className=" rounded-2xl p-2 pb-60 flex-1 relative after:z-20 after:absolute after:inset-[.08rem] after:rounded-2xl after:bg-[#060925]/95 bg-[linear-gradient(235deg,_#15143A_18%,_#4450AC_49%,_#15143A_78%)]">
            <div className="relative z-30 flex flex-col items-center lg:items-start justify-center gap-4 p-4 lg:p-8 ">
              <h3 className="text-lg lg:text-xl font-bold mb-2 text-start">
                Pre-Designed Landing Pages
              </h3>
              <p className="text-sm lg:text-xl text-white/70 text-center lg:text-left ">
                No designers needed. Ready-to-use product pages you can just
                copy, paste, and launch.
              </p>
            </div>
            <Image
              src={"/assets/features/illustration-3.png"}
              alt="illustation"
              width={600}
              height={342}
              className="w-3/4 z-30 absolute bottom-0 left-1/2 -translate-x-1/2"
            />
          </div>
          <div className=" rounded-2xl p-2 pb-60 flex-1 relative after:z-20 after:absolute after:inset-[.08rem] after:rounded-2xl  after:bg-[#060925]/95 bg-[linear-gradient(235deg,_#15143A_18%,_#4450AC_49%,_#15143A_78%)]">
            <div className="relative z-30 flex flex-col items-center lg:items-start justify-center gap-4 p-4 lg:p-8 ">
              <h3 className="text-lg lg:text-xl  font-bold mb-2 ">
                Handpicked Creatives
              </h3>
              <p className="text-sm lg:text-xl text-white/70 text-center lg:text-left ">
                Carefully curated top-performing ad creatives, ready for you to
                launch ads instantly.
              </p>
            </div>
            <Image
              src={"/assets/features/QR code.png"}
              alt="illustation"
              width={600}
              height={342}
              className="w-full z-30 absolute bottom-0 left-1/2 -translate-x-1/2"
            />
          </div>
          <div className=" rounded-2xl  p-2 pb-60 flex-1 relative after:z-20 after:absolute after:inset-[.08rem] after:rounded-2xl  after:bg-[#060925]/95 bg-[linear-gradient(235deg,_#15143A_18%,_#4450AC_49%,_#15143A_78%)]">
            <div className="relative z-30 flex flex-col items-center lg:items-start justify-center gap-4 p-8 ">
              <h3 className="text-lg lg:text-xl  font-bold mb-2 ">
                Launch 10x Faster
              </h3>
              <p className="text-sm lg:text-xl text-white/70 text-center lg:text-left">
                No more wasted time and ad spend. Launch your next product
                within minutes, not weeks.
              </p>
            </div>
            <Image
              src={"/assets/features/Lightning Bolt.png"}
              alt="illustation"
              width={600}
              height={342}
              className="w-full z-30 absolute bottom-0 left-1/2 -translate-x-1/2"
            />
          </div>
        </div>
      </div>
      <GlowButton
        text="Get Access"
        className="my-10 text-base cursor-pointer"
      />
    </Container>
  );
}

export default FeaturesGrid;
