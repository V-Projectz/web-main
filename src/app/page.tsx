import { ColorSchemeDropdown } from "@/components/color-schemes-switcher";
import { AppShell, AppShellHeader, AppShellMain, Group, Text, Title } from "@mantine/core";
import vprojectzLogo from "@/assets/v-projectz-logo.svg";
import Image from "next/image";

// ========================================================================= //
export default function RootPage() {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShellHeader>
        <Group className="h-full px-md">
          <Image alt="logo" className="" src={vprojectzLogo} width={45} height={45} />
          <Title className="grow" size={25} >V-Projectz</Title>
          <ColorSchemeDropdown />
        </Group>
      </AppShellHeader>
      <AppShellMain>
        <Text>Welcome to V-Projectz!</Text>
      </AppShellMain>
    </AppShell>
  );
}
