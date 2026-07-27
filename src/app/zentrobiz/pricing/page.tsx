import { getZentroBizPurchases } from "@/lib/revenuecat";
import PricingView from "./view";

///
export default async function PricingPage() {
  const offerings = await getZentroBizPurchases("123");

  // Transform RevenueCat -> your UI model
  const plans = mapOfferingsToPlans(offerings);

  return <PricingView plans={plans} />;
}
