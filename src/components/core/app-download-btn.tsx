"use client";

import { Button, ButtonProps, Stack, Text } from "@mantine/core";
import Image, { StaticImageData } from "next/image";

///
interface AppDownloadButtonProps extends ButtonProps {
  icon: StaticImageData | string;
  title: string;
  topSubtitle: string;
  onClick?: () => void;
}

///
export function AppDownloadButton({ icon, title, topSubtitle, onClick, ...buttonProps }: AppDownloadButtonProps) {
  return (
    <Button
      variant="filled"
      color="dark"
      radius="lg"
      h="auto"
      py="xs"
      px="md"
      onClick={onClick}
      leftSection={<Image src={icon} alt={title} width={35} height={35} />}
      styles={{
        inner: {
          display: "flex",
          alignItems: "center",
          gap: 12,
        },
      }}
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
