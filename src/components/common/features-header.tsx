import Image from "next/image";
import Container from "./container";
import { cn } from "@/lib/utils";

interface FeaturesHeaderProps {
  mainImage?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  backgroundImage: {
    src: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
  };
  title: {
    text: string;
    className?: string;
  };
  heading: string;
  description: string;
  topContent?: boolean;
  className?: string;
  headingClassName?: string;
  bottomSpacing?: string;
}

const FeaturesHeader = ({
  mainImage,
  backgroundImage,
  title,
  heading,
  description,
  topContent,
  className,
  headingClassName,
  bottomSpacing,
}: FeaturesHeaderProps) => {
  return (
    <Container className="pt-20 pb-10">
      <div className="relative z-10 flex flex-col items-center justify-center">
        {mainImage && (
          <Image
            src={mainImage.src}
            alt={mainImage.alt}
            width={mainImage.width || 716}
            height={mainImage.height || 342}
          />
        )}

        <Image
          src={backgroundImage.src}
          alt={backgroundImage.alt}
          width={backgroundImage.width || 600}
          height={backgroundImage.height || 342}
          className="absolute"
        />
        <div
          className={cn(
            "z-30 flex justify-center items-center flex-col absolute gap-6 bottom-6",
            bottomSpacing
          )}
        >
          <div className="relative w-full flex justify-center items-center title-container">
            <Image
              src="/assets/features/line_left.svg"
              alt="line-left"
              width={400}
              height={200}
              className=" relative top-4 "
            />
            <h1
              className={cn(
                "rounded-[100px] border-[#959EFE]/60 border-[0.2px] py-1 px-7 text-[#959EFE] font-['Poppins'] text-base font-normal leading-6",
                title.className
              )}
            >
              {title.text}
            </h1>
            <Image
              src="/assets/features/line_right.svg"
              alt="line-right"
              width={400}
              height={200}
              className=" relative top-4 "
            />
          </div>
          {topContent && (
            <div className="relative w-40 gap-2 flex justify-start items-center border border-[#1F275F] rounded-full overflow-hidden p-1">
              {[1, 2, 3, 4, 5].map((num) => (
                <Image
                  key={num}
                  src={"/assets/features/icon.png"}
                  alt="icon"
                  width={50}
                  height={50}
                />
              ))}
            </div>
          )}
          <h1 className={cn("text-5xl font-bold ", headingClassName)}>
            {heading}
          </h1>
          <h1 className="text-center text-[#CAC9D1] text-lg font-normal max-w-xl">
            {description}
          </h1>
        </div>
      </div>
    </Container>
  );
};

export default FeaturesHeader;
