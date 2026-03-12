import { SearchX } from "lucide-react";
import PolicyCard from "./PolicyCard";

export default function PolicyList({ policies, expandedId, onToggleExpand }) {
  if (policies.length === 0) {
    return (
      <div className="policy-list-empty">
        <SearchX size={48} className="policy-list-empty-icon" />
        <div className="policy-list-empty-text">Kebijakan tidak ditemukan</div>
      </div>
    );
  }

  return (
    <div className="policy-list">
      {policies.map((policy) => (
        <PolicyCard
          key={policy.id}
          policy={policy}
          isExpanded={expandedId === policy.id}
          onToggle={() => onToggleExpand(expandedId === policy.id ? null : policy.id)}
        />
      ))}
    </div>
  );
}
