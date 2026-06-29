import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const years = await prisma.vehicle.findMany({
      distinct: ["year"],
      select: {
        year: true,
      },
      orderBy: {
        year: "desc",
      },
    });

    return NextResponse.json(years.map((item) => item.year));
  } catch (error) {
    console.error("Error fetching years:", error);

    return NextResponse.json(
      {
        message: "Failed to fetch years",
      },
      {
        status: 500,
      }
    );
  }
}