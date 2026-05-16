import { z } from 'zod';

export const environmentSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  PORT: z.string().default('3333').transform(Number),
  DATABASE_URL: z.string().url(),
  DIRECT_URL: z.string().url().optional(),
});

export type EnvironmentVariables = z.infer<typeof environmentSchema>;

export function validateEnvironment(config: Record<string, unknown>) {
  const result = environmentSchema.safeParse(config);

  if (!result.success) {
    console.error('❌ Invalid environment variables:', result.error.format());
    throw new Error('Environment validation failed');
  }

  return result.data;
}
