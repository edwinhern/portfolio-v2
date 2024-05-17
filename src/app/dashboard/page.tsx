import { CurrentTimeCard } from '@/components/dashboard/current-time/current-time-card';
import { DiscordActivity } from '@/components/dashboard/discord/discord-activity';
import { DiscordLinkCard } from '@/components/dashboard/discord-link/discord-link-card';
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/ui/page-header';
import { fetchWeatherForecast } from '@/lib/api/time';

export const metadata = {
  description: 'Statistics about my activities',
  title: 'Dashboard',
};

export default async function Dashboard() {
  const weatherForecast = await fetchWeatherForecast();

  return (
    <div className="container relative max-w-3xl space-y-4 py-16">
      <PageHeader className="items-start py-0">
        <PageHeaderHeading className="text-2xl font-semibold sm:text-2xl md:text-2xl lg:text-2xl">
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
    </div>
  );
}
