import { Package, PackageType } from "@revenuecat/purchases-js";
import { BUSINESS_PLAN_META, type Plan } from "./types";

/** */
/** */
export function mapRCPackagesToPlan(packages: Package[]): Plan {
  const monthly = packages.find((p) => p.packageType === PackageType.Monthly || p.webBillingProduct.period?.unit === "month");
  const yearly = packages.find((p) => p.packageType === PackageType.Annual || p.webBillingProduct.period?.unit === "year");
  const product = monthly?.webBillingProduct ?? yearly!.webBillingProduct;
  const id = product.identifier.replace(/_(monthly|yearly)$/, "");
  const meta = BUSINESS_PLAN_META[id];
  //
  if (!meta) {
    throw new Error(`Missing BUSINESS_PLAN_META for "${id}"`);
  }
  //
  return {
    id,
    ...meta,
    pricing: {
      monthly: monthly?.webBillingProduct.price ?? null,
      yearly: yearly?.webBillingProduct.price ?? null,
    },
  };
}
