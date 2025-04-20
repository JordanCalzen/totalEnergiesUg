"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus } from "lucide-react";

type Testimonial = {
	id: number;
	company: string;
	text: string;
	author: {
		name: string;
		role: string;
		avatar: string;
	};
	rating: number;
};

export default function TestimonialCarousel() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);

	const testimonials: Testimonial[] = [
		{
			id: 1,
			company: "TotalEnergies Uganda",
			text: "Working with this team was an absolute game-changer. Their creativity, attention to detail, and stellar communication brought our vision to life beyond expectations. Highly recommend!",
			author: {
				name: "Emily R",
				role: "Creative Director",
				avatar:
					"https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid&w=740",
			},
			rating: 5,
		},
		{
			id: 2,
			company: "TotalEnergies Uganda",
			text: "The level of professionalism and expertise exceeded our expectations. They delivered a solution that perfectly aligned with our brand while improving functionality.",
			author: {
				name: "Michael T",
				role: "Product Manager",
				avatar:
					"https://img.freepik.com/free-photo/handsome-adult-male-posing_23-2148729713.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid&w=740",
			},
			rating: 5,
		},
		{
			id: 3,
			company: "TotalEnergies Uganda",
			text: "Exceptional service from start to finish. Their team took the time to understand our unique needs and delivered a custom solution that transformed our online presence.",
			author: {
				name: "Sarah K",
				role: "Marketing Director",
				avatar:
					"https://img.freepik.com/premium-photo/african-man-smiling-happiness-studio-portrait_53876-38503.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid&w=740",
			},
			rating: 5,
		},
	];

	const nextSlide = () => {
		if (!isAnimating) {
			setIsAnimating(true);
			setActiveIndex((prev) =>
				prev === testimonials.length - 1 ? 0 : prev + 1
			);
			setTimeout(() => setIsAnimating(false), 500);
		}
	};

	const prevSlide = () => {
		if (!isAnimating) {
			setIsAnimating(true);
			setActiveIndex((prev) =>
				prev === 0 ? testimonials.length - 1 : prev - 1
			);
			setTimeout(() => setIsAnimating(false), 500);
		}
	};

	useEffect(() => {
		const interval = setInterval(() => {
			nextSlide();
		}, 8000);
		return () => clearInterval(interval);
	}, [activeIndex]);

	return (
		<div className="w-full my-8 rounded-3xl bg-white text-gray-900 py-16 px-4 md:px-8">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl font-bold mb-12 text-center">
					What Our <span className="text-red-600">Clients</span> Say
				</h2>

				<div className="grid md:grid-cols-5 gap-8 relative">
					{/* Left side - Rating and summary */}
					<div className="md:col-span-2 flex flex-col justify-center items-center md:items-start space-y-6">
						<div className="text-center md:text-left">
							<div className="text-6xl font-bold text-red-600">4.9</div>
							<div className="flex mt-2 mb-1">
								{[...Array(5)].map((_, i) => (
									<Star
										key={i}
										className="w-5 h-5 fill-yellow-400 text-yellow-400"
									/>
								))}
							</div>
							<p className="text-sm text-gray-500">(50+ Reviews)</p>
						</div>

						<div className="mt-8">
							<p className="text-lg font-medium mb-4">
								Customer experiences that{" "}
								<span className="text-red-600">speak</span> for themselves
							</p>
							{/* <div className="flex -space-x-2">
								{[...Array(4)].map((_, i) => (
									<div
										key={i}
										className="w-8 h-8 rounded-full border-2 border-white overflow-hidden"
									>
										<Image
											src={`https://img.freepik.com/free-photo/medium-shot-woman-relaxing-home_23-2150307065.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid&w=740`}
											alt={`Customer ${i + 1}`}
											width={32}
											height={32}
											className="object-cover"
										/>
									</div>
								))}
							</div> */}
							<AvatarGroup1 />
						</div>
					</div>

					{/* Right side - Testimonial carousel */}
					<div className="md:col-span-3 bg-gray-100 rounded-xl p-6 md:p-8 relative shadow-md">
						<div className="absolute top-6 left-8">
							<p className="font-semibold text-red-600">
								{testimonials[activeIndex].company}
							</p>
							<div className="flex mt-1">
								{[...Array(testimonials[activeIndex].rating)].map((_, i) => (
									<Star
										key={i}
										className="w-4 h-4 fill-yellow-400 text-yellow-400"
									/>
								))}
							</div>
						</div>

						<div className="mt-12 min-h-[120px]">
							<div
								className={cn(
									"transition-opacity duration-500",
									isAnimating ? "opacity-0" : "opacity-100"
								)}
							>
								<p className="text-lg">{testimonials[activeIndex].text}</p>
							</div>
						</div>

						<div className="mt-8 flex items-center justify-between">
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 rounded-full overflow-hidden">
									<Image
										src={
											testimonials[activeIndex].author.avatar ||
											"/placeholder.svg"
										}
										alt={testimonials[activeIndex].author.name}
										width={40}
										height={40}
										className="object-cover"
									/>
								</div>
								<div>
									<p className="font-medium">
										{testimonials[activeIndex].author.name}
									</p>
									<p className="text-sm text-gray-500">
										{testimonials[activeIndex].author.role}
									</p>
								</div>
							</div>

							<div className="flex gap-2">
								<button
									onClick={prevSlide}
									className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
									aria-label="Previous testimonial"
								>
									<ChevronLeft className="w-5 h-5 text-gray-700" />
								</button>
								<button
									onClick={nextSlide}
									className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-500 transition-colors"
									aria-label="Next testimonial"
								>
									<ChevronRight className="w-5 h-5 text-white" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function AvatarGroup1() {
	return (
		<div className=" flex items-center">
			<div className="flex -space-x-3">
				<Avatar className="border-2  w-10 h-10">
					<AvatarImage
						src="https://img.freepik.com/free-photo/portrait-smiling-young-businesswoman-standing-with-her-arm-crossed-against-gray-wall_23-2147943827.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid"
						alt="Avatar"
						width={150}
						height={150}
						className="w-full h-full object-cover"
					/>
					<AvatarFallback>AC</AvatarFallback>
				</Avatar>
				<Avatar className="border-2  w-10 h-10">
					<AvatarImage
						src="https://img.freepik.com/free-photo/people-showing-support-respect-with-yellow-background-suicide-prevention-day_23-2151607937.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid"
						alt="Avatar"
						width={150}
						height={150}
						className="w-full h-full object-cover"
					/>
					<AvatarFallback>JD</AvatarFallback>
				</Avatar>
				<Avatar className="border-2  w-10 h-10">
					<AvatarImage
						src="https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid"
						alt="Avatar"
						width={150}
						height={150}
						className="w-full h-full object-cover"
					/>
					<AvatarFallback>WP</AvatarFallback>
				</Avatar>
				<Avatar className="border-2  w-10 h-10">
					<AvatarImage
						src="https://img.freepik.com/free-photo/handsome-adult-male-posing_23-2148729713.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid&w=740"
						alt="Avatar"
						width={150}
						height={150}
						className="w-full h-full object-cover"
					/>
					<AvatarFallback>WP</AvatarFallback>
				</Avatar>
				{/* <Avatar className="border-2  w-10 h-10 bg-black flex items-center justify-center">
					<Plus className="h-5 w-5 text-white" />
				</Avatar> */}
			</div>
		</div>
	);
}
