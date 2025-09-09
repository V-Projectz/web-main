import { MarkdownRenderer } from "@/components/markdown-renderer";
import { Container, Stack, Title, Text, Divider } from "@mantine/core";
import fs from "fs";
import path from "path";

// ========================================================================= //
export default function UOwnDeleteAccountPage() {
  // This only runs on the server!
  const filePath = path.join(process.cwd(), "public/md/uown-delete-account.md");
  const mdContent = fs.readFileSync(filePath, "utf-8");
  const stats = fs.statSync(filePath);
  const lastModified = stats.mtime.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  ///
  return (
    <Container size="sm" py="md">
      <Stack gap="md">
        <Title order={1} ta="center">Delete Your U-Own Account</Title>
        <Text c="dimmed" ta="center" size="sm" mb="lg">Last Updated: {lastModified}</Text>
        <Divider my="md" />
        <MarkdownRenderer content={mdContent} />
        <Text ta="center" size="sm" c="dimmed">© {new Date().getFullYear()} V-Projectz LLC. All rights reserved.</Text>
      </Stack>
    </Container>
  );
}