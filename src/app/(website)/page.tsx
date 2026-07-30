import { Anchor, Card, Container, Divider, Stack, Text, Title } from "@mantine/core";

// ========================================================================= //
export default function WebsitePage() {
  return (
    <Container size="md" py="xl">
      <Stack gap="xl" align="center" className="text-center">
        {/* Hero Section */}
        <Title order={1}>Welcome to V-Projectz LLC</Title>
        <Text size="lg" c="dimmed" maw={600}>
          We are a Minnesota-based technology company focused on building innovative apps and digital solutions. Our goal is to make everyday tasks
          easier and more connected.
        </Text>
        <Divider my="lg" />
        {/* About Section */}
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Stack gap="sm">
            <Title order={2}>About Us</Title>
            <Text>
              V-Projectz LLC was founded in Saint Paul, MN. We develop mobile and web applications to bring new ideas to life. Our upcoming projects
              focus on community-driven platforms and productivity tools.
            </Text>
          </Stack>
        </Card>
        {/* Contact Section */}
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Stack gap="sm">
            <Title order={2}>Contact Us</Title>
            <Text>📍 323 Charles Ave, Saint Paul, MN 55103-2008</Text>
            <Text>📞 +1 (408) 564-3654</Text>
            <Text>
              ✉️ <Anchor href="mailto:dev@vprojectz.com">dev@vprojectz.com</Anchor>
            </Text>
            <Text>
              Visit us at:{" "}
              <Anchor href="https://www.vprojectz.com" target="_blank">
                vprojectz.com
              </Anchor>
            </Text>
          </Stack>
        </Card>
        {/* Disclaimer */}
        <Text size="sm" c="dimmed" mt="lg">
          Note: This site is a work in progress. More updates coming soon.
        </Text>
      </Stack>
    </Container>
  );
}
