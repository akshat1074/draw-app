import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

import dotenv from 'dotenv';
console.log("DB package - DATABASE_URL exists:", !!process.env.DATABASE_URL);
// Just load from the db package directory
dotenv.config();
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);

export const prismaClient = new PrismaClient({
  adapter,
});