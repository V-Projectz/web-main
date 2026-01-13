import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { isbot } from "isbot";
import { PLAY_STORE_URL, APP_STORE_URL } from "../constants";
import { Metadata } from "next";

///
export const metadata: Metadata = {
  title: "U-Own – Download the App",
  description: "Track debts, split bills, and manage shared expenses with U-Own.",
  openGraph: {
    title: "U-Own – Download the App",
    description: "Track debts, split bills, and manage shared expenses with U-Own.",
    url: "https://vprojectz.com/uown/download",
    siteName: "U-Own",
    images: [
      {
        url: "https://vprojectz.com/uown/uown-og-image.png",
        width: 1200,
        height: 630,
        alt: "U-Own App",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "U-Own – Download the App",
    description: "Track debts, split bills, and manage shared expenses with U-Own.",
    images: ["https://vprojectz.com/uown/uown-og-image.png"],
  },
}

///
export default async function DownloadPage() {
  const ua = (await headers()).get("user-agent") ?? "";

  // Bot detection
  if (isbot(ua)) {
    return null;
  }

  // Android
  if (/android/i.test(ua)) redirect(PLAY_STORE_URL);

  // iOS
  if (/iPad|iPhone|iPod/i.test(ua)) redirect(APP_STORE_URL);

  // Desktop → redirect to helper page (absolute URL required)
  redirect("/uown#download");
}