"use client";

import { Plan } from "@/lib/revenuecat/types";
import { AuthenticatedUser } from "@/lib/supabase/types";
import { Alert, Badge, Box, Button, Card, Container, Group, List, Space, Stack, Switch, Text, ThemeIcon, Title } from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import { IconCheck, IconExclamationCircle, IconSparkles } from "@tabler/icons-react";

/** */
interface ViewProps {
  user?: AuthenticatedUser;
  plans: Plan[];
  error?: string;
}

/** */
export default function PricingView({ user, plans, error }: ViewProps) {
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
  //
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
          {/*  */}
          <Space h={10}></Space>
          {user && (
            <Text
              ta="center"
              dangerouslySetInnerHTML={{
                __html: `Welcome, <strong>${user.displayName}</strong>! Choose the plan that's right for you.`,
              }}
            />
          )}
          {/* Billing Toggle */}
          {!error && (
            <Group gap="md" align="center">
              {/*  */}
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
          )}
        </Stack>
      </Container>
      {/* Full-width pricing section */}
      <Box
        style={{
          width: "100%",
          maxWidth: "100vw",
          overflowX: "auto",
          overflowY: "hidden",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {!error ? (
          <Box w="fit-content" mx="auto" px="md">
            <Group wrap="nowrap" align="stretch" gap="lg">
              {plans.map((plan) => (
                <PricingCard key={plan.name} plan={plan} billing={billing} buttonColor={billingConfig.color} />
              ))}
            </Group>
          </Box>
        ) : (
          <Alert color="red" title="Unable to load pricing..." maw={"90%"} mx="auto" icon={<IconExclamationCircle />}>
            {error}
          </Alert>
        )}
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
/** */
interface PricingCardProps {
  plan: Plan;
  billing: "monthly" | "yearly";
  buttonColor: string;
}

/** */
function PricingCard({ plan, billing, buttonColor }: PricingCardProps) {
  const price = plan.pricing[billing];
  const isFree = !price;
  const subtitle = isFree ? "Forever free" : billing === "monthly" ? "Per month" : "Per year";
  const monthlyAmount = plan.pricing.monthly?.amount ?? 0;
  const yearlyAmount = plan.pricing.yearly?.amount ?? 0;
  const yearlyWithoutDiscount = monthlyAmount * 12;
  const savingsPercent = yearlyWithoutDiscount > 0 ? Math.round(((yearlyWithoutDiscount - yearlyAmount) / yearlyWithoutDiscount) * 100) : 0;
  //
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
            <Title order={1}>{isFree ? "$0.00" : price.formattedPrice}</Title>
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
        <Button mt="auto" fullWidth radius="xl" color={buttonColor} variant={plan.buttonVariant}>
          {plan.buttonText}
        </Button>
      </Stack>
    </Card>
  );
}
