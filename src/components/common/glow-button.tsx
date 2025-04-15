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
        "relative text-[11px] flex items-center justify-center gap-2 overflow-hidden glow-button-background py-[9px] pl-6 pr-6 after:absolute after:inset-0 after:rounded-[8.182px] after:border-[rgba(39,55,207,0.4)] after:border-[0.818px]",
        className
      )}
    >
      {text}
    </Button>
  );
};

export default GlowButton;
