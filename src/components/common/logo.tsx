import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="#hero">
      <img src="/assets/logo.svg" alt="logo" className="cursor-pointer h-20 " />
    </Link>
  );
};

export default Logo;
