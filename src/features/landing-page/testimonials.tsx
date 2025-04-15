import Container from "@/components/common/container";
import React from "react";

function Testimonials() {
  return (
    <Container className="relative overflow-visible flex flex-col justify-center items-center max-w-7xl mx-auto py-10 gap-6 ">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
        {/* Left side: placeholder box (could be an image/video, etc.) */}
        <div className="bg-gray-800 rounded-lg w-full h-80 md:h-80 flex items-center justify-center">
          {/* Placeholder: Insert your own content here (e.g. image) */}
          <span className="text-gray-600 text-sm">Image / Video</span>
        </div>

        {/* Right side: quote + profile */}
        <div className="flex flex-col h-full justify-center">
          {/* Big quote icon */}
          <div className="text-5xl md:text-6xl  mb-4 leading-none">&ldquo;</div>
          {/* Quote content */}
          <blockquote className="text-gray-100 text-lg md:text-xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </blockquote>
          {/* Profile */}
          <div className="flex items-center mt-6 bg-[#060925] w-fit p-3.5 rounded-2xl border border-[#131839]">
            {/* Avatar (replace with real image) */}
            <div className="w-12  h-12 rounded-xl overflow-hidden bg-blue-700 flex items-center justify-center">
              <span className="text-white">R</span>
            </div>
            <div className="ml-4">
              <div className="font-semibold text-gray-100">Ryan Matthews</div>
              <div className="text-gray-400 text-sm">UI/UX Designer</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Testimonials;
