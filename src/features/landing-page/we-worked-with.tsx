import Container from "@/components/common/container";
import Marquee from "@/components/Marque/Marque";

const WeWorkedWith = () => {
  return (
    <Container className="py-20">
      <header className="text-[16px] lg:text-[27px] opacity-50  text-center">
        Empowering scale on every ad platform
      </header>
      <main className="mt-10 overflow-hidden">
        {/* grid */}
        <div className="flex justify-center relative w-screen lg:w-fit mx-auto items-center gap-12">
          {/* grid item */}
          <div className="mask-gradient w-1/3  h-full absolute top-0 left-0 z-40" />

          <Marquee
            images={[
              "/assets/companies/logo.svg",
              "/assets/companies/youtube.png",
              "/assets/companies/facebook.png",
              "/assets/companies/linkedin.png",
              "/assets/companies/facebook.png",
              "/assets/companies/facebook.png",
            ]}
          />

          <div className="mask-gradient w-1/3 rotate-180 h-full absolute top-0 right-0 " />
        </div>
      </main>
    </Container>
  );
};

export default WeWorkedWith;
