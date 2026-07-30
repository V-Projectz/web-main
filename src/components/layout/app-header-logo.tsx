"use client";

import { Tooltip, UnstyledButton, useComputedColorScheme } from "@mantine/core";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

/** */
interface AppHeaderLogoProps {
  href: string;
  src: string | StaticImageData;
  alt: string;
  size?: number;
  tooltipText?: string;
}

/** */
export function AppHeaderLogo({ href, src, alt, size = 40, tooltipText }: AppHeaderLogoProps) {
  tooltipText ??= `Go to ${alt} home`;
  const colorScheme = useComputedColorScheme();
  //
  return (
    <Tooltip disabled={!tooltipText} label={tooltipText} withArrow position="left" openDelay={300}>
      <UnstyledButton
        component={Link}
        href={href}
        aria-label={tooltipText}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "filter 150ms ease, transform 150ms ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.filter = colorScheme === "dark" ? "drop-shadow(0 0 8px rgba(255,255,255,.3))" : "drop-shadow(0 0 8px rgba(0,0,0,.3))";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.filter = "";
          e.currentTarget.style.transform = "";
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.transform = "scale(0.96)";
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.transform = "";
        }}
      >
        <Image src={src} alt={alt} width={size} height={size} priority />
      </UnstyledButton>
    </Tooltip>
  );
}
