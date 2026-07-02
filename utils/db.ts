import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
    const databaseUrl = process.env.DATABASE_URL;

    if (!databaseUrl) {
        if (process.env.NODE_ENV === "production") {
            throw new Error("DATABASE_URL is not defined");
        }

        console.warn("DATABASE_URL is not defined; Prisma will be initialized lazily at request time.");
        return null as unknown as PrismaClient;
    }

    if (process.env.NODE_ENV === "development") {
        const url = new URL(databaseUrl);
        console.log(` Database connection: ${url.protocol}//${url.hostname}:${url.port || '3306'}`);
        console.log(`🔒 SSL Mode: ${url.searchParams.get('sslmode') || 'not specified'}`);
    }

    return new PrismaClient({
        log: process.env.NODE_ENV === "development"
            ? ["query", "info", "warn", "error"]
            : ["error", "warn"],
    });
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClientSingleton | undefined;
};

const getPrismaClient = () => {
    if (!globalForPrisma.prisma) {
        globalForPrisma.prisma = prismaClientSingleton();
    }

    if (!globalForPrisma.prisma) {
        throw new Error("Prisma client is unavailable because DATABASE_URL is not set.");
    }

    return globalForPrisma.prisma;
};

const prisma = new Proxy({} as PrismaClient, {
    get(_target, prop) {
        const client = getPrismaClient();
        return Reflect.get(client, prop);
    },
});

export default prisma;

