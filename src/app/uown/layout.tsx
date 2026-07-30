import { Assets } from "@/assets";
import { AppHeader, AppHeaderLogo } from "@/components";
import { layout } from "@/constants";
import { Anchor, AppShell, AppShellFooter, AppShellMain, Group, Text, Title } from "@mantine/core";
import { Metadata } from "next";
import { AppInfo } from "./constants";

/** */
export const metadata: Metadata = {
  title: "V-Projectz/U-Own",
  appLinks: {
    ios: { app_name: AppInfo.name, app_store_id: AppInfo.appStoreId, url: AppInfo.appStoreUrl },
    android: { app_name: AppInfo.name, package: AppInfo.packageName, url: AppInfo.playStoreUrl },
  },
  description: "U-Own application main page",
};

/** */
export default function UOwnLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [companyName, appName] = metadata.title?.toString().split("/") ?? [];
  //
  return (
    <AppShell header={{ height: layout.HEADER_HEIGHT }}>
      <AppHeader
        title={
          <Group gap="xs" align="center">
            <AppHeaderLogo href="/" src={Assets.svgs.vprojectzLogo} alt={companyName} />
            <Text c="dimmed" fw={300} className="text-3xl">
              /
            </Text>
            <AppHeaderLogo href="/uown" src={Assets.svgs.uownLogo} alt={appName} />
            <Title size={25} fw={700}>
              {appName}
            </Title>
          </Group>
        }
      />
      <AppShellMain
        mb={50}
        style={{
          minHeight: "auto",
        }}
      >
        {children}
      </AppShellMain>
      {/* Footer Links */}
      <AppShellFooter withBorder={false} p="md">
        <Group
          align="center"
          bg="light-dark(var(--mantine-color-gray-4), var(--mantine-color-dark-8))"
          className="fixed bottom-0 left-0 right-0 justify-center py-2 shadow-md"
        >
          <Anchor href="/uown/term-of-service" underline="never">
            Terms of Service
          </Anchor>
          <Anchor href="/uown/privacy-policy" underline="never">
            Privacy Policy
          </Anchor>
        </Group>
      </AppShellFooter>
    </AppShell>
  );
}
