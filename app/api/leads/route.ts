import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { quoteSchema } from "@/lib/validations/quoteSchema";
import { validateVehicle } from "@/services/vehicle.service";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body
    const result = quoteSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          message: "Validation failed",
          errors: result.error.flatten().fieldErrors,
        },
        {
          status: 400,
        }
      );
    }

    const validatedData = result.data;

    // Verify vehicle exists
    const vehicle = await validateVehicle(
      Number(validatedData.carYear),
      validatedData.carMake,
      validatedData.carModel
    );

    if (!vehicle) {
      return NextResponse.json(
        {
          message: "Invalid vehicle selection.",
        },
        {
          status: 400,
        }
      );
    }

    // Normalize phone number
    const phone = validatedData.phone.replace(/\D/g, "");

    // Save lead
    const lead = await prisma.lead.create({
      data: {
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        email: validatedData.email,
        phone: phone,
        zipCode: validatedData.zipCode,
        carYear: Number(validatedData.carYear),
        carMake: validatedData.carMake,
        carModel: validatedData.carModel,
      },
    });

    return NextResponse.json(
      {
        message: "Lead created successfully",
        lead,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Lead API Error:", error);

    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}