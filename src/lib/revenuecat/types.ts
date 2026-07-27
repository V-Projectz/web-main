///
export interface Plan {
  name: string;
  popular: boolean;
  pricing: {
    monthly: number;
    yearly: number;
  };
  buttonText: string;
  variant: "light" | "filled" | "default";
  features: string[];
}
