"use client";

import { Title, Text, Container, Paper, Stack, Group, Anchor, useComputedColorScheme, useMantineTheme, Button } from "@mantine/core";
import Image from "next/image";
import uownLogo from "@/assets/svgs/u-own-logo.svg";
import appleIcon from "@/assets/svgs/apple-icon.svg";
import playStoreIcon from "@/assets/svgs/google-play-icon.svg";
import { APP_STORE_URL, PLAY_STORE_URL } from "./constants";

// ========================================================================= //
export default function UOwnPage() {
  const theme = useMantineTheme();
  const colorScheme = useComputedColorScheme();
  const footerBgColor = colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[4];
  ///
  return (
    <Container size="sm" className="relative min-h-screen flex flex-col items-center text-center py-10">
      {/* Logo */}
      <Paper shadow="md" radius="lg" p="xs" className="flex items-center justify-center mb-6 bg-white">
        <Image alt="U-Own Logo" src={uownLogo} width={100} height={100} />
      </Paper>
      {/* Title & Description */}
      <Stack align="center" mb="xl">
        <Title order={1}>U-Own</Title>
        <Text size="md">
          {"Welcome to U-Own application main page!"}
        </Text>
      </Stack>
      {/* Download section */}
      <Stack gap="md" align="center">
        <Button
          variant="filled"
          color="dark"
          radius="md"
          size="lg"
          onClick={() => window.location.href = APP_STORE_URL}
          styles={{
            inner: {
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "12px",
            },
          }}
          leftSection={<Image src={appleIcon} alt="Apple Store" width={35} height={35} />}
        >
          <Stack gap={0} align="flex-start">
            <Text size="sm">Download from the</Text>
            <Text size="md" fw={700}>App Store</Text>
          </Stack>
        </Button>

        <Button
          variant="filled"
          color="dark"
          radius="md"
          size="lg"
          onClick={() => window.location.href = PLAY_STORE_URL}
          styles={{
            inner: {
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "12px",
            },
          }}
          leftSection={<Image src={playStoreIcon} alt="Apple Store" width={35} height={35} />}
        >
          <Stack gap={0} align="flex-start">
            <Text size="sm">Download from the</Text>
            <Text size="md" fw={700}>Play Store</Text>
          </Stack>
        </Button>
      </Stack>
      {/* Footer Links */}
      <Group align="center" bg={footerBgColor} className="fixed bottom-0 left-0 right-0 justify-center py-2 shadow-md">
        <Anchor href="/uown/term-of-service" underline="never">Term of Service</Anchor>
        <Anchor href="/uown/privacy-policy" underline="never">Privacy Policy</Anchor>
      </Group>
    </Container>
  );
}