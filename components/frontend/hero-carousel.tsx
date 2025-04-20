"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

const carouselItems = [
	{
		image:
			"https://img.freepik.com/premium-photo/view-modern-automobile-gas-station-with-cars-standing_262398-266.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid&w=740",
		title: "Engineering Excellence for the Oil & Gas Sector",
		subtitle:
			"Delivering top-tier Engineering, Procurement, and Fabrication solutions across Sub-Saharan Africa.",
	},
	{
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB1q_eUrvlUed3W4CNXnkYOC3z1-a17_UETA&s",
		title: "Building a Sustainable Energy Future",
		subtitle:
			"Specializing in Piping, Structural Construction, and Corrosion Protection for the oil and gas industry",
	},
	{
		image:
			"https://img.freepik.com/free-photo/blurred-nightlights-city_23-2149049651.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid&w=740",
		title: "Innovation in Energy & Infrastructure,",
		subtitle:
			"Providing expert solutions in Engineering, Procurement, and Construction with a focus on safety and efficiency.",
	},
];

export default function CustomCarousel() {
	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
	};

	const prevSlide = () => {
		setCurrentSlide(
			(prev) => (prev - 1 + carouselItems.length) % carouselItems.length
		);
	};

	useEffect(() => {
		const timer = setInterval(nextSlide, 5000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div className="relative w-full h-[100vh] bg-black/30  overflow-hidden">
			<div className="absolute inset-0">
				{carouselItems.map((item, index) => (
					<div
						key={index}
						className={`absolute inset-0 transition-opacity duration-1000 ${
							index === currentSlide ? "opacity-100" : "opacity-0"
						}`}
					>
						<Image
							src={item.image}
							alt={`Slide ${index + 1}`}
							width={500}
							height={500}
							className="object-cover w-full h-full"
						/>
						<div className="absolute inset-0 bg-purple-900/50" />
					</div>
				))}
			</div>
			<div className="absolute inset-x-0 top-[70%] -translate-y-1/2 flex flex-col items-center justify-end p-6 text-white">
				<h2 className="text-3xl max-w-96 text-center font-bold mb-2">
					{carouselItems[currentSlide].title}
				</h2>
				<p className="text-xl mb-8 max-w-96 text-center">
					{carouselItems[currentSlide].subtitle}
				</p>
				<Button className="bg-red-700 hover:bg-red-800 text-white mb-6">
					Get Started
				</Button>
				<div className="flex space-x-2 mb-4">
					{carouselItems.map((_, index) => (
						<button
							key={index}
							className={`w-2 h-2 rounded-full transition-all ${
								index === currentSlide ? "bg-white w-4" : "bg-white/50"
							}`}
							onClick={() => setCurrentSlide(index)}
						/>
					))}
				</div>
			</div>

			<button
				onClick={prevSlide}
				className="absolute -left-2 sm:left-4 top-[60%] transform -translate-y-1/2 text-white/75 hover:text-white transition-colors "
				aria-label="Previous slide"
			>
				<ChevronLeft className="w-8 h-8" />
			</button>
			<button
				onClick={nextSlide}
				className="absolute -right-2 sm:right-4  top-[60%] transform -translate-y-1/2 text-white/75 hover:text-white transition-colors"
				aria-label="Next slide"
			>
				<ChevronRight className="w-8 h-8" />
			</button>
		</div>
	);
}
