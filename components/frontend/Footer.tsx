import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Facebook,
	Instagram,
	Linkedin,
	MapPin,
	Phone,
	Twitter,
	X,
	Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="w-full border-t bg-white py-12 md:py-16 lg:py-20">
			<div className="container px-4 md:px-6">
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
					<div className="space-y-4">
						<Image
							src="/logo_totalenergies.png"
							alt="TotalEnergies Uganda Logo"
							width={180}
							height={40}
							className="h-10 w-auto"
						/>
						<p className="text-sm text-gray-500">
							Powering progress with cleaner, smarter energy solutions in
							Uganda.
						</p>
						<div className="flex gap-4">
							<Link href="#" className="text-gray-500 hover:text-gray-900">
								<Facebook className="h-5 w-5" />
								<span className="sr-only">Facebook</span>
							</Link>
							<Link href="#" className="text-gray-500 hover:text-gray-900">
								<Twitter className="h-5 w-5" />
								<span className="sr-only">Twitter</span>
							</Link>
							<Link href="#" className="text-gray-500 hover:text-gray-900">
								<Instagram className="h-5 w-5" />
								<span className="sr-only">Instagram</span>
							</Link>
							<Link href="#" className="text-gray-500 hover:text-gray-900">
								<Linkedin className="h-5 w-5" />
								<span className="sr-only">LinkedIn</span>
							</Link>
						</div>
					</div>
					<div className="space-y-4">
						<h3 className="text-lg font-medium">Solutions</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link href="#" className="text-gray-500 hover:text-gray-900">
									Solar Energy
								</Link>
							</li>
							<li>
								<Link href="#" className="text-gray-500 hover:text-gray-900">
									Clean Fuels
								</Link>
							</li>
							<li>
								<Link href="#" className="text-gray-500 hover:text-gray-900">
									Hybrid Solutions
								</Link>
							</li>
							<li>
								<Link href="#" className="text-gray-500 hover:text-gray-900">
									Commercial Solutions
								</Link>
							</li>
							<li>
								<Link href="#" className="text-gray-500 hover:text-gray-900">
									Rural Electrification
								</Link>
							</li>
						</ul>
					</div>
					<div className="space-y-4">
						<h3 className="text-lg font-medium">Company</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link href="#" className="text-gray-500 hover:text-gray-900">
									About Us
								</Link>
							</li>
							<li>
								<Link href="#" className="text-gray-500 hover:text-gray-900">
									Sustainability
								</Link>
							</li>
							<li>
								<Link href="#" className="text-gray-500 hover:text-gray-900">
									Careers
								</Link>
							</li>
							<li>
								<Link href="#" className="text-gray-500 hover:text-gray-900">
									News & Blog
								</Link>
							</li>
							<li>
								<Link href="#" className="text-gray-500 hover:text-gray-900">
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<div className="space-y-4">
						<h3 className="text-lg font-medium">Contact Us</h3>
						<ul className="space-y-2 text-sm">
							<li className="flex items-start gap-2">
								<MapPin className="h-5 w-5 text-red-600 mt-0.5" />
								<span className="text-gray-500">
									Plot 4, Seventh Street, Industrial Area, Kampala, Uganda
								</span>
							</li>
							<li className="flex items-center gap-2">
								<Phone className="h-5 w-5 text-red-600" />

								<span className="text-gray-500">+256 414 425 000</span>
							</li>
							<li className="flex items-center gap-2">
								<X className="h-5 w-5 text-red-600" />
								<span className="text-gray-500">
									info.uganda@totalenergies.com
								</span>
							</li>
						</ul>
					</div>
				</div>
				<div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
					<p className="text-xs text-gray-500">
						&copy; {new Date().getFullYear()} TotalEnergies Uganda. All rights
						reserved.
					</p>
					<div className="flex gap-4 mt-4 md:mt-0">
						<Link
							href="#"
							className="text-xs text-gray-500 hover:text-gray-900"
						>
							Privacy Policy
						</Link>
						<Link
							href="#"
							className="text-xs text-gray-500 hover:text-gray-900"
						>
							Terms of Service
						</Link>
						<Link
							href="#"
							className="text-xs text-gray-500 hover:text-gray-900"
						>
							Cookie Policy
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
