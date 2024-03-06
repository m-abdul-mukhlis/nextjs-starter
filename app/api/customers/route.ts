import { fetchCustomers } from "@/app/lib/data";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await fetchCustomers()
  return NextResponse.json({
    ok: 1,
    message: "success",
    status_code: 200,
    result: data
  })
}
