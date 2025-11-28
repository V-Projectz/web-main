"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Just a redirect page to the download section
export default function DownloadRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/uown#download");
  });

  return null; // nothing to show
}