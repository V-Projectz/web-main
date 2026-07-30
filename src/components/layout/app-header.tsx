"use client";

import { ColorSchemeDropdown } from "@/components";
import { AppShellHeader, Group, Title } from "@mantine/core";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

/** */
interface AppHeaderProps {
  logo?: string | StaticImageData | ReactNode;
  title: ReactNode;
}

/** */
export function AppHeader({ logo, title }: AppHeaderProps) {
  //
  return (
    <AppShellHeader
      withBorder={false}
      style={{
        background: "var(--app-header-bg)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        boxShadow: "var(--app-header-shadow)",
      }}
    >
      <Group className="h-full px-md">
        {typeof logo === "string" || (typeof logo === "object" && logo !== null && "src" in logo) ? (
          <Image src={logo} alt="Logo" width={40} height={40} />
        ) : (
          logo
        )}
        <Title className="grow" size={25}>
          {title}
        </Title>
        <ColorSchemeDropdown />
      </Group>
    </AppShellHeader>
  );
}
