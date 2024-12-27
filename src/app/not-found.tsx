import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "404",
	description: "Uh oh! This page does not exist",
};

export default function Custom404() {
	return (
		<article className="mt-8 flex flex-col gap-8 pb-16">
			<div className="min-h-full px-4 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
				<div className="mx-auto max-w-max">
					<section className="sm:flex">
						<p className="font-bold text-3xl text-muted-foreground tracking-tight">404</p>
						<div className="sm:ml-6">
							<div className="sm:border-gray-200 sm:border-l sm:pl-6">
								<h1 className="font-bold text-3xl sm:text-5xl">Uh oh!</h1>
								<p className="mt-1 text-base text-muted-foreground">Maybe I renamed or deleted the page. Try again.</p>
							</div>
							<div className="mt-10 flex space-x-3 sm:border-transparent sm:border-l sm:pl-6">
								<Button asChild variant="outline">
									<Link href="/" className="flex items-center gap-2 font-light">
										<ArrowLeftIcon className="size-4" />
										back to home
									</Link>
								</Button>
							</div>
						</div>
					</section>
				</div>
			</div>
		</article>
	);
}
