import Container from "@/components/common/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
const HeroSection = () => {
	return (
		<Container className="relative overflow-visible  pt-40">
			<Image
				src="/assets/hero/galaxy-bg.svg"
				alt="hero-section"
				className="w-full h-full absolute top-0 left-0"
				width={1000}
				height={1000}
				fetchPriority="high"
			/>
			<Image
				src="/assets/hero/grid-bg.svg"
				alt="hero-section"
				className="w-full h-fit absolute top-0 left-0"
				fill
				fetchPriority="high"
			/>


			<header className="relative z-10 flex flex-col items-center justify-center">
				<Badge className="text-white text-sm py-2 px-4 bg-[#00031C] mb-5 font-medium">Dropshippers' #1 Tool For Serious Scale <ChevronRight className="w-4 h-4" /></Badge>
				<h1 className="text-white text-[3.25rem] max-w-4xl font-bold text-center -tracking-[0.4px]">
					Find & Scale Winning Products 10x Faster Without&nbsp;

					<span className="background-gradient-text-parent">
						<span className="background-gradient-text">
							Relying on Luck.
						</span>
					</span>
				</h1>
				<p className="text-[#EFEDFD] text-center text-lg max-w-4xl opacity-80 mt-4">
					Gain an unfair advantage over the competition by unlocking the
					industry’s most battle-tested tools
				</p>

				<Button className="button-secondary-background relative my-10   h-[62px] px-8 font-medium">
					<Image src="/assets/hero/button-secondary-dots.svg" alt="arrow-right" fill className="z-0" />
					Get Started
				</Button>
			</header>

			<div className="relative">
				<main className="relative z-10 flex flex-col items-center justify-center p-4 video-gradient-background aspect-[12/6]">

					<div className="flex flex-col items-center justify-center bg-black w-full h-full">
					</div>
				</main>

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
