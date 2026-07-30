import { MarkdownRenderer } from "@/components/core/markdown-renderer";
import { Container, Divider, Stack, Text, Title } from "@mantine/core";
import fs from "fs";
import path from "path";

// ========================================================================= //
export default function TermOfServicePage() {
  // This only runs on the server!
  const filePath = path.join(process.cwd(), "public/md/zentrobiz-term-of-service.md");
  const mdContent = fs.readFileSync(filePath, "utf-8");
  const stats = fs.statSync(filePath);
  const lastModified = stats.mtime.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  ///
  return (
    <Container size="sm" py="md">
      <Stack gap="md">
        <Title order={1} ta="center">
          ZentroBiz Application Term of Service
        </Title>
        <Text c="dimmed" ta="center" size="sm" mb="lg">
          Last Updated: {lastModified}
        </Text>
        <Divider my="md" />
        <MarkdownRenderer content={mdContent} />
        <Text ta="center" size="sm" c="dimmed">
          © {new Date().getFullYear()} V-Projectz LLC. All rights reserved.
        </Text>
      </Stack>
    </Container>
  );
}
