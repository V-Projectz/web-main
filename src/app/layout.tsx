import type { Metadata } from "next";
import { AppShell, AppShellHeader, AppShellMain, ColorSchemeScript, Group, mantineHtmlProps, MantineProvider, Title } from "@mantine/core";
import theme from "./theme";
import "./globals.css";
import Image from "next/image";
import { ColorSchemeDropdown } from "@/components/color-schemes-switcher";
import vprojectzLogo from "@/assets/svgs/v-projectz-logo.svg";
import HashScroll from "@/components/hash-scroll";

// ========================================================================= //
export const metadata: Metadata = {
  title: "V-Projectz",
  description: "The main V-Projectz LLC website.",
};

// ========================================================================= //
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body className="antialiased">
        <MantineProvider defaultColorScheme="auto" theme={theme}>
          <AppShell header={{ height: 60 }} padding="md">
            <AppShellHeader>
              <Group className="h-full px-md">
                <Image alt="logo" className="" src={vprojectzLogo} width={45} height={45} />
                <Title className="grow" size={25} >V-Projectz</Title>
                <ColorSchemeDropdown />
              </Group>
            </AppShellHeader>
            <AppShellMain>
              <HashScroll />
              {children}
            </AppShellMain>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
