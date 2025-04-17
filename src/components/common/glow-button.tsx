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
  );
};

export default GlowButton;

{
  /* <Button
      className={cn(
        "cursor-pointer relative text-[11px] flex items-center justify-center gap-2  glow-button-background py-[9px] pl-6 pr-6 after:absolute after:inset-0 after:rounded-[8.182px] after:border-[rgba(39,55,207,0.4)] after:border-[0.818px]",
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
          opacity: "70%",
        }}
      />
      {text}
    </Button> */
}
