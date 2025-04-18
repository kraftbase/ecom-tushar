import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
  asChild?: boolean;
  id?: string;
  overflowHidden?: boolean;
};

const Container = React.forwardRef<HTMLElement, Props>(
  (
    { className, id, asChild = false, overflowHidden = true, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "section";
    return (
      <Comp
        id={id}
        className={cn(
          "container-main w-screen lg:w-full mx-auto px-3 md:px-8 xl:px-18  lg:max-w-[95rem] 2xl:max-w-[100rem] relative	  ",
          overflowHidden ? "overflow-x-hidden" : "",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Container.displayName = "Container";

export default Container;
