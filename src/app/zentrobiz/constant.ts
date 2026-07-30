/** */
export const AppInfo = {
  companyName: "V-Projectz",
  name: "ZentroBiz",
  packageName: "com.vprojectz.zentrobiz",
  appStoreId: "6771093240",
  //
  get playStoreUrl() {
    return `https://play.google.com/store/apps/details?id=${this.packageName}`;
  },
  //
  get appStoreUrl() {
    return `https://apps.apple.com/app/id${this.appStoreId}`;
  },
} as const;
