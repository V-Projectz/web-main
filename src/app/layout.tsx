import { Assets } from "@/assets";
import { AppHeader } from "@/components";
import HashScroll from "@/components/hash-scroll";
import { AppShell, AppShellMain, ColorSchemeScript, mantineHtmlProps, MantineProvider } from "@mantine/core";
import type { Metadata } from "next";
import "./globals.css";
import theme from "./theme";

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
            <AppHeader logo={Assets.svgs.vprojectzLogo} title="V-Projectz" />
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
