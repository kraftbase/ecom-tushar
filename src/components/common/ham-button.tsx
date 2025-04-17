import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface HamButtonProps {
  className?: string;
  onClick?: () => void;
}

const HamButton = ({ className, onClick }: HamButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "cursor-pointer relative z-10 text-white flex items-center justify-center p-2 w-10 h-10 after:absolute after:inset-[1px] after:rounded-[8.182px] after:bg-[linear-gradient(180deg,rgba(0,0,0,0)_-40.91%,#402788_132.95%)] after:border after:border-[#6d6cff] after:-z-10 after:shadow-[0px_8.182px_24.545px_0px_rgba(73,123,255,0.7)_inset]",
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
      <img src="/assets/navbar/ham.svg" alt="hamburger" className="w-6 h-6" />
    </Button>
  );
};

export default HamButton;
