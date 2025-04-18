import React, { CSSProperties } from "react";
import Image from "next/image";

import "./styles.css";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  images: string[];
  className?: string;
  icons?: boolean;
}

const Marquee: React.FC<MarqueeProps> = ({ images, className, icons }) => {
  return (
    <div
      className="marquee fadeout-horizontal"
      style={{ "--num-items": images.length } as CSSProperties}
    >
      <div
        className="marquee-track"
        style={
          icons ? ({ "--track-width": "220px" } as CSSProperties) : undefined
        }
      >
        {images.map((src, index) => (
          <div
            key={index}
            className={`marquee-item icon-cards ${icons ? "h-10" : ""}`}
            style={
              {
                "--item-position": index + 1,
                "--item-width": icons ? "40px" : "96px",
                "--item-gap": icons ? "12px" : "32px",
              } as CSSProperties
            }
          >
            <div
              className={cn(
                `w-full h-full object-cover z-0 flex justify-center items-center `,
                className
              )}
            >
              <Image
                src={src}
                alt={`Marquee image ${index + 1}`}
                width={200}
                height={200}
                className="object-fit w-full h-fit"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
