/* eslint-disable @typescript-eslint/no-explicit-any */
import http, { HttpError } from "@/lib/http";
import { cookies } from "next/headers";

export async function POST() {
  const accessToken = (await cookies()).get("accessToken")?.value;

  try {
    const { payload } = await http.get<any>("/api/auth/user/user-info", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return Response.json(payload);
  } catch (error) {
    console.log("error", error);

    if (error instanceof HttpError) {
      return Response.json(error.payload, {
        status: error.status,
      });
    } else {
      return Response.json(
        {
          message: "Có lỗi xảy ra",
        },
        {
          status: 500,
        },
      );
    }
  }
}
