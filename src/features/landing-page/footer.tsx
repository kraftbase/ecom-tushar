import GlowButton from "@/components/common/glow-button";
import Particles from "@/components/common/particles";
import { ShootingStars } from "@/components/ui/shooting-stars";
import localFont from "next/font/local";

const tomatoGrotesk = localFont({
  src: "./../../app/fonts/TomatoGrotesk-Bold.otf",
});

import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="h-[35rem] lg:h-[60rem] relative mt-20 overflow-hidden flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center gap-2.5 p-8 z-50 relative -top-10 lg:top-0">
        <h1
          className={`text-2xl lg:text-[4rem] font-tomato-grotesk lg:leading-[120%] tracking-[-0.554px] text-center ${tomatoGrotesk.className}`}
        >
          Supercharge Your <br /> Dropshipping Success
        </h1>
        <h3 className="text-center text-[#CAC9D1] font-satoshi text-sm lg:text-[22px] opacity-80 lg:leading-[34.8px] pt-5">
          Unlock powerful tools, winning products, and{" "}
          <br className="lg:hidden" /> expert insights—{" "}
          <br className="hidden lg:block" />
          everything you need to scale <br className="lg:hidden" /> your store
          effortlessly.
        </h3>
        <GlowButton
          text="Start Scaling"
          className="w-60 lg:w-[33rem] mt-8 text-base lg:text-xl h-12 lg:h-16"
          href="/#pricing"
        />
      </div>
      <footer className="w-full py-4  z-50  absolute bottom-0 flex justify-center items-center ">
        <div className="px-2 lg:px-8 py-4 flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-9 text-sm text-[#C9CBCF] font-satoshi text-[14px] font-normal leading-[14px] tracking-[-0.28px]">
          <div className="flex gap-2 lg:gap-9 order-2 lg:order-1">
            <h4 className="text-[#61656B]">Copyright © 2025</h4>
            <h4 className="text-[#61656B]">Ecom Tushar</h4>
            <h4 className="text-[#61656B]">All rights reserved</h4>
          </div>
          <div className="flex gap-9 order-3 lg:order-2">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
          </div>

          <div className="flex gap-4 order-1 lg:order-3">
            <Image
              src="/assets/footer/icons/x.svg"
              alt="Follow us on Twitter"
              width={20}
              height={20}
            />
            <Image
              src="/assets/footer/icons/linkedin.svg"
              alt="Follow us on linkedin"
              width={20}
              height={20}
            />
            <Image
              src="/assets/footer/icons/github.svg"
              alt="Follow us on github"
              width={20}
              height={20}
            />
            <Image
              src="/assets/footer/icons/youtube.svg"
              alt="Follow us on youtube"
              width={20}
              height={20}
            />
            <Image
              src="/assets/footer/icons/slack.svg"
              alt="Follow us on slack"
              width={20}
              height={20}
            />
          </div>
        </div>
      </footer>
      <div className="w-full overflow-hidden " aria-hidden>
        <Image
          src="/assets/footer/Ellipse 7192.png"
          alt="footer"
          width={1500}
          height={1500}
          className="absolute top-0 left-0 h-full w-full z-40 scale-[1.2]"
        />
      </div>
      <ShootingStars
        className="z-40 w-full h-full"
        trailColor="#fff"
        minSpeed={5}
        maxSpeed={5}
        starWidth={20}
        starHeight={2}
        starColor="#fff"
        aria-hidden
      />

      <div
        className="absolute top-0 z-30 left-0 w-full h-full rotate-[-10.804deg] object-cover"
        aria-hidden
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={500}
          particleSpread={20}
          speed={0.5}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={true}
        />
      </div>

      <div
        className="absolute z-0 top-40 left-1/2 -translate-x-1/2 w-[7680px] h-[7680px] flex-shrink-0 rounded-[9999px]"
        aria-hidden
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.50) -6.63%, rgba(255, 255, 255, 0.00) 1.32%)",
        }}
      />
      <div
        className="absolute z-10 top-10 lg:top-40 left-1/2 -translate-x-1/2 w-[2922.717px] h-[2922.717px] lg:w-[7680px] lg:h-[7680px] flex-shrink-0 rounded-[3805.24px] lg:rounded-[9999px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #00031C 85.17%, #211E9C 97.67%, #2A26DF 100%)",
          boxShadow: "0px 0px 115.2px 0px rgba(255, 255, 255, 0.60) inset",
        }}
        aria-hidden
      />
      <div
        className="absolute -z-10 top-40 left-1/2 -translate-x-1/2 lg:w-[3237px] lg:h-[3237px] lg:rounded-[2487.51px] w-[1231.879px] h-[1231.879px] rounded-[946.652px]"
        style={{
          background: "#5834E9",
          filter: "blur(62.25px)",
        }}
        aria-hidden
      />
      <div
        className="absolute -z-20 top-40 left-1/2 -translate-x-1/2 w-[3237px] h-[3237px] flex-shrink-0 rounded-[99999px]"
        style={{
          background: "#FFF",
          filter: "blur(12px)",
        }}
        aria-hidden
      />
    </div>
  );
}

export default Footer;
