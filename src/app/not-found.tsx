import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "404",
	description: "Uh oh! This page does not exist",
};

export default function Custom404() {
	return (
		<div className="container relative flex flex-col gap-2">
			<h1 className="font-bold text-3xl text-primary tracking-tight">404</h1>
			<p className="max-w-sm">
				Uh oh! This page does not exists, maybe you clicked an old link or misspelled. Please try again…
			</p>
			<Button asChild variant="link">
				<Link href="/">Return home</Link>
			</Button>
		</div>
	);
}
