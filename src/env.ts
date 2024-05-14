import { createEnv } from '@t3-oss/env-nextjs';
import { vercel } from '@t3-oss/env-nextjs/presets';
import { z } from 'zod';

export const env = createEnv({
  client: {
    NEXT_PUBLIC_APP_URL: z.string().min(1),
    NEXT_PUBLIC_DISCORD_ID: z.string().min(1),
  },
  extends: [vercel()],
  runtimeEnv: {
    DISCORD_ID: process.env.DISCORD_ID,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_DISCORD_ID: process.env.NEXT_PUBLIC_DISCORD_ID,
  },
  server: {
    DISCORD_ID: z.string().min(1),
  },
  skipValidation: true,
});
