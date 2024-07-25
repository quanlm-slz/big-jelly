"use server";

import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const data = await fetch(`${process.env.BACKEND_URL}/customers/sign_up`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  return data;
};
