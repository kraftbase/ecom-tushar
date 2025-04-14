import Container from "@/components/common/container";
import Image from "next/image";

const WeWorkedWith = () => {
    return <Container className="py-20">
        <header className="text-2xl opacity-50  text-center">
            Empowering scale on every ad platform
        </header>
        <main className="mt-10">
            {/* grid */}
            <div className="flex justify-center relative w-fit mx-auto items-center gap-12">
                {/* grid item */}
                <div className="mask-gradient w-1/3  h-full absolute top-0 left-0 " />
                <img src="/assets/companies/logo.svg" />
                <img src="/assets/companies/logo.svg" />
                <img src="/assets/companies/logo.svg" />
                <img src="/assets/companies/logo.svg" />
                <div className="mask-gradient w-1/3 rotate-180 h-full absolute top-0 right-0 " />
            </div>
        </main>
    </Container>
};

export default WeWorkedWith;
