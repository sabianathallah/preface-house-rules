import { Mail } from "lucide-react";
import { categoryIcons } from "../utils/categories";
import { COLORS } from "../utils/constants";

export default function CategorySidebar({ 
  categories, 
  activeCategory, 
  onCategoryChange, 
  categoryCounts,
  isOpen,
  onClose
}) {
  const handleCategoryClick = (cat) => {
    onCategoryChange(cat);
    // Close menu after selection on mobile
    if (onClose && window.innerWidth < 768) {
      onClose();
    }
  };

  return (
    <>
      {/* Mobile Overlay Backdrop */}
      {isOpen && (
        <div className="sidebar-overlay" onClick={onClose} />
      )}
      
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-label">Kategori</div>
        
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          const IconComponent = categoryIcons[cat];
          
          return (
            <button
              key={cat}
              className={`category-button ${isActive ? 'active' : ''}`}
              onClick={() => handleCategoryClick(cat)}
            >
              <IconComponent size={20} strokeWidth={2} />
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
    </>
  );
}
