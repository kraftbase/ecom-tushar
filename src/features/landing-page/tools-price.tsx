import Container from "@/components/common/container";
import React from "react";

interface Tool {
  name: string;
  price: string;
  dropship: boolean;
  showBottomBorder?: boolean;
}

interface ToolRowProps {
  tool: Tool;
}

const ToolRow: React.FC<ToolRowProps> = ({ tool }) => {
  return (
    <div>
      <div
        className={`flex items-center justify-between py-4 w-full 
      `}
      >
        {/* Tool Name */}
        <h1 className=" font-medium flex-1 ">{tool.name}</h1>
        {/* Price */}
        <h2 className=" text-center flex-1">{tool.price.toLocaleString()}</h2>
        {/* Dropship Check */}
        <div className="text-center flex-1 flex justify-center items-center">
          {tool.dropship && (
            <span className=" bg-blue-500 text-white size-5 flex justify-center items-center rounded-full p-1">
              ✓
            </span>
          )}
        </div>
      </div>
      {tool.showBottomBorder && (
        <div
          className="w-full h-[1px]"
          style={{
            background:
              "linear-gradient(90deg, rgba(51, 99, 255, 0.00) 0%, #3363FF 50%, rgba(51, 99, 255, 0.00) 100%)",
          }}
        />
      )}
    </div>
  );
};

function ToolsPrice() {
  const tools: Tool[] = [
    { name: "Pipiads", price: "20000", dropship: true, showBottomBorder: true },
    {
      name: "Dinosaur",
      price: "20000",
      dropship: true,
      showBottomBorder: true,
    },
    {
      name: "Shophunter.io",
      price: "20000",
      dropship: true,
      showBottomBorder: true,
    },
    {
      name: "FutureLib",
      price: "20000",
      dropship: true,
      showBottomBorder: true,
    },
    {
      name: "Winning Hunter",
      price: "20000",
      dropship: true,
      showBottomBorder: true,
    },
    {
      name: "Chat GPT+",
      price: "20000",
      dropship: true,
      showBottomBorder: true,
    },
    { name: "Canva", price: "20000", dropship: true, showBottomBorder: true },
    {
      name: "Pacdora",
      price: "100000+",
      dropship: true,
      showBottomBorder: true,
    },
    {
      name: "Runway.ml",
      price: "100000+",
      dropship: true,
      showBottomBorder: true,
    },
    {
      name: "Foreplay.co",
      price: "100000+",
      dropship: true,
      showBottomBorder: true,
    },
  ];

  // Calculate total

  return (
    <Container className="relative overflow-visible flex flex-col justify-center items-center max-w-7xl mx-auto py-12 lg:py-10 gap-6">
      <div className="rounded-2xl p-2 w-full lg:w-2/4 max-w-3xl flex-1 relative after:z-20 after:absolute after:inset-[.99px] after:rounded-2xl after:bg-[#00031C]/90 bg-[linear-gradient(235deg,_#15143A_18%,_#4450AC_49%,_#15143A_78%)]">
        <div
          className="absolute inset-0 rounded-[10.72px] border-[1.072px] border-white/10"
          style={{
            background:
              "linear-gradient(180deg, rgba(47, 40, 74, 0.00) 0%, #312899 75%)",
            filter: "blur(32.16px)",
            zIndex: -1,
            opacity: "50%",
          }}
        />
        <div className="w-full z-50 relative rounded-lg py-6 lg:py-10 px-2 lg:px-12">
          <div
            className={`flex items-center justify-between py-4 w-full 
      `}
          >
            {/* Tool Name */}
            <div className=" font-medium flex-1 ">Tools</div>
            {/* Price */}
            <div className=" text-center flex-1">Price</div>
            {/* Dropship Check */}
            <div className="text-center flex-1 flex justify-center items-center">
              Dropship
            </div>
          </div>
          <div
            className="w-full h-[1px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(51, 99, 255, 0.00) 0%, #3363FF 50%, rgba(51, 99, 255, 0.00) 100%)",
            }}
          />
          {tools.map((tool) => (
            <ToolRow key={tool.name} tool={tool} />
          ))}
          {/* Total */}
          <div className="flex justify-center p-4 text-lg font-bold  mt-2">
            {/* 92,000 */}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ToolsPrice;
