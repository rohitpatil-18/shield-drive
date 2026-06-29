import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const year = request.nextUrl.searchParams.get("year");

    if (!year) {
      return NextResponse.json(
        { message: "Year is required" },
        { status: 400 }
      );
    }

    const makes = await prisma.vehicle.findMany({
      where: {
        year: Number(year),
      },
      distinct: ["make"],
      select: {
        make: true,
      },
      orderBy: {
        make: "asc",
      },
    });

    return NextResponse.json(makes.map((item) => item.make));
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to fetch makes" },
      { status: 500 }
    );
  }
}