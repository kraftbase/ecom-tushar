import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@/components/common/container";

function FAQ() {
  const accordionItemClass =
    "relative after:z-20 after:absolute after:inset-[.99px] after:rounded-2xl after:bg-[#00031C]/90 bg-[linear-gradient(235deg,_#15143A_18%,_#4450AC_49%,_#15143A_78%)]";

  return (
    <Container className="relative overflow-visible flex flex-col justify-center items-center max-w-7xl mx-auto py-6 lg:py-10 gap-6 ">
      <Accordion type="single" collapsible className="w-full lg:w-2/3 ">
        <AccordionItem value="item-1" className={accordionItemClass}>
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
        <AccordionItem value="item-2" className={accordionItemClass}>
          <AccordionTrigger className="z-50">
            Is it a one time payment or a subscription?
          </AccordionTrigger>
          <AccordionContent className="relative z-[60]  text-[#CAC9D1]">
            Dropship Mastery is a monthly subscription plan. You’ll be charged
            on recurring basis until you cancel.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className={accordionItemClass}>
          <AccordionTrigger className="z-50">
            How many winning products are provided monthly?
          </AccordionTrigger>
          <AccordionContent className="relative z-[60]  text-[#CAC9D1]">
            Depending on the plan you choose, you’ll receive either 50 or 100
            handpicked winning products each month. These products are chosen
            for their high sales potential, emerging trends, and niche market
            opportunities.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className={accordionItemClass}>
          <AccordionTrigger className="z-50">
            How will I get access to the spy tools?
          </AccordionTrigger>
          <AccordionContent className="relative z-[60]  text-[#CAC9D1]">
            You'll gain access to the spy tools through an exclusive dashboard,
            where all the necessary links and resources will be provided.
            Additionally, you'll receive a detailed email with instructions on
            how to use each tool effectively.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5" className={accordionItemClass}>
          <AccordionTrigger className="z-50">
            Can I cancel my subscription at any time?
          </AccordionTrigger>
          <AccordionContent className="relative z-[60]  text-[#CAC9D1]">
            Yes, all subscription plans offer the flexibility to cancel your
            subscription at any time.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6" className={accordionItemClass}>
          <AccordionTrigger className="z-50">
            What's the Refund Policy?
          </AccordionTrigger>
          <AccordionContent className="relative z-[60]  text-[#CAC9D1]">
            You can cancel your subscription at any time, but please note that
            refunds are not provided for the current billing month. You'll
            retain access to all features until the end of your subscription
            period.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7" className={accordionItemClass}>
          <AccordionTrigger className="z-50">
            How is customer support managed for tool or live call issues?
          </AccordionTrigger>
          <AccordionContent className="relative z-[60]  text-[#CAC9D1]">
            Our dedicated support team is available almost 24/7 on Discord to
            assist you with any issues. We also provide additional support via
            email for any inquiries or troubleshooting needs.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Container>
  );
}

export default FAQ;
