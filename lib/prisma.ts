import { PrismaClient } from "@prisma/client";

export function isDatabaseConfigured(): boolean {
  return !!process.env.DATABASE_URL?.trim();
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma: PrismaClient | undefined = isDatabaseConfigured()
  ? (globalForPrisma.prisma ??
    new PrismaClient({
      log:
        process.env.NODE_ENV === "development"
          ? ["query", "error", "warn"]
          : ["error"],
    }))
  : undefined;

if (prisma && process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
