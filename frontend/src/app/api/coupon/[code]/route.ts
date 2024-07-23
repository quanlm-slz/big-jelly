import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest, { params }: { params: { code: string } }) => {
  return NextResponse.json(`Processing code: ${params.code}`, { status: 200 })
}
