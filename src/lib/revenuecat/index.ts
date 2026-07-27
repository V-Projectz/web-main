import "server-only";

import { Package, Purchases } from "@revenuecat/purchases-js";
import { mapRCPackagesToPlan } from "./helpers";
import { FREE_PLAN, Plan } from "./types";

/** */
export function createRevenueCatClient(appUserId: string) {
  return Purchases.configure({
    apiKey: process.env.REVENUECAT_ZENTROBIZ_WEB_BILLING_API_KEY!,
    appUserId,
  });
}

/** */
export async function getZentroBizBusinessPlans(appUserId: string): Promise<Plan[]> {
  const purchases = createRevenueCatClient(appUserId);
  const offerings = await purchases.getOfferings();
  const businessOffering = offerings.all["business"];
  //
  if (!businessOffering) {
    return [FREE_PLAN];
  }
  //
  const groupedPlans = new Map<string, Package[]>();
  for (const pkg of businessOffering.availablePackages) {
    // ID business_pro_monthly => business_pro
    // ID business_enterprise_yearly => business_enterprise
    const planId = pkg.webBillingProduct.identifier.replace(/_(monthly|yearly)$/, "");
    groupedPlans.set(planId, [...(groupedPlans.get(planId) ?? []), pkg]);
  }
  return [
    FREE_PLAN,
    ...Array.from(groupedPlans.values())
      .map(mapRCPackagesToPlan)
      // Sort by price
      .sort((a, b) => {
        const aPrice = a.pricing.monthly?.amountMicros ?? a.pricing.yearly?.amountMicros ?? 0;
        const bPrice = b.pricing.monthly?.amountMicros ?? b.pricing.yearly?.amountMicros ?? 0;
        return aPrice - bPrice;
      }),
  ];
}
