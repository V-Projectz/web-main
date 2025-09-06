import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import { Title, Text, Divider, Container, Stack } from "@mantine/core";

// ========================================================================= //
export default function UOwnPrivacyPolicyPage() {
  // This only runs on the server!
  const filePath = path.join(process.cwd(), "public/md/uown-privacy-policy.md");
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
        <Title order={1} ta="center">U-Own Application Privacy Policy</Title>
        <Text c="dimmed" ta="center" size="sm" mb="lg">Last Updated: {lastModified}</Text>
        <Divider my="md" />
        <ReactMarkdown
          components={{
            h1: ({ ...props }) => <Title order={1} {...props} />,
            h2: ({ ...props }) => <Title order={2} {...props} />,
            h3: ({ ...props }) => <Title order={3} {...props} />,
            hr: ({ ...props }) => <Divider my="md" {...props} />,
          }}
        >
          {mdContent}
        </ReactMarkdown>
        <Text ta="center" size="sm" c="dimmed">© {new Date().getFullYear()} V-Projectz LLC. All rights reserved.</Text>
      </Stack>
    </Container>
  );
}