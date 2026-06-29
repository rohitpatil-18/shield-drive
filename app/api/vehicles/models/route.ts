import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const year = request.nextUrl.searchParams.get("year");
    const make = request.nextUrl.searchParams.get("make");

    if (!year || !make) {
      return NextResponse.json(
        {
          message: "Year and make are required",
        },
        {
          status: 400,
        }
      );
    }

    const models = await prisma.vehicle.findMany({
      where: {
        year: Number(year),
        make,
      },
      select: {
        model: true,
      },
      orderBy: {
        model: "asc",
      },
    });

    return NextResponse.json(models.map((item) => item.model));
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Failed to fetch models",
      },
      {
        status: 500,
      }
    );
  }
}