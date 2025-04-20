import Footer from "@/components/frontend/Footer";
import Header from "@/components/frontend/Header";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import React, { ReactNode } from "react";

export default function FrontendLayout({ children }: { children: ReactNode }) {
	return (
		<div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-100/70 to-emerald-100/70">
			<Header />
			<Breadcrumb className="mb-6" />
			{children}
			<Footer />
		</div>
	);
}
