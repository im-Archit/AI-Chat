import { Pool, neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import ws from "ws";


declare global {
    var prisma: PrismaClient | undefined
}

// dotenv.config();
// neonConfig.webSocketConstructor = ws;
// const connectionString = `${process.env.DATABASE_URL}`;
const prismadb = globalThis.prisma || new PrismaClient();
if(process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;


// const pool = new Pool({ connectionString });
// const adapter = new PrismaNeon(pool);
// const prisma = new PrismaClient();
export default prismadb;







