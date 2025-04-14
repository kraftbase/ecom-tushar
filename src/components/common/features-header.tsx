import Container from "@/components/common/container";
import Image from "next/image";
import React from "react";

function FeaturesHeader() {
  return (
    <Container className="pt-20 pb-10">
      <div className="relative z-10 flex flex-col items-center justify-center">
        <Image
          src="/assets/features/features-header.svg"
          alt="features-header"
          width={716}
          height={342}
        />
        <Image
          src="/image.png"
          alt="header-bg"
          width={600}
          height={342}
          className="absolute  "
        />
        <div className="z-30 flex justify-center items-center flex-col absolute bottom-10 gap-6 ">
          <div className="relative w-full flex justify-center items-center">
            <Image
              src="/assets/features/line_left.svg"
              alt="line-left"
              width={400}
              height={200}
              className="absolute -left-28 top-8 -translate-y-1/2"
            />
            <h1 className="rounded-[100px] border-[#959EFE]/60 border-[0.2px] py-1 px-7 text-[#959EFE] font-['Poppins'] text-base font-normal leading-6">
              Features
            </h1>
            <Image
              src="/assets/features/line_right.svg"
              alt="line-right"
              width={400}
              height={200}
              className="absolute -right-28 top-8 -translate-y-1/2 "
            />
          </div>
          <h1 className="text-5xl font-bold">No Guesswork. Just Pure Scale.</h1>
          <h1 className="text-center text-[#CAC9D1] text-lg font-normal">
            Get access to top ecommerce tools & apps, winning <br />
            products, pre-made landers & creatives.
          </h1>
        </div>
      </div>
    </Container>
  );
}

export default FeaturesHeader;
