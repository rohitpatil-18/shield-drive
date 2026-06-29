import { prisma } from "@/lib/prisma";

export async function validateVehicle(
  year: number,
  make: string,
  model: string
) {
  const vehicle = await prisma.vehicle.findFirst({
    where: {
      year,
      make,
      model,
    },
  });

  return vehicle;
}