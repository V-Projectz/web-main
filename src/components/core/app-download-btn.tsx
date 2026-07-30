"use client";

import { Box, Button, ButtonProps, Stack, Text, useComputedColorScheme } from "@mantine/core";
import Image, { StaticImageData } from "next/image";

/** */
interface AppDownloadButtonProps extends ButtonProps {
  icon: StaticImageData | string;
  title: string;
  topSubtitle: string;
  onClick?: () => void;
}

/** */
export function AppDownloadButton({ icon, title, topSubtitle, onClick, ...buttonProps }: AppDownloadButtonProps) {
  const colorScheme = useComputedColorScheme();
  //
  return (
    <Button
      variant="filled"
      radius="lg"
      h="auto"
      py="xs"
      px="md"
      onClick={onClick}
      styles={{
        root: {
          backgroundColor: "var(--mantine-color-text)",
          color: "var(--mantine-color-body)",
        },
        inner: {
          display: "flex",
          alignItems: "center",
          gap: 12,
        },
      }}
      leftSection={
        <Box
          style={{
            filter: colorScheme === "dark" ? "drop-shadow(0 0 10px rgba(0,0,0,.3))" : "drop-shadow(0 0 10px rgba(255,255,255,.3))",
          }}
        >
          <Image src={icon} alt={title} width={35} height={35} />
        </Box>
      }
      {...buttonProps}
    >
      <Stack gap={0} align="flex-start">
        <Text size="sm" lh={1.2}>
          {topSubtitle}
        </Text>
        <Text size="md" fw={700} lh={1.2}>
          {title}
        </Text>
      </Stack>
    </Button>
  );
}
