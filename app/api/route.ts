import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: 0,
    message: "halaman ini sudak tidak tersedia lagi..",
    result: "halaman ini sudak tidak tersedia lagi..",
    status_code: 200
  })
}

// export async function POST(request: Request) {
//   const data = await request.json()
//   return NextResponse.json({
//     data
//   })
// }