import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
	return (
		<SidebarProvider>
			<div className="min-h-screen w-full">
				<AppSidebar />
				<div className="md:ml-[220px] lg:ml-[250px]">
					{/* <Navbar /> */}
					<div className="p-6">{children}</div>
				</div>
			</div>
		</SidebarProvider>
	);
}
