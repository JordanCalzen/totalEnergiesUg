import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
	return (
		<div className="relative ">
			<div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-950 dark:to-indigo-950" />
			<div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:px-8">
				<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
					<div className="flex flex-col justify-center space-y-4">
						<div className="space-y-2">
							<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
								Powering Progress with Cleaner, Smarter Energy Solutions in
								Uganda.
							</h1>
							<p className="max-w-[600px] text-gray-500 md:text-xl">
								We're committed to reliable and sustainable energy that drives
								Uganda forward.
							</p>
						</div>
						<div className="flex flex-col gap-2 min-[400px]:flex-row">
							<Button className="bg-gradient-to-r from-red-600 to-violet-600 hover:from-red-700 hover:to-violet-700">
								Discover Our Solutions
								<ArrowRight className="ml-2 h-4 w-4" />
							</Button>
							<Button variant="outline">Contact Us</Button>
						</div>
					</div>
					<Image
						src="/hero-image.jpg"
						alt="Solar panels in Uganda"
						width={600}
						height={400}
						className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
					/>
				</div>
			</div>
		</div>
	);
}
