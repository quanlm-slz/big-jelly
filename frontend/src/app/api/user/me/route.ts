"use server";

import { headers } from "next/headers";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  const data = await fetch(`${process.env.BACKEND_URL}/customers/me`, {
    method: "get",
    headers: headers(),
  });

  return data;
};
