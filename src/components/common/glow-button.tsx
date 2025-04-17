import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface GlowButtonProps {
  text: string;
  className?: string;
  href: string;
}

const GlowButton = ({ text, className, href }: GlowButtonProps) => {
  return (
    <Link href={href}>
      <Button
        className={cn(
          "cursor-pointer relative z-10 text-white text-[11px] flex items-center justify-center gap-2 py-[9px] pl-6 pr-6 after:absolute after:inset-[1px] after:rounded-[8.182px] after:bg-[linear-gradient(180deg,rgba(0,0,0,0)_-40.91%,#402788_132.95%)] after:border after:border-[#6d6cff] after:-z-10 after:shadow-[0px_8.182px_24.545px_0px_rgba(73,123,255,0.7)_inset]",
          className
        )}
      >
        <div
          className="absolute inset-1 rounded-[10.72px] border-[1.072px] border-white/90"
          style={{
            background:
              "linear-gradient(180deg, rgba(47, 40, 74, 0.00) 0%, #312899 75%)",
            filter: "blur(32.16px)",
            zIndex: 20,
            opacity: "90%",
          }}
        />
        {text}
      </Button>
    </Link>
  );
};

export default GlowButton;
