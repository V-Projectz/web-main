import { Assets } from "@/assets";
import { AppHeader } from "@/components";
import { Anchor, AppShell, AppShellFooter, AppShellMain, Badge, Group, Text, Title } from "@mantine/core";
import Image from "next/image";

///
export default function ZentrobizLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppShell>
      <AppHeader
        title={
          <Group gap="xs" align="center">
            <Image src={Assets.svgs.vprojectzLogo} alt="Logo" width={40} />
            <Text c="dimmed" fw={300} className="text-3xl">
              /
            </Text>
            <Image src={Assets.svgs.zentroBizLogo} alt="Logo" width={45} />
            <Title size={25} fw={700}>
              ZentroBiz
            </Title>
            <Badge color="green">Beta</Badge>
          </Group>
        }
      />
      <AppShellMain
        pt={0}
        mb={50}
        style={{
          minHeight: "auto",
        }}
      >
        {children}
      </AppShellMain>
      {/* Footer Links */}
      <AppShellFooter withBorder p="md">
        <Group h="100%" justify="center" gap="md">
          <Anchor href="/zentrobiz/term-of-service" underline="never">
            Terms of Service
          </Anchor>
          <Anchor href="/zentrobiz/privacy-policy" underline="never">
            Privacy Policy
          </Anchor>
        </Group>
      </AppShellFooter>
    </AppShell>
  );
}
