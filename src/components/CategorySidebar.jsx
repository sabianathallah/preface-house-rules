import { Mail } from "lucide-react";
import { categoryIcons } from "../utils/categories";
import { COLORS } from "../utils/constants";

export default function CategorySidebar({ 
  categories, 
  activeCategory, 
  onCategoryChange, 
  categoryCounts 
}) {
  return (
    <aside className="sidebar">
      <div className="sidebar-label">Kategori</div>
      
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        const IconComponent = categoryIcons[cat];
        
        return (
          <button
            key={cat}
            className={`category-button ${isActive ? 'active' : ''}`}
            onClick={() => onCategoryChange(cat)}
          >
            <IconComponent size={18} strokeWidth={2} />
            <span className="category-button-text">{cat}</span>
            <span className="category-count-badge">
              {categoryCounts[cat] || 0}
            </span>
          </button>
        );
      })}

      <div className="help-box">
        <Mail size={16} style={{ color: COLORS.primary, flexShrink: 0, marginTop: "2px" }} />
        <div>
          <div className="help-title">Perlu Bantuan?</div>
          <div className="help-text">
            Hubungi tim HR via email:{" "}
            <a href="mailto:sabian.athallah05@gmail.com">
              sabian.athallah05@gmail.com
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
