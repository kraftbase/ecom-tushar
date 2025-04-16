import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface GlowButtonProps {
  text: string;
  className?: string;
}

const GlowButton = ({ text, className }: GlowButtonProps) => {
  return (
    <Button
      className={cn(
        "cursor-pointer relative text-[11px] flex items-center justify-center gap-2  glow-button-background py-[9px] pl-6 pr-6 after:absolute after:inset-1 after:rounded-[8.182px] after:border-[rgba(39,55,207,0.4)] after:border-[0.818px]",
        className
      )}
    >
      <div
        className="absolute inset-0 rounded-[10.72px] border-[1.072px] border-white/10"
        style={{
          background:
            "linear-gradient(180deg, rgba(47, 40, 74, 0.00) 0%, #312899 75%)",
          filter: "blur(32.16px)",
          zIndex: -1,
          opacity: "70%",
        }}
      />
      {text}
    </Button>
  );
};

export default GlowButton;
