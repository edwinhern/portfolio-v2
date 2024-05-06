import { createEnv } from '@t3-oss/env-nextjs';
import { vercel } from '@t3-oss/env-nextjs/presets';
import { z } from 'zod';

export const env = createEnv({
  client: {
    NEXT_PUBLIC_APP_URL: z.string().min(1).default('http://localhost:3000'),
    NEXT_PUBLIC_DISCORD_ID: z.string().min(1).default('123456789012345678'),
  },
  extends: [vercel()],
  runtimeEnv: {
    DISCORD_ID: process.env.DISCORD_ID,
    GH_API_URL: process.env.GH_API_URL,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_DISCORD_ID: process.env.NEXT_PUBLIC_DISCORD_ID,
    WAKATIME_API_KEY: process.env.WAKATIME_API_KEY,
  },
  server: {
    DISCORD_ID: z.string().min(1),
    GH_API_URL: z.string().startsWith('https://'),
    WAKATIME_API_KEY: z.string().startsWith('waka_'),
  },
});
