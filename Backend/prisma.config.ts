import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "npx ts-node app/prisma/seed.ts",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});