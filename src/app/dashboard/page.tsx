import type { Metadata } from "next";

import { CurrentTimeCard } from "@/components/dashboard/current-time/current-time-card";
import { DiscordLinkCard } from "@/components/dashboard/discord-link/discord-link-card";
import { DiscordActivity } from "@/components/dashboard/discord/discord-activity";
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/ui/page-header";
import { fetchWeatherForecast } from "@/lib/api/time";

export const metadata: Metadata = {
  description: "Statistics about my activities",
  title: "Dashboard",
};

export default async function Dashboard() {
  const weatherForecast = await fetchWeatherForecast();

  return (
    <section className="container relative max-w-3xl space-y-4">
      <PageHeader className="items-start">
        <PageHeaderHeading className="font-semibold text-2xl sm:text-2xl md:text-2xl lg:text-2xl">
          Dashboard
        </PageHeaderHeading>
        <PageHeaderDescription className="font-light text-muted sm:text-base md:text-base lg:text-base">
          Statistics about my activities
        </PageHeaderDescription>
      </PageHeader>

      <div className="flex flex-wrap gap-2">
        <DiscordActivity />
        <div className="flex size-full flex-wrap gap-4">
          <DiscordLinkCard />
          <CurrentTimeCard data={weatherForecast} />
        </div>
      </div>
    </section>
  );
}
