import { NextRequest, NextResponse } from "next/server";
import { PLAY_STORE_URL, APP_STORE_URL } from "../constants";

export async function GET(req: NextRequest) {
  const ua = req.headers.get("user-agent") || "";

  // Android
  if (/android/i.test(ua)) {
    return NextResponse.redirect(PLAY_STORE_URL);
  }

  // iOS
  if (/iPad|iPhone|iPod/i.test(ua)) {
    return NextResponse.redirect(APP_STORE_URL);
  }

  // Desktop → redirect to helper page (absolute URL required)
  const fallbackUrl = new URL("/uown/download-redirect", req.url);
  return NextResponse.redirect(fallbackUrl);
}