import Navbar from "@/components/common/navbar";
import type { PropsWithChildren } from "react";

const PublicLayout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
};

export default PublicLayout;
