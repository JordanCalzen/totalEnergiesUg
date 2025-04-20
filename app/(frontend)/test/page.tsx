import Image from "next/image";
import {
	ArrowRight,
	Download,
	Minus,
	Plus,
	ShoppingCart,
	Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function ProductDetailPage() {
	// This would typically come from a database or API
	const product = {
		id: "total-quartz-9000",
		name: "Total Quartz 9000 Future 5W-30",
		description:
			"Synthetic engine oil for gasoline and diesel engines with superior performance and protection.",
		price: 49.99,
		mainImage:
			"https://img.freepik.com/free-vector/realistic-motor-oil-poster-ads-with-editable-text-canister-package-splashes-drops-engine-oil-illustration_1284-29513.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid&w=740",
		images: [
			"https://img.freepik.com/premium-photo/canister-engine-motor-oil-full-synthetic-clinging-molecules-protection-vector-vehicle-engine_1199132-151736.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid&w=740",
			"https://img.freepik.com/premium-photo/realistic-car-engine-motor-oil-bottle-with-liquid-splash-vector-background-engine-oil-automotive_1199132-152183.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid&w=740",
			"https://img.freepik.com/premium-vector/realistic-car-engine-motor-oil-bottle-with-splash_8071-60627.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid&w=740",
			"https://img.freepik.com/premium-vector/realistic-fuel-advertising-composition-template_98292-9804.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid&w=740",
		],
		specifications: [
			{ name: "Viscosity", value: "5W-30" },
			{ name: "API Classification", value: "SN/CF" },
			{ name: "ACEA", value: "A3/B4" },
			{ name: "Approvals", value: "BMW LL-01, MB 229.5, VW 502.00/505.00" },
			{ name: "Fuel Economy", value: "Up to 3% improvement" },
			{ name: "Drain Interval", value: "Extended capability" },
			{ name: "Formulation", value: "Low SAPS" },
			{ name: "Engine Cleanliness", value: "Excellent" },
			{ name: "Wear Protection", value: "Superior" },
		],
		applications: [
			"Gasoline and diesel passenger cars",
			"Light-duty diesel engines without DPF",
			"High-performance engines",
			"Turbocharged and naturally aspirated engines",
			"Modern vehicles with extended service intervals",
		],
		documents: [
			{
				title: "Product Data Sheet",
				description: "Technical specifications and performance data",
				fileSize: "1.2 MB",
				url: "#",
			},
			{
				title: "Safety Data Sheet",
				description: "Safety information and handling guidelines",
				fileSize: "0.8 MB",
				url: "#",
			},
			{
				title: "Installation Guide",
				description: "Step-by-step instructions for oil change",
				fileSize: "2.4 MB",
				url: "#",
			},
		],
		videos: [
			{
				title: "How to Change Your Engine Oil",
				description:
					"Step-by-step guide to changing your engine oil using Total Quartz",
				duration: "8:24",
				thumbnail: "/placeholder.svg?height=360&width=640",
				url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
			},
			{
				title: "Total Quartz Product Overview",
				description:
					"Learn about the benefits and features of Total Quartz engine oils",
				duration: "5:16",
				thumbnail: "/placeholder.svg?height=360&width=640",
				url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
			},
		],
		variants: [
			{ id: "1l", name: "1L Bottle", price: 49.99 },
			{ id: "4l", name: "4L Bottle", price: 179.99 },
			{ id: "5l", name: "5L Bottle", price: 219.99 },
			{ id: "20l", name: "20L Drum", price: 799.99 },
		],
	};
	const products = [
		{
			id: 1,
			name: "Minimalist Desk Lamp",
			description:
				"A sleek, adjustable desk lamp with warm lighting for your workspace.",
			price: 49.99,
			rating: 4.5,
			reviews: 128,
			image:
				"https://img.freepik.com/free-vector/realistic-motor-oil-ads-square-background-with-images-plastic-canister-container-branded-package-text-illustration_1284-29512.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid&w=740",
			category: "Home Office",
			inStock: true,
			discount: 0,
			isNew: false,
			isBestseller: true,
		},
		{
			id: 2,
			name: "Ergonomic Office Chair",
			description:
				"Comfortable seating with lumbar support for long work hours.",
			price: 249.99,
			rating: 4.8,
			reviews: 256,
			image:
				"https://img.freepik.com/premium-photo/realistic-car-engine-motor-oil-bottle-with-liquid-splash-vector-background-engine-oil-automotive_1199132-152183.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid&w=740",
			category: "Furniture",
			inStock: true,
			discount: 15,
			isNew: false,
			isBestseller: false,
		},
		{
			id: 3,
			name: "Wireless Earbuds Pro",
			description: "Premium sound quality with active noise cancellation.",
			price: 129.99,
			rating: 4.7,
			reviews: 342,
			image:
				"https://img.freepik.com/free-vector/engine-oil-realistic-horizontal-illustration-with-plastic-container-piston-fully-synthetic-text_1284-56963.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid&w=740",
			category: "Electronics",
			inStock: true,
			discount: 0,
			isNew: true,
			isBestseller: false,
		},
		{
			id: 4,
			name: "Wireless Earbuds Pro",
			description: "Premium sound quality with active noise cancellation.",
			price: 129.99,
			rating: 4.7,
			reviews: 342,
			image:
				"https://img.freepik.com/free-vector/engine-oil-realistic-horizontal-illustration-with-plastic-container-piston-fully-synthetic-text_1284-56963.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid&w=740",
			category: "Electronics",
			inStock: true,
			discount: 0,
			isNew: true,
			isBestseller: false,
		},
	];

	return (
		<div className="container mx-auto px-4 py-6  sm:py-8  ">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8 lg:mb-12">
				{/* Product Images */}
				<div className="space-y-4 ">
					<div className="relative aspect-square overflow-hidden rounded-xl border bg-white">
						<Image
							src={product.mainImage || "/placeholder.svg"}
							alt={product.name}
							width={500}
							height={500}
							className="object-contain  w-full"
							priority
						/>
					</div>
					<div className="grid grid-cols-4 gap-2 sm:gap-4">
						{product.images.map((image, index) => (
							<div
								key={index}
								className="relative aspect-square overflow-hidden rounded-lg border bg-white cursor-pointer hover:border-red-600"
							>
								<Image
									src={image || "/placeholder.svg"}
									alt={`${product.name} view ${index + 1}`}
									width={500}
									height={500}
									className="object-cover w-full h-full"
								/>
							</div>
						))}
					</div>
				</div>

				{/* Product Details */}
				<div className="space-y-6 sm:space-y-8">
					<div>
						<h1 className="text-2xl sm:text-3xl font-bold mb-2">
							{product.name}
						</h1>
						<p className="text-xl sm:text-2xl font-bold text-red-600 mb-3 sm:mb-4">
							${product.price.toFixed(2)}
						</p>
						<p className="text-gray-700">{product.description}</p>
					</div>

					<div className="space-y-3 sm:space-y-4">
						<h3 className="font-semibold">Key Specifications:</h3>
						<ul className="list-disc pl-5 space-y-1">
							{product.specifications.slice(0, 4).map((spec, index) => (
								<li key={index} className="text-gray-700">
									<span className="font-medium">{spec.name}:</span> {spec.value}
								</li>
							))}
						</ul>
					</div>

					{/* Product Variant Selector */}
					<div>
						<Label
							htmlFor="variant"
							className="text-base font-medium mb-2 block"
						>
							Size/Variant
						</Label>
						<RadioGroup
							defaultValue={product.variants[0].id}
							className="flex flex-wrap gap-2"
						>
							{product.variants.map((variant) => (
								<div key={variant.id} className="flex items-center">
									<RadioGroupItem
										value={variant.id}
										id={`variant-${variant.id}`}
										className="peer sr-only"
									/>
									<Label
										htmlFor={`variant-${variant.id}`}
										className="flex cursor-pointer rounded-md border-2 border-muted bg-popover px-3 py-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-red-600 peer-data-[state=checked]:bg-red-50 text-sm sm:text-base"
									>
										{variant.name} - ${variant.price.toFixed(2)}
									</Label>
								</div>
							))}
						</RadioGroup>
					</div>

					{/* Quantity Selector */}
					<div>
						<Label
							htmlFor="quantity"
							className="text-base font-medium mb-2 block"
						>
							Quantity
						</Label>
						<div className="flex items-center">
							<Button
								type="button"
								variant="outline"
								size="icon"
								className="h-10 w-10 rounded-r-none"
							>
								<Minus className="h-4 w-4" />
							</Button>
							<div className="h-10 px-4 flex items-center justify-center border-y">
								1
							</div>
							<Button
								type="button"
								variant="outline"
								size="icon"
								className="h-10 w-10 rounded-l-none"
							>
								<Plus className="h-4 w-4" />
							</Button>
						</div>
					</div>

					<Button className="bg-red-600 hover:bg-red-700 text-white w-full">
						<ShoppingCart className="mr-2 h-4 w-4" />
						Add to Cart
					</Button>
				</div>
			</div>

			{/* Product Details Tabs */}
			<div className="mb-12">
				<Tabs defaultValue="specifications" className="w-full">
					<div className="overflow-x-auto pb-2">
						<TabsList className="border-b w-full justify-start rounded-none bg-transparent mb-6 flex-nowrap min-w-max">
							<TabsTrigger
								value="specifications"
								className="rounded-none border-b-2 border-transparent data-[state=active]:border-red-600 data-[state=active]:bg-transparent text-gray-700 data-[state=active]:text-red-600 whitespace-nowrap"
							>
								Specifications
							</TabsTrigger>
							<TabsTrigger
								value="documentation"
								className="rounded-none border-b-2 border-transparent data-[state=active]:border-red-600 data-[state=active]:bg-transparent text-gray-700 data-[state=active]:text-red-600 whitespace-nowrap"
							>
								Documentation
							</TabsTrigger>
							<TabsTrigger
								value="videos"
								className="rounded-none border-b-2 border-transparent data-[state=active]:border-red-600 data-[state=active]:bg-transparent text-gray-700 data-[state=active]:text-red-600 whitespace-nowrap"
							>
								Installation Videos
							</TabsTrigger>
						</TabsList>
					</div>

					<TabsContent value="specifications" className="mt-0">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div>
								<h3 className="text-xl font-bold mb-4">
									Technical Specifications
								</h3>
								<div className="space-y-4">
									{product.specifications.map((spec, index) => (
										<div
											key={index}
											className="grid grid-cols-1 sm:grid-cols-2 border-b pb-2"
										>
											<span className="font-medium">{spec.name}</span>
											<span>{spec.value}</span>
										</div>
									))}
								</div>
							</div>
							<div>
								<h3 className="text-xl font-bold mb-4">Applications</h3>
								<ul className="list-disc pl-5 space-y-2">
									{product.applications.map((app, index) => (
										<li key={index} className="text-gray-700">
											{app}
										</li>
									))}
								</ul>
							</div>
						</div>
					</TabsContent>

					<TabsContent value="documentation" className="mt-0">
						<h3 className="text-xl font-bold mb-6">Product Documentation</h3>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{product.documents.map((doc, index) => (
								<Card key={index} className="overflow-hidden">
									<CardContent className="p-4 sm:p-6">
										<div className="flex items-start mb-4">
											<div className="bg-red-100 p-3 rounded-lg mr-4 shrink-0">
												<Download className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />
											</div>
											<div>
												<h4 className="font-bold mb-1">{doc.title}</h4>
												<p className="text-sm text-gray-500">{doc.fileSize}</p>
											</div>
										</div>
										<p className="text-sm text-gray-600 mb-4">
											{doc.description}
										</p>
										<Button
											variant="outline"
											className="w-full border-red-600 text-red-600 hover:bg-red-50"
										>
											<Download className="mr-2 h-4 w-4" />
											Download PDF
										</Button>
									</CardContent>
								</Card>
							))}
						</div>
					</TabsContent>

					<TabsContent value="videos" className="mt-0">
						<h3 className="text-xl font-bold mb-6">Installation Videos</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
							{product.videos.map((video, index) => (
								<div key={index} className="space-y-3">
									<div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
										<iframe
											src={video.url}
											title={video.title}
											className="absolute inset-0 w-full h-full"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
											allowFullScreen
										></iframe>
									</div>
									<div>
										<h4 className="font-bold">{video.title}</h4>
										<div className="flex items-center text-sm text-gray-500 mb-2">
											<span>{video.duration}</span>
										</div>
										<p className="text-sm text-gray-600">{video.description}</p>
									</div>
								</div>
							))}
						</div>
					</TabsContent>
				</Tabs>
			</div>

			{/* Related Products Section */}
			<div className="space-y-4 sm:space-y-6">
				<h2 className="text-xl sm:text-2xl font-bold">You May Also Like</h2>
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{products.slice(0, 6).map((product) => (
						<div
							key={product.id}
							className="group overflow-hidden rounded-lg bg-white shadow-md"
						>
							<div className="relative h-[300px] overflow-hidden w-full">
								<Image
									src={product.image || "/placeholder.svg"}
									alt={product.name}
									width={300}
									height={300}
									className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
								<div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 transition-opacity group-hover:opacity-100">
									<p className="text-sm">{product.description}</p>
								</div>
							</div>
							<div className="p-6">
								<h3 className="mb-2 text-xl font-medium">{product.name}</h3>
								<div className="mb-4 flex items-center gap-2">
									<div className="flex">
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												className={`h-4 w-4 ${
													i < Math.floor(product.rating)
														? "fill-yellow-400 text-yellow-400"
														: "fill-gray-200 text-gray-200"
												}`}
											/>
										))}
									</div>
									<span className="text-sm text-gray-500">
										({product.reviews})
									</span>
								</div>
								<div className="flex items-center justify-between">
									<span className="text-xl sm:text-2xl font-bold text-red-600 mb-3 sm:mb-4">
										${product.price.toFixed(2)}
									</span>
									<Button className="bg-red-600 hover:bg-red-700 text-white ">
										<ShoppingCart className="mr-2 h-4 w-4" />
										Add to Cart
									</Button>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="mt-10 text-center">
					<Button
						variant="outline"
						className="bg-red-600 hover:bg-red-700 text-white rounded-lg"
					>
						View All Providers
						<ArrowRight className="ml-2 h-5 w-5 animate-pulse -rotate-45" />
					</Button>
				</div>
			</div>
		</div>
	);
}
