import { createEnv } from '@t3-oss/env-nextjs';
import { vercel } from '@t3-oss/env-nextjs/presets';
import { z } from 'zod';

export const env = createEnv({
  client: {
    NEXT_PUBLIC_VERCEL_URL: z.string().url(),
    NEXT_PUBLIC_NODE_ENV: z.enum(['development', 'production']),
  },
  emptyStringAsUndefined: true,
  experimental__runtimeEnv: {
    NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
    NEXT_PUBLIC_NODE_ENV: process.env.NEXT_PUBLIC_NODE_ENV,
  },
  extends: [vercel],
  skipValidation: process.env.NEXT_PUBLIC_SKIP_ENV_VALIDATION === 'true',
});
