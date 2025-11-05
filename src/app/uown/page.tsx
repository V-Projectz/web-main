import { Title, Text, Container, Paper, Stack, Group, Anchor } from "@mantine/core";
import Image from "next/image";
import uownLogo from "@/assets/svgs/u-own-logo.svg";

// ========================================================================= //
export default function UOwnPage() {
  return (
    <Container size="sm" className="min-h-screen flex flex-col items-center text-center py-10">
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
      {/* Footer Links */}
      <Group align="center">
        <Anchor href="/uown/term-of-service" underline="never">Term of Service</Anchor>
        <Anchor href="/uown/privacy-policy" underline="never">Privacy Policy</Anchor>
      </Group>
    </Container>
  );
}