import { ChevronDown } from "lucide-react";
import { renderContent } from "../utils/contentRenderer.jsx";

export default function PolicyCard({ policy, isExpanded, onToggle }) {
  return (
    <div
      className={`policy-card ${isExpanded ? 'expanded' : ''}`}
      onClick={onToggle}
    >
      {/* Card Header */}
      <div className="policy-card-header">
        <div className="policy-card-meta">
          <div className="policy-card-title">{policy.title}</div>
          <div className="policy-card-summary">{policy.summary}</div>
        </div>
        
        <div className="policy-card-right">
          <span className="policy-category-tag">{policy.category}</span>
          <ChevronDown size={18} className="policy-card-chevron" />
        </div>
      </div>

      {/* Card Body (Expanded) */}
      {isExpanded && (
        <div className="policy-card-body">
          <div className="policy-content">
            {renderContent(policy.content)}
          </div>
          
          <div className="policy-tag-row">
            {policy.tags.map((t) => (
              <span key={t} className="policy-tag">#{t}</span>
            ))}
            <span className="policy-updated">
              Diperbarui: {policy.lastUpdated}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
