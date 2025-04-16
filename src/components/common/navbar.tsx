"use client";

import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import Container from "./container";
import Logo from "./logo";
import GlowButton from "./glow-button";

const Navbar = () => {
  const [active, setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container asChild>
      <nav className={cn("absolute h-[5.5rem] flex items-center")}>
        <div className="w-full flex items-center justify-between ">
          <Logo />

          <ul className="hidden lg:flex items-center justify-center text-[14px] px-3 text-foreground border border-white/10 rounded-full bg-navbar-color absolute left-1/2 -translate-x-1/2">
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
            <Link href="#footer">
              <GlowButton text="START FREE TRIAL" />
            </Link>
          </div>

          {/* for mobile */}

          {isOpen ? (
            <img
              src="/assets/home/close.svg"
              alt="hamburger"
              className="block lg:hidden"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <img
              src="/assets/navbar/ham.svg"
              alt="hamburger"
              className="block lg:hidden p-2 rounded-lg border"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>

        {/* <ul className="flex mt-6 lg:hidden flex-col items-center justify-center gap-[8px] leading-[32px] text-[24px] font-[600] text-[#27283599]  px-6  rounded-3xl   bg-transparent font-satoshi">
          {NAVITEMS.map((item, idx) => (
            <li
              className={cn(
                "cursor-pointer py-3.5 px-[12px] rounded-2xl hover:py-1.5 hover:text-black hover:activeMenu transition-all  ",
                active === idx ? " text-black  " : ""
              )}
              key={idx}
            >
              {item.label}
            </li>
          ))}

          <Link href="#footer">
            <Button className="flex text-[14px] font-[500] items-center justify-center py-6 gap-2 gradient-background  mb-4">
              Get Started
              <ChevronRight width={17} />
            </Button>
          </Link>
        </ul> */}
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
