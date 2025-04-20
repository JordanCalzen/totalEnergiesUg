"use client";
import { ArrowRight, Menu, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";

export default function Header() {
	return (
		<div className="px-2 pt-2 sticky top-0 z-50 w-full">
			<header className=" border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 py-2 rounded-lg ">
				<div className=" flex h-16 items-center justify-between">
					<div className="flex items-center  justify-center gap-2">
						<Link href="/" className=" w-28 flex items-center gap-2 p-3">
							<Image
								src="/logo_totalenergies.png"
								alt=""
								width={300}
								height={300}
								className="w-full h-full object-cover object-center"
							/>
						</Link>
						<p className="leading-7 text-sm text-red-500 font-bold">
							TotalEnergies<span className="block -mt-2">Uganda</span>
						</p>
					</div>

					<nav className="hidden md:flex items-center gap-6">
						<Link
							href="/test"
							className="text-sm font-medium text-black  transition-colors"
						>
							Products & Services
						</Link>
						<Link
							href="#"
							className="text-sm font-medium text-black  transition-colors"
						>
							TotalEnergies in Uganda MS & EP
						</Link>
						<Link
							href="#"
							className="text-sm font-medium text-black  transition-colors"
						>
							Projects
						</Link>
						<Link
							href="#"
							className="text-sm font-medium text-black  transition-colors"
						>
							Sustainability
						</Link>
						<Link
							href="#"
							className="text-sm font-medium text-black hover:text-red-600"
						>
							Careers
						</Link>

						<Button
							asChild
							className=" bg-transparent border border-red-600 hover:bg-red-700 text-black-800 hover:text-white font-medium py-3 px-2 rounded-lg flex items-center gap-2"
						>
							<Link href="/login">
								Login
								<ArrowRight className="w-5 h-5 -rotate-45" />
							</Link>
						</Button>
					</nav>
					<Sheet>
						<SheetTrigger asChild>
							<Button
								variant="ghost"
								className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
							>
								<Menu className="h-6 w-6" />
								<span className="sr-only">Toggle Menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="left" className="pr-0">
							<nav className="grid gap-6 px-2 py-6">
								<Link
									href="/browse"
									className="hover:text-foreground/80"
								></Link>
								<Link href="/sell" className="hover:text-foreground/80">
									Services
								</Link>
								<Link href="/governance" className="hover:text-foreground/80">
									Reviews
								</Link>
								<Link
									href="/profile"
									className="hover:text-foreground/80"
								></Link>
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</header>
		</div>
	);
}
