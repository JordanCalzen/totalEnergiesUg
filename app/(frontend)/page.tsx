import Cta from "@/components/frontend/cta-sectionV1";
import Footer from "@/components/frontend/Footer";
import Header from "@/components/frontend/Header";
import CustomCarousel from "@/components/frontend/hero-carousel";
import ProductsGrid from "@/components/frontend/product-services";
import ProductsCarousel from "@/components/frontend/product-services";
import TestimonialCarousel from "@/components/frontend/Testimonial";
import { Testimonials } from "@/components/Testimonial";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonial";
// import CustomCarousel from "@/components/frontend/hero-carousel";
import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import {
	ArrowRight,
	ChevronRight,
	Globe,
	Lightbulb,
	Star,
	Wind,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col">
			<main className="-mt-40">
				<CustomCarousel />
			</main>
			<ProductsGrid />
			{/* <section className="w-full py-12 md:py-20 lg:py-22  bg-background">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<div className="inline-block rounded-lg  px-3 py-1 text-sm  bg-green-700 text-white">
								Our Projects
							</div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
								Featured Success Stories
							</h2>
							<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Explore some of our most impactful renewable energy projects
								that have helped our clients achieve their sustainability goals.
							</p>
						</div>
					</div>
					<div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
						<div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-lg">
							<Image
								src="https://img.freepik.com/free-photo/solar-panels-roof-solar-cell_335224-1324.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid"
								width={400}
								height={300}
								alt="Commercial solar installation"
								className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
							/>
							<div className="p-6">
								<h3 className="text-xl font-bold">Commercial Solar Array</h3>
								<p className="mt-2 text-muted-foreground">
									A 500kW solar installation for a manufacturing facility,
									reducing their carbon footprint by 40%.
								</p>
								<Link
									href="#"
									className="mt-4 inline-flex text-green-700 items-center text-sm font-medium"
								>
									View Case Study
									<ChevronRight className="ml-1 h-4 w-4" />
								</Link>
							</div>
						</div>
						<div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-lg">
							<Image
								src="https://img.freepik.com/free-photo/landscape-with-windmills_15879-608.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid"
								width={400}
								height={300}
								alt="Community wind farm"
								className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
							/>
							<div className="p-6">
								<h3 className="text-xl font-bold">Community Wind Farm</h3>
								<p className="mt-2 text-muted-foreground">
									A community-owned wind farm providing clean energy to over
									5,000 homes in rural areas.
								</p>
								<Link
									href="#"
									className="mt-4 inline-flex text-green-700 items-center text-sm font-medium "
								>
									View Case Study
									<ChevronRight className="ml-1 h-4 w-4" />
								</Link>
							</div>
						</div>
						<div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-lg">
							<Image
								src="https://img.freepik.com/premium-photo/hand-male-holding-light-bulb-copy-space-energy_43284-1549.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid"
								width={400}
								height={300}
								alt="Smart energy management system"
								className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
							/>
							<div className="p-6">
								<h3 className="text-xl font-bold">Smart Energy Management</h3>
								<p className="mt-2 text-muted-foreground">
									Implementation of an AI-driven energy management system for a
									tech campus, reducing energy use by 35%.
								</p>
								<Link
									href="#"
									className="mt-4 inline-flex text-green-700 items-center text-sm font-medium"
								>
									View Case Study
									<ChevronRight className="ml-1 h-4 w-4" />
								</Link>
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<Button
							asChild
							variant="outline"
							size="lg"
							className="bg-green-700 hover:bg-green-800 text-white hover:text-white"
						>
							<Link href="#">View All Projects</Link>
						</Button>
					</div>
				</div>
			</section>
			<section id="blog" className="w-full py-12 md:py-20 lg:py-22  bg-muted">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<div className="inline-block rounded-lg px-3 py-1 text-sm  bg-green-700 text-white">
								Our Blog
							</div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
								Latest Insights
							</h2>
							<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Stay updated with the latest news, trends, and insights in the
								renewable energy industry.
							</p>
						</div>
					</div>
					<div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
						<div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-lg">
							<Image
								src="https://img.freepik.com/premium-photo/side-view-man-using-mobile-phone_1048944-25231714.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid"
								width={400}
								height={200}
								alt="Solar panel innovation"
								className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
							/>
							<div className="p-6">
								<div className="text-sm text-muted-foreground">
									March 15, 2023
								</div>
								<h3 className="mt-2 text-xl font-bold">
									The Future of Solar Panel Technology
								</h3>
								<p className="mt-2 text-muted-foreground">
									Exploring the latest innovations in solar panel efficiency and
									what it means for renewable energy adoption.
								</p>
								<Link
									href="#"
									className="mt-4 inline-flex items-center text-sm font-medium text-green-700"
								>
									Read More
									<ChevronRight className="ml-1 h-4 w-4" />
								</Link>
							</div>
						</div>
						<div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-lg">
							<Image
								src="https://img.freepik.com/premium-photo/close-up-hand-holding-christmas-decoration-against-blue-background_1048944-17196200.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid"
								width={400}
								height={200}
								alt="Energy policy changes"
								className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
							/>
							<div className="p-6">
								<div className="text-sm text-muted-foreground">
									February 28, 2023
								</div>
								<h3 className="mt-2 text-xl font-bold">
									Policy Changes Affecting Renewable Energy
								</h3>
								<p className="mt-2 text-muted-foreground">
									An analysis of recent policy changes and how they impact the
									renewable energy landscape.
								</p>
								<Link
									href="#"
									className="mt-4 inline-flex items-center text-sm font-medium text-green-700"
								>
									Read More
									<ChevronRight className="ml-1 h-4 w-4" />
								</Link>
							</div>
						</div>
						<div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-lg">
							<Image
								src="https://img.freepik.com/free-photo/close-up-man-writing-notebook_23-2148894050.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid"
								width={400}
								height={200}
								alt="Business sustainability"
								className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
							/>
							<div className="p-6">
								<div className="text-sm text-muted-foreground">
									January 10, 2023
								</div>
								<h3 className="mt-2 text-xl font-bold">
									Business Benefits of Renewable Energy
								</h3>
								<p className="mt-2 text-muted-foreground">
									How businesses are gaining competitive advantages through
									renewable energy investments.
								</p>
								<Link
									href="#"
									className="mt-4 inline-flex items-center text-sm font-medium text-green-700"
								>
									Read More
									<ChevronRight className="ml-1 h-4 w-4" />
								</Link>
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<Button asChild variant="outline" size="lg">
							<Link
								href="#"
								className="bg-green-700 hover:bg-green-800 text-white hover:text-white"
							>
								View All Articles
							</Link>
						</Button>
					</div>
				</div>
			</section> */}

			<section className=" px-2 md:px-6 bg-gradient-to-b from-gray-50 to-gray-100">
				<div className="max-w-7xl mx-auto">
					<div className="text-center ">
						<h2 className="text-4xl font-bold text-gray-800 mb-4">
							Our Executive Team
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Meet the visionary leaders driving innovation, integrity, and
							excellence at TotalEnergies Uganda.
						</p>
					</div>
					<Testimonials />
				</div>
				<Cta />
				<TestimonialCarousel />
			</section>
		</div>
	);
}
