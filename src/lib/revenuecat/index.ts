import "server-only";

import { Purchases } from "@revenuecat/purchases-js";

///
const instances = new Map<string, Purchases>();

///
function getPurchases(apiKey: string, appUserId: string) {
  const key = `${apiKey}:${appUserId}`;
  if (!instances.has(key)) {
    instances.set(
      key,
      Purchases.configure({
        apiKey,
        appUserId,
      })
    );
  }
  return instances.get(key)!;
}

///
export function getZentroBizPurchases(appUserId: string) {
  return getPurchases(process.env.REVENUECAT_ZENTROBIZ_WEB_BILLING_API_KEY!, appUserId);
}

///
export function getUOwnPurchases(appUserId: string) {
  return getPurchases(process.env.REVENUECAT_UOWN_WEB_BILLING_API_KEY!, appUserId);
}
