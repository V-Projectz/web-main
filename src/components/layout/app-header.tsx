"use client";

import { ColorSchemeDropdown } from "@/components/color-schemes-switcher";
import { alpha, AppShellHeader, Group, Title, useComputedColorScheme, useMantineTheme } from "@mantine/core";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

/** */
interface AppHeaderProps {
  logo?: string | StaticImageData;
  title: ReactNode;
}

/** */
export function AppHeader({ logo, title }: AppHeaderProps) {
  const theme = useMantineTheme();
  const colorScheme = useComputedColorScheme();
  const bg = colorScheme === "dark" ? alpha(theme.colors.dark[7], 0.65) : alpha(theme.white, 0.65);
  const border = colorScheme === "dark" ? alpha(theme.white, 0.08) : alpha(theme.black, 0.08);
  //
  return (
    <AppShellHeader
      bg={bg}
      style={{
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        borderBottom: `1px solid ${border}`,
      }}
    >
      <Group className="h-full px-md">
        {logo && <Image src={logo} alt="Logo" width={40} height={40} />}
        <Title className="grow" size={25}>
          {title}
        </Title>
        <ColorSchemeDropdown />
      </Group>
    </AppShellHeader>
  );
}
