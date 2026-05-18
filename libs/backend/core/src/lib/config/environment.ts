import { z } from 'zod';

export const environmentSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  PORT: z.string().default('3333').transform(Number),
  DATABASE_URL: z.string().url(),
  DIRECT_URL: z.string().url().optional(),
  JWT_ACCESS_SECRET: z
    .string()
    .min(16)
    .default('devpulse-dev-access-secret'),
  JWT_REFRESH_SECRET: z
    .string()
    .min(16)
    .default('devpulse-dev-refresh-secret'),
  JWT_REFRESH_EXPIRES_IN: z.string().default('7'),
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
