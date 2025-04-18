import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface GreyButtonProps {
  text: string;
  className?: string;
  href: string;
}

const GreyButton = ({ text, className, href }: GreyButtonProps) => {
  return (
    <Link href={href}>
      <Button
        className={cn(
          "cursor-pointer relative z-10 text-white text-[11px] flex items-center justify-center gap-2 py-[9px] pl-6 pr-6 button-secondary-background",
          className
        )}
      >
        <Image
          src="/assets/hero/button-secondary-dots.svg"
          alt="arrow-right"
          fill
          className="z-0"
        />
        <div
          className="absolute inset-1 rounded-[10.72px] border-[1.072px] border-white/90"
          style={{
            background:
              "linear-gradient(180deg, rgba(47, 47, 47, 0.00) 0%, #1A1A1A 75%)",
            filter: "blur(32.16px)",
            zIndex: 20,
            opacity: "90%",
          }}
        />
        <span className="relative z-30">{text}</span>
      </Button>
    </Link>
  );
};

export default GreyButton;
