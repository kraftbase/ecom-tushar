import GlowButton from "@/components/common/glow-button";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="h-[60rem] relative mt-20 overflow-hidden flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center gap-2.5 p-8 z-50">
        <h1 className="text-[4rem]  font-bold leading-[120%] tracking-[-0.554px] text-center">
          Supercharge Your <br /> Dropshipping Success
        </h1>
        <h1 className="text-center text-[#CAC9D1] font-satoshi text-[22px] opacity-80 leading-[34.8px] pt-5">
          Unlock powerful tools, winning products, and expert insights— <br />
          everything you need to scale your store effortlessly.
        </h1>
        <GlowButton
          text="Start Scaling"
          className="w-[33rem] mt-8 text-xl h-16"
        />
      </div>
      <div className="w-full py-4  z-50  absolute bottom-0 flex justify-center items-center ">
        <div className="px-8 py-4 flex justify-center items-center gap-9 text-sm text-[#C9CBCF] font-satoshi text-[14px] font-normal leading-[14px] tracking-[-0.28px]">
          <h1 className="text-[#61656B]">Copyright © 2025</h1>
          <h1 className="text-[#61656B]">Ecom Tushar</h1>
          <h1 className="text-[#61656B]">All rights reserved</h1>
          <h1>Terms of Service</h1>
          <h1>Privacy Policy</h1>
          <div className="flex gap-4">
            <Image
              src="/assets/footer/icons/x.svg"
              alt="twitter"
              width={20}
              height={20}
            />
            <Image
              src="/assets/footer/icons/linkedin.svg"
              alt="instagram"
              width={20}
              height={20}
            />
            <Image
              src="/assets/footer/icons/github.svg"
              alt="facebook"
              width={20}
              height={20}
            />
            <Image
              src="/assets/footer/icons/youtube.svg"
              alt="youtube"
              width={20}
              height={20}
            />
            <Image
              src="/assets/footer/icons/slack.svg"
              alt="linkedin"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
      <Image
        src="/assets/footer/Ellipse 7192.png"
        alt="footer"
        width={1500}
        height={1500}
        className="absolute top-0 left-0 h-full w-full z-40"
      />
      <Image
        src="/assets/footer/line.svg"
        alt="star"
        width={1000}
        height={1000}
        className="absolute top-40 z-30 left-30 w-10 rotate-[-10.804deg]"
      />
      <Image
        src="/assets/footer/line.svg"
        alt="star"
        width={1000}
        height={1000}
        className="absolute top-60 z-30 left-1/2 -translate-x-1/2 w-10 rotate-[-10.804deg]"
      />

      <Image
        src="/assets/footer/stars.png"
        alt="star"
        width={1000}
        height={1000}
        className="absolute top-0 z-30 -left-20 w-[790.597px] h-[409.86px] rotate-[-10.804deg] object-cover"
      />
      <Image
        src="/assets/footer/stars.png"
        alt="star"
        width={1000}
        height={1000}
        className="absolute top-0 z-30 -left-40 w-[790.597px] h-[409.86px] rotate-[10.804deg] object-cover"
      />
      <Image
        src="/assets/footer/stars.png"
        alt="star"
        width={1000}
        height={1000}
        className="absolute bottom-0 z-30 left-40 w-[790.597px] h-[409.86px] rotate-[10.804deg] object-cover"
      />
      <Image
        src="/assets/footer/stars_2.png"
        alt="star"
        width={360}
        height={200}
        className="absolute top-50 z-30 -right-20   rotate-[10.804deg] object-cover"
      />
      <Image
        src="/assets/footer/stars_3.png"
        alt="star"
        width={1000}
        height={1000}
        className="absolute -top-10  -right-20 w-[790.597px] h-[290px] rotate-[20.804deg] object-cover"
      />

      <div
        className="absolute z-0 top-40 left-1/2 -translate-x-1/2 w-[7680px] h-[7680px] flex-shrink-0 rounded-[9999px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.50) -6.63%, rgba(255, 255, 255, 0.00) 1.32%)",
        }}
      />
      <div
        className="absolute z-10 top-40 left-1/2 -translate-x-1/2 w-[7680px] h-[7680px] flex-shrink-0 rounded-[9999px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #00031C 85.17%, #211E9C 97.67%, #2A26DF 100%)",
          boxShadow: "0px 0px 115.2px 0px rgba(255, 255, 255, 0.60) inset",
        }}
      />
      <div
        className="absolute -z-10 top-40 left-1/2 -translate-x-1/2 w-[3237px] h-[3237px] flex-shrink-0 rounded-[2487.51px]"
        style={{
          background: "#5834E9",
          filter: "blur(62.25px)",
        }}
      />
      <div
        className="absolute -z-20 top-40 left-1/2 -translate-x-1/2 w-[3237px] h-[3237px] flex-shrink-0 rounded-[99999px]"
        style={{
          background: "#FFF",
          filter: "blur(12px)",
        }}
      />
    </div>
  );
}

export default Footer;
