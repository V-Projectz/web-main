import { getZentroBizBusinessPlans } from "@/lib/revenuecat";
import { getZentroBizAuthenticatedUser } from "@/lib/supabase";
import PricingView from "./view";

/** */
interface PricingPageProps {
  searchParams: Promise<{
    access_token?: string;
  }>;
}

/** */
export default async function PricingPage({ searchParams }: PricingPageProps) {
  try {
    const { access_token } = await searchParams;
    const user = await getZentroBizAuthenticatedUser(access_token);
    const { userId, userAuth } = user;
    if (!userAuth || !userId) {
      return <PricingView plans={[]} error="Missing authentication. Please try to open this page from the ZentroBiz app" />;
    }
    const plans = await getZentroBizBusinessPlans(userId);
    return <PricingView plans={plans} user={user} />;
  } catch (err) {
    console.error("Unable to load pricing plans", err);
    return <PricingView plans={[]} error={err instanceof Error ? err.message : "Unable to load pricing plans"} />;
  }
}
