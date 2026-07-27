import { ButtonVariant } from "@mantine/core";
import { Price } from "@revenuecat/purchases-js";

/** View type for the UI */
export interface Plan {
  id: string;
  name: string;
  popular: boolean;
  pricing: {
    monthly: Price | null;
    yearly: Price | null;
  };
  buttonText: string;
  buttonVariant: ButtonVariant;
  features: string[];
}

/** */
export interface PlanMeta {
  name: string;
  order: number;
  popular: boolean;
  buttonText: string;
  buttonVariant: ButtonVariant;
  features: string[];
}

/** */
export const BUSINESS_PLAN_META: Record<string, PlanMeta> = {
  business_free: {
    name: "Free",
    order: 0,
    popular: false,
    buttonText: "Get Started",
    buttonVariant: "light",
    features: ["1 Business", "Basic reports", "1.5% Transaction fee"],
  },
  business_pro: {
    name: "Pro",
    order: 1,
    popular: true,
    buttonText: "Upgrade",
    buttonVariant: "filled",
    features: ["Max 3 Businesses", "Advanced reports", "0.6% Transaction fee"],
  },
  business_enterprise: {
    name: "Enterprise",
    order: 2,
    popular: false,
    buttonText: "Upgrade",
    buttonVariant: "filled",
    features: ["Unlimited Businesses", "Unlock all features", "Priority support", "0.1% Transaction fee"],
  },
} as const;

/** */
export const FREE_PLAN: Plan = {
  id: "free",
  pricing: {
    monthly: null,
    yearly: null,
  },
  ...BUSINESS_PLAN_META.business_free,
};
