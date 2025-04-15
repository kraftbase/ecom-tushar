import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@/components/common/container";

function FAQ() {
  return (
    <Container className="relative overflow-visible flex flex-col justify-center items-center max-w-7xl mx-auto py-10 gap-6 ">
      <Accordion type="single" collapsible className="w-2/3 ">
        <AccordionItem
          value="item-1"
          className="relative after:z-20 after:absolute after:inset-[.99px] after:rounded-2xl after:bg-[#00031C]/90 bg-[linear-gradient(235deg,_#15143A_18%,_#4450AC_49%,_#15143A_78%)]"
        >
          <AccordionTrigger className="z-50">
            What is Dropship Mastery?
          </AccordionTrigger>
          <AccordionContent className="relative z-[60]  text-[#CAC9D1]">
            Dropship Mastery is a monthly subscription designed to help you 10X
            your business. It offers access to 100 new winning products each
            month, and premium spy tools worth ₹60,000 to give you a competitive
            advantage in the market.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="relative after:z-20 after:absolute after:inset-[.99px] after:rounded-2xl after:bg-[#00031C]/90 bg-[linear-gradient(235deg,_#15143A_18%,_#4450AC_49%,_#15143A_78%)]"
        >
          <AccordionTrigger className="z-50">
            Is it a one time payment or a subscription?
          </AccordionTrigger>
          <AccordionContent className="relative z-[60]  text-[#CAC9D1]">
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="relative after:z-20 after:absolute after:inset-[.99px] after:rounded-2xl after:bg-[#00031C]/90 bg-[linear-gradient(235deg,_#15143A_18%,_#4450AC_49%,_#15143A_78%)]"
        >
          <AccordionTrigger className="z-50">
            How many winning products are provided monthly? 
          </AccordionTrigger>
          <AccordionContent className="relative z-[60]  text-[#CAC9D1]">
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-4"
          className="relative after:z-20 after:absolute after:inset-[.99px] after:rounded-2xl after:bg-[#00031C]/90 bg-[linear-gradient(235deg,_#15143A_18%,_#4450AC_49%,_#15143A_78%)]"
        >
          <AccordionTrigger className="z-50">
            How will I get access to the spy tools?
          </AccordionTrigger>
          <AccordionContent className="relative z-[60]  text-[#CAC9D1]">
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-5"
          className="relative after:z-20 after:absolute after:inset-[.99px] after:rounded-2xl after:bg-[#00031C]/90 bg-[linear-gradient(235deg,_#15143A_18%,_#4450AC_49%,_#15143A_78%)]"
        >
          <AccordionTrigger className="z-50">
            Can I cancel my subscription at any time?
          </AccordionTrigger>
          <AccordionContent className="relative z-[60]  text-[#CAC9D1]">
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-6"
          className="relative after:z-20 after:absolute after:inset-[.99px] after:rounded-2xl after:bg-[#00031C]/90 bg-[linear-gradient(235deg,_#15143A_18%,_#4450AC_49%,_#15143A_78%)]"
        >
          <AccordionTrigger className="z-50">
            What’s the Refund Policy? 
          </AccordionTrigger>
          <AccordionContent className="relative z-[60]  text-[#CAC9D1]">
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-7"
          className="relative after:z-20 after:absolute after:inset-[.99px] after:rounded-2xl after:bg-[#00031C]/90 bg-[linear-gradient(235deg,_#15143A_18%,_#4450AC_49%,_#15143A_78%)]"
        >
          <AccordionTrigger className="z-50">
            How is customer support managed for tool or live call issues?
          </AccordionTrigger>
          <AccordionContent className="relative z-[60]  text-[#CAC9D1]">
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Container>
  );
}

export default FAQ;
