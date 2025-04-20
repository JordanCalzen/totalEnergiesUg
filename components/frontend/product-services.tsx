import {
	Droplet,
	Leaf,
	Flame,
	Sun,
	Car,
	CreditCard,
	Globe,
	Plane,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ProductsGrid() {
	const products = [
		{
			title: "Lubricants",
			description: "High-performance oils and greases for all applications",
			icon: <Droplet className="h-10 w-10 text-red-600" />,
			href: "#lubricants",
			bgColor: "bg-blue-50",
			borderColor: "border-blue-100",
			hoverBg: "group-hover:bg-blue-100/50",
			iconBg: "bg-blue-100/70",
		},
		{
			title: "Excellium Energy",
			description: "Premium fuels for enhanced engine performance",
			icon: <Leaf className="h-10 w-10 text-red-600" />,
			href: "#excellium",
			bgColor: "bg-emerald-50",
			borderColor: "border-emerald-100",
			hoverBg: "group-hover:bg-emerald-100/50",
			iconBg: "bg-emerald-100/70",
		},
		{
			title: "TotalEnergies Gas",
			description: "Clean and efficient gas solutions for homes and businesses",
			icon: <Flame className="h-10 w-10 text-red-600" />,
			href: "#gas",
			bgColor: "bg-amber-50",
			borderColor: "border-amber-100",
			hoverBg: "group-hover:bg-amber-100/50",
			iconBg: "bg-amber-100/70",
		},
		{
			title: "Sunshine Solar",
			description: "Renewable energy solutions for a sustainable future",
			icon: <Sun className="h-10 w-10 text-red-600" />,
			href: "#solar",
			bgColor: "bg-yellow-50",
			borderColor: "border-yellow-100",
			hoverBg: "group-hover:bg-yellow-100/50",
			iconBg: "bg-yellow-100/70",
		},
		{
			title: "Car Care Products",
			description: "Complete range of automotive maintenance products",
			icon: <Car className="h-10 w-10 text-red-600" />,
			href: "#car-care",
			bgColor: "bg-indigo-50",
			borderColor: "border-indigo-100",
			hoverBg: "group-hover:bg-indigo-100/50",
			iconBg: "bg-indigo-100/70",
		},
		{
			title: "TotalEnergies Card",
			description: "Convenient payment solutions with exclusive benefits",
			icon: <CreditCard className="h-10 w-10 text-red-600" />,
			href: "#card",
			bgColor: "bg-purple-50",
			borderColor: "border-purple-100",
			hoverBg: "group-hover:bg-purple-100/50",
			iconBg: "bg-purple-100/70",
		},
		{
			title: "Professional",
			description: "Specialized solutions for business and industry",
			icon: <Globe className="h-10 w-10 text-red-600" />,
			href: "#professional",
			bgColor: "bg-cyan-50",
			borderColor: "border-cyan-100",
			hoverBg: "group-hover:bg-cyan-100/50",
			iconBg: "bg-cyan-100/70",
		},
		{
			title: "Aviation",
			description: "High-quality fuels and services for the aviation sector",
			icon: <Plane className="h-10 w-10 text-red-600" />,
			href: "#aviation",
			bgColor: "bg-sky-50",
			borderColor: "border-sky-100",
			hoverBg: "group-hover:bg-sky-100/50",
			iconBg: "bg-sky-100/70",
		},
	];

	return (
		<section className="py-16 px-2 md:px-6 bg-gradient-to-b from-white to-gray-50">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold text-gray-800 mb-4">
						Our Products And Services
					</h2>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						Discover our comprehensive range of energy solutions designed to
						meet your needs with quality and sustainability in mind.
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{products.map((product, index) => (
						<Link
							href={product.href}
							key={index}
							className={cn(
								"group rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col h-full border",
								product.bgColor,
								product.borderColor,
								product.hoverBg
							)}
						>
							<div
								className={cn(
									"p-3 rounded-lg w-fit mb-4 transition-colors duration-300",
									product.iconBg
								)}
							>
								{product.icon}
							</div>
							<h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-red-600 transition-colors duration-300">
								{product.title}
							</h3>
							<p className="text-gray-600 mt-1 text-sm flex-grow">
								{product.description}
							</p>
							<div className="mt-4 text-red-600 font-medium text-sm flex items-center">
								Learn more
								<svg
									className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 5l7 7-7 7"
									/>
								</svg>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
