"use client";

import { Assets } from "@/assets";
import { AppDownloadButton } from "@/components";
import { Container, Paper, Stack, Text, Title } from "@mantine/core";
import Image from "next/image";
import { AppInfo } from "./constant";

// ========================================================================= //
export default function ZentrobizPage() {
  const appName = "ZentroBiz";
  //
  return (
    <Container size="sm" className="relative flex flex-col items-center text-center py-10">
      {/* Logo */}
      <Paper shadow="md" radius="xl" p="xs" mb="md" bg="var(--mantine-color-text)" className="flex items-center justify-center">
        <Image alt={`${appName} Logo`} src={Assets.svgs.zentroBizLogo} width={100} height={100} />
      </Paper>
      {/* Title & Description */}
      <Stack align="center" mb="xl">
        <Title order={1}>{appName}</Title>
        <Text size="md">{`Welcome to ${appName} application main page!`}</Text>
      </Stack>
      {/* Download section */}
      <Stack gap="md" align="stretch">
        <AppDownloadButton
          icon={Assets.svgs.appleIcon}
          title="Apple Store"
          topSubtitle="Download from the"
          onClick={() => (window.location.href = AppInfo.appStoreUrl)}
        />
        <AppDownloadButton
          icon={Assets.svgs.playStoreIcon}
          title="Play Store"
          topSubtitle="Download from the"
          onClick={() => (window.location.href = AppInfo.playStoreUrl)}
        />
      </Stack>
    </Container>
  );
}
