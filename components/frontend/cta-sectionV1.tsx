import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Cta() {
	return (
		<section className="w-full py-12 rounded-3xl mt-8 bg-white">
			<div className="container mx-auto px-4 md:px-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
					<div className="space-y-4">
						<h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-red-600">
							Sustainability and Energy Transition
						</h2>
						<p className="text-gray-700 md:text-lg">
							Fueling industries, engines, and everyday life — with cleaner gas,
							premium lubricants, and next-generation petro solutions.
						</p>
						<div className="flex flex-wrap gap-4 pt-4">
							<Link
								href="#watch-video"
								className="inline-flex h-10 items-center justify-center rounded-md border border-gray-800 px-6 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
							>
								Watch Video
							</Link>
							<Link
								href="#learn-more"
								className="inline-flex h-10 items-center justify-center rounded-md bg-red-600 px-6 text-sm font-medium text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
							>
								Learn more <ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</div>
					</div>
					<div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
						<Image
							src="https://img.freepik.com/free-photo/man-gas-station-with-car-close-up_23-2148906382.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid&w=740"
							alt="Two engineers in safety gear working with a laptop at an industrial site"
							fill
							className="object-cover rounded-lg"
							priority
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
