import Container from "@/components/common/container";
import Image from "next/image";
import React from "react";

function HowItWorks() {
  const commonCardClasses =
    "rounded-2xl p-2 flex-1 relative after:z-20 after:absolute after:inset-[1.5px] after:rounded-2xl after:bg-[#00031C] bg-[#131839] hover:bg-[linear-gradient(235deg,_#15143A_18%,_#4450AC_49%,_#15143A_78%)] hover:after:backdrop-blur-[2.91213px] hover:after:bg-[linear-gradient(130deg,_#121865_-97.79%,_#060726_51.6%)] transition-all duration-300 flex flex-col";

  return (
    <Container className="relative overflow-visible flex flex-col lg:flex-row justify-center items-stretch h-full max-w-7xl mx-auto py-10 gap-6">
      <article className={commonCardClasses}>
        <div className="relative z-30 flex flex-col items-start justify-start gap-4 p-4 lg:p-6 ">
          <Image
            src={"/assets/features/bolt.png"}
            alt="illustation"
            width={200}
            height={200}
            className=" w-10 z-30 "
          />
          <h3 className="text-lg lg:text-xl font-bold text-start">
            Get Instant Access
          </h3>
          <p className="text-sm lg:text-[18px] text-[#A7ADBE] text-start">
            Choose a plan and unlock premium tools, winning products, and expert
            resources immediately.
          </p>
        </div>
      </article>
      <article className={commonCardClasses}>
        <div className="relative z-30 flex flex-col items-start justify-start gap-4 p-4 lg:p-6 ">
          <Image
            src={"/assets/features/bolt.png"}
            alt="illustation"
            width={200}
            height={200}
            className=" w-10 z-30 "
          />
          <h3 className="text-lg lg:text-xl font-bold text-start">
            Explore Your Dashboard
          </h3>
          <p className="text-sm lg:text-[18px] text-[#A7ADBE] text-start">
            Navigate an easy-to-use dashboard packed with spy tools, product
            research, landing pages, and ad creatives.
          </p>
        </div>
      </article>
      <article className={commonCardClasses}>
        <div className="relative z-30 flex flex-col items-start justify-start gap-4 p-4 lg:p-6 ">
          <Image
            src={"/assets/features/bolt.png"}
            alt="illustation"
            width={200}
            height={200}
            className=" w-10 z-30"
          />
          <h3 className="text-lg lg:text-xl font-bold text-start">
            Start Scaling with Ease
          </h3>
          <p className="text-sm lg:text-[18px] text-[#A7ADBE] text-start">
            Implement ready-made assets, run winning ads, and grow your store
            effortlessly.
          </p>
        </div>
      </article>
    </Container>
  );
}

export default HowItWorks;
