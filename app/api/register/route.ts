import bcrypt from "bcrypt";

import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, name, password } = body;

  console.log("Request body:", body);

  const hashedPassword = await bcrypt.hash(password, 12);

  try {
    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });

    console.log("Created new user:", user);

    return NextResponse.json(user);
  } catch (error) {
    console.log("Error creating user:", error);
    return NextResponse.json({ error });
  }
}
