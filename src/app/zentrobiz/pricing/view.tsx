"use client";

import { Plan } from "@/lib/revenuecat/types";
import { Badge, Box, Button, Card, Container, Group, List, Stack, Switch, Text, ThemeIcon, Title } from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import { IconCheck, IconSparkles } from "@tabler/icons-react";

// ///
// const plans = [
//   {
//     name: "Free",
//     popular: false,
//     pricing: {
//       monthly: 0,
//       yearly: 0,
//     },
//     buttonText: "Get Started",
//     variant: "light" as const,
//     features: ["1 Business", "Basic reports", "1.5% Transaction fee"],
//   },
//   {
//     name: "Pro",
//     popular: true,
//     pricing: {
//       monthly: 25.99,
//       yearly: 249.99,
//     },
//     buttonText: "Upgrade",
//     variant: "filled" as const,
//     features: ["Max 3 Businesses", "Advanced reports", "0.6% Transaction fee"],
//   },
//   {
//     name: "Enterprise",
//     popular: false,
//     pricing: {
//       monthly: 59.99,
//       yearly: 575.99,
//     },
//     buttonText: "Upgrade",
//     variant: "filled" as const,
//     features: ["Unlimited Businesses", "Unlock all features", "Priority support", "0.1% Transaction fee"],
//   },
// ] as const;

interface ViewProps {
  plans: Plan[];
}

///
export default function PricingView({ plans }: ViewProps) {
  const billingOptions = {
    monthly: {
      label: "Monthly",
      color: "green",
      subtitle: "Per month",
    },
    yearly: {
      label: "Yearly",
      color: "violet",
      subtitle: "Per year",
    },
  } as const;
  const [billing, toggleBilling] = useToggle(["monthly", "yearly"] as const);
  const billingConfig = billingOptions[billing];

  ///
  return (
    <div className="my-[20px]">
      <Container size="xl">
        <Stack align="center" gap="xs" mb={20}>
          <Badge size="lg" variant="light">
            Business Plans
          </Badge>
          <Title order={1} ta="center">
            Simple Pricing for Every Business
          </Title>
          <Text c="dimmed" ta="center" maw={520}>
            Start free. Upgrade only when you need more features.
          </Text>
          {/* Billing Toggle */}
          <Group gap="md" align="center" mt={20}>
            <Text fw={600} c={billing === "monthly" ? billingOptions.monthly.color : "dimmed"}>
              Monthly
            </Text>
            <Switch
              withThumbIndicator={false}
              checked={billing === "yearly"}
              onChange={() => toggleBilling()}
              size="lg"
              styles={{
                track: {
                  backgroundColor: `var(--mantine-color-${billingConfig.color}-6)`,
                  borderColor: `var(--mantine-color-${billingConfig.color}-6)`,
                },
                thumb: {
                  borderColor: `var(--mantine-color-${billingConfig.color}-6)`,
                },
              }}
            />
            <Text fw={600} c={billing === "yearly" ? billingOptions.yearly.color : "dimmed"}>
              Yearly
            </Text>
          </Group>
        </Stack>
      </Container>
      {/* Full-width pricing section */}
      <Box
        style={{
          width: "100vw",
          marginLeft: "calc(50% - 50vw)",
          overflowX: "auto",
          overflowY: "hidden",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <Group wrap="nowrap" align="stretch" gap="lg" w="max-content" px="md">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} billing={billing} buttonColor={billingConfig.color} />
          ))}
        </Group>
      </Box>
      {/*  */}
      <Container size="xl" py="xl">
        <Text ta="center" c="dimmed" size="sm">
          Cancel anytime • No hidden fees • Secure payment
        </Text>
      </Container>
    </div>
  );
}

// ========================================================================= //
///
interface PricingCardProps {
  plan: (typeof plans)[number];
  billing: "monthly" | "yearly";
  buttonColor: string;
}

///
function PricingCard({ plan, billing, buttonColor }: PricingCardProps) {
  const price = plan.pricing[billing];
  const subtitle = price === 0 ? "Forever free" : billing === "monthly" ? "Per month" : "Per year";
  const monthlyPrice = plan.pricing.monthly;
  const yearlyPrice = plan.pricing.yearly;
  const yearlyWithoutDiscount = monthlyPrice * 12;
  const savings = yearlyWithoutDiscount > 0 ? yearlyWithoutDiscount - yearlyPrice : 0;
  const savingsPercent = yearlyWithoutDiscount > 0 ? Math.round((savings / yearlyWithoutDiscount) * 100) : 0;
  ///
  return (
    <Card
      withBorder
      shadow={plan.popular ? "lg" : "sm"}
      radius="xl"
      p="xl"
      style={{
        minWidth: 320,
        maxWidth: 360,
        flex: "1 0 320px",
      }}
    >
      <Stack h="100%">
        <Group justify="space-between">
          <Title order={3}>{plan.name}</Title>
          {plan.popular && (
            <Badge color="yellow" leftSection={<IconSparkles size={12} />}>
              Most Popular
            </Badge>
          )}
        </Group>
        <Stack gap={0}>
          <Group align="center">
            <Title order={1}>{price === 0 ? "Free" : `$${price.toFixed(2)}`}</Title>
            {billing === "yearly" && savingsPercent > 0 && (
              <Badge color="violet" variant="light">
                Save {savingsPercent}%
              </Badge>
            )}
          </Group>
          <Text c="dimmed">{subtitle}</Text>
        </Stack>
        <List
          mt="lg"
          spacing="md"
          icon={
            <ThemeIcon color={buttonColor} variant="light" radius="xl">
              <IconCheck size={14} />
            </ThemeIcon>
          }
        >
          {plan.features.map((feature) => (
            <List.Item key={feature}>{feature}</List.Item>
          ))}
        </List>
        <Button mt="auto" fullWidth radius="xl" color={buttonColor} variant={plan.variant}>
          {plan.buttonText}
        </Button>
      </Stack>
    </Card>
  );
}
