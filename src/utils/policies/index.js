import { kesehatanBPJSPolicies } from "./kesehatanBPJS";
import { lemburKompensasiPolicies } from "./lemburKompensasi";
import { cutiAbsensiPolicies } from "./cutiAbsensi";
import { kodeEtikPolicies } from "./kodeEtik";
import { formulirLinkPolicies } from "./formulirLink";
import { informasiPengumumanPolicies } from "./informasiPengumuman";
import { aturanDisiplinPolicies } from "./aturanDisiplin";

// Gabungkan semua policies
export const allPolicies = [
  ...kesehatanBPJSPolicies,
  ...lemburKompensasiPolicies,
  ...cutiAbsensiPolicies,
  ...kodeEtikPolicies,
  ...formulirLinkPolicies,
  ...informasiPengumumanPolicies,
  ...aturanDisiplinPolicies,
];

// Export individual categories
export {
  kesehatanBPJSPolicies,
  lemburKompensasiPolicies,
  cutiAbsensiPolicies,
  kodeEtikPolicies,
  formulirLinkPolicies,
  informasiPengumumanPolicies,
  aturanDisiplinPolicies,
};

// Helper: Get policies by category
export const getPoliciesByCategory = (categoryName) => {
  if (categoryName === "Semua") {
    return allPolicies;
  }
  return allPolicies.filter((policy) => policy.category === categoryName);
};

// Helper: Get unique categories
export const getCategories = () => {
  const uniqueCategories = [...new Set(allPolicies.map((p) => p.category))];
  return ["Semua", ...uniqueCategories];
};

// Helper: Get policy by ID
export const getPolicyById = (id) => {
  return allPolicies.find((policy) => policy.id === id);
};

// Helper: Search policies
export const searchPolicies = (query) => {
  const q = query.toLowerCase();
  return allPolicies.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.summary.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q)) ||
      p.content.toLowerCase().includes(q)
  );
};
