import { PrismaClient } from "../lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg"; 
import { readFile } from "node:fs/promises";
import path from "node:path";

console.log(process.env.DATABASE_URL);

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  console.log("🌱 Starting database seed...");

  const filePath = path.join(
    process.cwd(),
    "prisma",
    "data",
    "vehicles.json"
  );

  const file = await readFile(filePath, "utf-8");

  const vehicles = JSON.parse(file);

  console.log(`📄 Loaded ${vehicles.length} vehicles`);

  await prisma.vehicle.deleteMany();

  console.log("🗑 Cleared old vehicles");

  await prisma.vehicle.createMany({
    data: vehicles,
  });

  console.log("✅ Vehicle data seeded successfully!");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });