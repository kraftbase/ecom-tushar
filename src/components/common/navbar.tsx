"use client";

import { cn } from "@/lib/utils";

import Link from "next/link";
import { useState } from "react";

import Container from "./container";
import Logo from "./logo";
import GlowButton from "./glow-button";
import HamButton from "./ham-button";
import { AnimatePresence, motion } from "motion/react";

const Navbar = () => {
  const [active, setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container asChild>
      <nav className={cn("absolute flex items-center h-auto lg:h-[5.5rem]")}>
        <div className="w-full flex items-center justify-between ">
          <Logo />

          <ul className="hidden lg:flex items-center justify-center text-[14px] px-4 text-foreground border border-white/10 rounded-full bg-navbar-color absolute left-1/2 -translate-x-1/2">
            {NAVITEMS.map((item, idx) => (
              <Link
                href={item && item.link}
                key={idx}
                onClick={() => setActive(idx)}
              >
                <li
                  className={cn(
                    "cursor-pointer py-3 capitalize px-[12px] rounded-2xl hover:py-1.5  hover:activeMenu transition-all text-white/90  ",
                    active === idx ? "active   py-1.5" : ""
                  )}
                >
                  {item.label}
                </li>
              </Link>
            ))}
          </ul>

          <div className="hidden lg:flex justify-center items-center gap-6">
            <Link href="/login" className="text-sm font-medium">
              Login
            </Link>

            <GlowButton text="START FREE TRIAL" href="/#pricing" />
          </div>
        </div>
        {/* for mobile */}
        <div className="relative lg:hidden">
          <HamButton
            isOpen={isOpen}
            onClick={() => setIsOpen((p) => !p)}
            className="z-30"
          />

          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "70%" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="
          fixed
          top-0
          left-0
          right-0
          overflow-hidden
          bg-[#00031c]
          flex
          flex-col
          z-40
        "
              >
                <div className="flex items-center justify-between px-3 md:px-8 ">
                  <Logo />
                  <HamButton isOpen={true} onClick={() => setIsOpen(false)} />
                </div>

                <ul className="flex-1 overflow-y-auto flex flex-col items-center justify-center space-y-8 px-6 text-lg text-white">
                  {NAVITEMS.map((item, idx) => (
                    <li
                      key={idx}
                      onClick={() => {
                        setActive(idx);
                        setIsOpen(false);
                      }}
                      className={cn(
                        "cursor-pointer transition-colors hover:text-blue-400",
                        active === idx && "text-blue-300"
                      )}
                    >
                      {item.label}
                    </li>
                  ))}
                </ul>

                <div className="px-6 py-4" onClick={() => setIsOpen(false)}>
                  <GlowButton
                    text="START FREE TRIAL"
                    href="/#pricing"
                    className="w-full py-6"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="border-background-gradient absolute bottom-0 left-0 w-full h-px" />
      </nav>
    </Container>
  );
};

//background: linear-gradient(180deg, #FCFCFD 20.24%, rgba(252, 252, 253, 0.5) 135.17%); backdrop-filter: blur(60px)

export default Navbar;

const NAVITEMS = [
  {
    label: "Product",
    link: "#product",
  },
  {
    label: "Pricing",
    link: "#pricing",
  },
  {
    label: "Company",
    link: "#company",
  },
  {
    label: "Blog",
    link: "#blog",
  },
  {
    label: "Changelog",
    link: "#changelog",
  },
];
