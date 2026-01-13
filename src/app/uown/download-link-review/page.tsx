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
export default function DownloadLinkPreviewPage() {
  return null; // Bots only
}