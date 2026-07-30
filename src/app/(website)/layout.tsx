import { Assets } from "@/assets";
import { AppHeader, AppHeaderLogo } from "@/components";
import HashScroll from "@/components/core/hash-scroll";
import { layout } from "@/constants";
import { AppShell, AppShellMain } from "@mantine/core";
import type { Metadata } from "next";

// ========================================================================= //
/** */
export const metadata: Metadata = {
  title: "V-Projectz",
  description: "The main V-Projectz LLC website",
};

/** */
export default function WebsiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <AppShell header={{ height: layout.HEADER_HEIGHT }} padding="md">
      <AppHeader
        logo={<AppHeaderLogo href="/" src={Assets.svgs.vprojectzLogo} alt={metadata.title?.toString() ?? ""} />}
        title={metadata.title?.toString()}
      />
      <AppShellMain>
        <HashScroll />
        {children}
      </AppShellMain>
    </AppShell>
  );
}
