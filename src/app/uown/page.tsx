"use client";

import { Assets } from "@/assets";
import { AppDownloadButton } from "@/components";
import { Anchor, Container, Group, Paper, Stack, Text, Title, useComputedColorScheme, useMantineTheme } from "@mantine/core";
import Image from "next/image";
import { APP_STORE_URL, PLAY_STORE_URL } from "./constants";

// ========================================================================= //
export default function UOwnPage() {
  const appName = "U-Own";
  const theme = useMantineTheme();
  const colorScheme = useComputedColorScheme();
  const footerBgColor = colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[4];
  ///
  return (
    <Container size="sm" style={{ minHeight: "100%" }} className="relative flex flex-col items-center text-center py-10">
      {/* Logo */}
      <Paper shadow="md" radius="xl" p="xs" className="flex items-center justify-center mb-6 bg-white">
        <Image alt={`${appName} Logo`} src={Assets.svgs.uownLogo} width={100} height={100} />
      </Paper>
      {/* Title & Description */}
      <Stack align="center" mb="xl">
        <Title order={1}>{appName}</Title>
        <Text size="md">{`Welcome to ${appName} application main page!`}</Text>
      </Stack>
      {/* Download section */}
      <Stack gap="md" align="center">
        <AppDownloadButton
          icon={Assets.svgs.appleIcon}
          title="Apple Store"
          topSubtitle="Download from the"
          onClick={() => (window.location.href = APP_STORE_URL)}
        />
        <AppDownloadButton
          icon={Assets.svgs.playStoreIcon}
          title="Play Store"
          topSubtitle="Download from the"
          onClick={() => (window.location.href = PLAY_STORE_URL)}
        />
      </Stack>
      {/* Footer Links */}
      <Group align="center" bg={footerBgColor} className="fixed bottom-0 left-0 right-0 justify-center py-2 shadow-md">
        <Anchor href="/uown/term-of-service" underline="never">
          Term of Service
        </Anchor>
        <Anchor href="/uown/privacy-policy" underline="never">
          Privacy Policy
        </Anchor>
      </Group>
    </Container>
  );
}
