import Container from "@/components/common/container";
import Particles from "@/components/common/particles";
import Typewriter from "@/components/common/typewriter";
import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const HeroSection = () => {
  return (
    <Container
      className="relative overflow-x-clip pt-20 lg:pt-36"
      aria-labelledby="hero-title"
    >
      <div className="w-full h-full absolute top-0 left-0" aria-hidden>
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={150}
          particleSpread={10}
          speed={0.3}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={true}
        />
      </div>

      <Image
        src="/assets/hero/grid-bg.svg"
        alt="hero-section"
        className="hidden md:block w-full h-fit absolute top-0 left-0 "
        fill
        fetchPriority="high"
        aria-hidden
      />
      <div
        className="mask-gradient w-1/5 2xl:w-2/5 rotate-180 h-full absolute top-0 right-0 "
        aria-hidden
      />
      <div
        className="mask-gradient w-1/5 2xl:w-2/5  h-full absolute top-0 left-0 "
        aria-hidden
      />
      <div className="w-full overflow-hidden" aria-hidden>
        <Image
          src="/assets/hero/grid-bg.svg"
          alt="hero-section"
          className="md:hidden w-[30rem] scale-150 h-fit absolute bottom-24 left-0"
          width={1500}
          height={1500}
          fetchPriority="high"
        />
      </div>

      <header className="relative z-10 flex flex-col items-center justify-center">
        <Badge className="text-white text-sm py-3 px-5 mb-5 font-medium  z-10 rounded-[100px] relative after:z-20 after:absolute after:inset-[.5px] after:rounded-[100px] after:bg-[#00031C] after:shadow-[inset_0px_-7px_9px_0px_rgba(255,255,255,0.05)] bg-[linear-gradient(235deg,_#15143A_18%,_#4450AC_49%,_#15143A_78%)]  bg-[length:150%_150%] animate-[gradientShift_4s_linear_infinite]  ">
          <h1 className="z-30 flex justify-center items-center gap-4 font-satoshi">
            Dropshippers' #1 Tool For Serious Scale{" "}
            <ChevronRight className="w-4 h-4" />
          </h1>
        </Badge>
        <h1 className="text-white text-[26px] lg:text-[3.25rem]  lg:max-w-5xl font-bold text-center -tracking-[0.4px] ">
          <span>
            Find & Scale Winning <br className="md:hidden" />
          </span>{" "}
          <span>
            Products 10x Faster <br className="md:hidden" />
          </span>
          <span className="text-nowrap">
            {" "}
            Without&nbsp;
            <span className="background-gradient-text-parent">
              {/* <span className="background-gradient-text">Relying on Luck.</span> */}
              <Typewriter
                text={["Relying on Luck.", "Relying on Luck."]}
                speed={70}
                className="background-gradient-text"
                waitTime={1500}
                deleteSpeed={40}
                // cursorChar={"_"}
              />
            </span>
          </span>
        </h1>
        <p className="text-[#efedfd]/70 font-normal font-satoshi text-center  lg:text-lg max-w-lg  lg:max-w-4xl opacity-80 mt-4">
          Gain an unfair advantage over the competition by unlocking the
          industry's most battle-tested tools
        </p>

        <Link
          className="cursor-pointer button-secondary-background relative my-10   h-[62px] px-8 font-medium flex justify-center items-center "
          href={"/#pricing"}
        >
          <Image
            src="/assets/hero/button-secondary-dots.svg"
            alt="arrow-right"
            fill
            className="z-0"
          />
          Get Access
        </Link>
      </header>

      <div className="relative flex flex-col items-center justify-center">
        <main className="relative z-10 flex flex-col items-center justify-center p-1 lg:p-4 rounded-sm lg:rounded-[14px] video-gradient-background aspect-[12/6] w-full lg:w-[90%]">
          <div className="flex flex-col items-center justify-center rounded-sm  w-full h-fit object-fit overflow-hidden bg-black relative">
            {/* Video Player */}
            <video
              className="w-full h-full object-fit hero-video z-40 "
              autoPlay
              playsInline
              muted // Controlled by state
              loop
              preload="auto"
            >
              <source src="/assets/hero/hero_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </main>

        <Image
          src="/assets/hero/glow-bg.png"
          alt="hero-section"
          className="w-full h-[150%] absolute z-0 -top-1/4 left-0"
          width={1000}
          height={1000}
        />
        <Image
          src="/assets/hero/glow-bg.png"
          alt="hero-section"
          className="w-full h-[120%] absolute z-0 -top-1/4 left-0"
          width={1000}
          height={1000}
        />
      </div>
    </Container>
  );
};

export default HeroSection;
