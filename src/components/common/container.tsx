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
          "container-main w-full mx-auto px-2 md:px-8 xl:px-18 max-w-[95rem] relative	  ",
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
