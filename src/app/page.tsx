import { ColorSchemeDropdown } from "@/components/color-schemes-switcher";
import { AppShell, AppShellHeader, AppShellMain, Group, Text, Title } from "@mantine/core";
import vprojectzLogo from "@/assets/svgs/v-projectz-logo.svg";
import Image from "next/image";
import { DisplayLottie } from "@/components/display-lottie";

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
      <AppShellMain className="text-center">
        <Title>Welcome to V-Projectz!</Title>
        <Text>{"This website is currently under heavy construction..."}</Text>
        <DisplayLottie
          src={"/lotties/site-under-construction.lottie"}
          loop
          autoplay
        />
      </AppShellMain>
    </AppShell>
  );
}
