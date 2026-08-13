/** Figma Deposit & Withdrawals wordmarks (colour=off) — `28259:298800`. */

export type FundingLogo = {
  id: string;
  label: string;
  src: string;
};

const catalog: Record<string, FundingLogo> = {
  icashone: { id: "icashone", label: "iCashOne", src: "/brand/funding/icashone.svg" },
  pix: { id: "pix", label: "Pix", src: "/brand/funding/pix.svg" },
  interac: { id: "interac", label: "Interac", src: "/brand/funding/interac.svg" },
  fasapay: { id: "fasapay", label: "FasaPay", src: "/brand/funding/fasapay.svg" },
  skrill: { id: "skrill", label: "Skrill", src: "/brand/funding/skrill.svg" },
  neteller: { id: "neteller", label: "Neteller", src: "/brand/funding/neteller.svg" },
  "apple-pay": { id: "apple-pay", label: "Apple Pay", src: "/brand/funding/apple-pay.svg" },
  visa: { id: "visa", label: "VISA", src: "/brand/funding/visa.svg" },
  mastercard: { id: "mastercard", label: "Mastercard", src: "/brand/funding/mastercard.svg" },
  payid: { id: "payid", label: "PayID", src: "/brand/funding/payid.svg" },
  "bank-transfer": { id: "bank-transfer", label: "Bank transfer", src: "/brand/funding/bank-transfer.svg" },
  paypal: { id: "paypal", label: "PayPal", src: "/brand/funding/paypal.svg" },
  crypto: { id: "crypto", label: "Crypto", src: "/brand/funding/crypto.svg" },
};

const aliases: Record<string, string> = {
  visa: "visa",
  applepay: "apple-pay",
  "apple-pay": "apple-pay",
  mastercard: "mastercard",
  paypal: "paypal",
  payid: "payid",
  "bank-transfer": "bank-transfer",
  banktransfer: "bank-transfer",
  crypto: "crypto",
  skrill: "skrill",
  pix: "pix",
  interac: "interac",
  fasapay: "fasapay",
  icashone: "icashone",
  neteller: "neteller",
};

export const defaultFundingLogoIds = [
  "icashone",
  "pix",
  "interac",
  "fasapay",
  "skrill",
  "neteller",
  "apple-pay",
  "visa",
  "mastercard",
  "payid",
  "bank-transfer",
  "paypal",
  "crypto",
] as const;

function slug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function resolveFundingLogos(providers: readonly string[]): FundingLogo[] {
  const seen = new Set<string>();
  const logos: FundingLogo[] = [];
  for (const provider of providers) {
    const key = aliases[slug(provider)] ?? slug(provider);
    const logo = catalog[key];
    if (!logo || seen.has(logo.id)) continue;
    seen.add(logo.id);
    logos.push(logo);
  }
  return logos;
}
