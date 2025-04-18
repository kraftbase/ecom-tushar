import Container from "@/components/common/container";
import Image from "next/image";
import React from "react";

function Testimonials() {
  return (
    <Container className="relative overflow-visible flex flex-col justify-center items-center max-w-7xl mx-auto py-10 gap-6 ">
      <section className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 justify-center items-center">
        <div className="bg-[#060925] rounded-lg w-full h-80 md:h-full flex items-center justify-center">
          <span className="text-sm" />
        </div>

        <div className="flex flex-col h-full justify-center items-center lg:items-baseline py-10">
          {/* Big quote icon */}
          <div className="text-5xl md:text-6xl  leading-none justify-self-start flex justify-start w-full">
            <Image
              src={"/svg/apos.svg"}
              alt="quote"
              width={40}
              height={40}
              className="w-4 h-fit mb-6"
            />
          </div>

          <blockquote className="text-gray-100 max-w-xl font-satoshi font-bold  text-lg md:text-2xl text-center lg:text-left leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </blockquote>
          <div className="text-5xl md:text-6xl relative leading-none justify-self-end flex justify-end w-full">
            <Image
              src={"/svg/apos_close.svg"}
              alt="quote"
              width={40}
              height={40}
              className="w-4 h-fit mt-6"
            />
          </div>

          <div className="flex  items-center mt-6 bg-[#060925] w-fit p-3.5 rounded-2xl border border-[#131839]">
            <div className="w-12  h-12 rounded-xl overflow-hidden bg-blue-700 flex items-center justify-center">
              <span className="text-white">R</span>
            </div>
            <div className="ml-4">
              <div className="font-semibold text-gray-100">Ryan Matthews</div>
              <div className="text-gray-400 text-sm">UI/UX Designer</div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Testimonials;
