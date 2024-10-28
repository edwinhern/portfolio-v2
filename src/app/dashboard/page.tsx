import type { Metadata } from "next";

import { DashboardPage } from "@/components/features/dashboard";
import { fetchWeatherForecast } from "@/lib/api/weather";

export const metadata: Metadata = {
	description: "Statistics about my activities",
	title: "Dashboard",
};

export default async function Dashboard() {
	const weatherForecast = await fetchWeatherForecast();

	return <DashboardPage weatherForecast={weatherForecast} />;
}
