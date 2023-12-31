import User from "@/app/(models)/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    const body = await request.json();
    const userData = body.formData;
    // Confirming Data Exists
    if (!userData?.email || !userData?.password) {
      return NextResponse.json(
        { message: "All fields are required", err },
        { status: 400 }
      );
    }

    // Finding Duplicate Email
    const duplicate = await User.findOne({ email: userData.email })
      .lean()
      .exec();
    if (duplicate) {
      return NextResponse.json(
        {
          message: "Duplicate Email Found",
          err,
        },
        { status: 401 }
      );
    }

    // Hashing of password
    const hashPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashPassword;
    await User.create(userData);
    return NextResponse.json({ message: "User Created" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
