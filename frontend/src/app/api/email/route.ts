"use server";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  return NextResponse.json("form processed", { status: 200} )
};
