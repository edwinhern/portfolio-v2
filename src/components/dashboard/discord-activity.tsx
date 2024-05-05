import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function DiscordActivity() {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Discord activity</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Skeleton className="size-10 rounded-full" />
            <Skeleton className="h-10 w-28 md:w-56" />
          </div>
          <Skeleton className="h-8 w-full" />
        </div>
      </CardContent>
    </Card>
  );
}
