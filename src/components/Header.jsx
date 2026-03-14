import { Search, Menu, X } from "lucide-react";
import { APP_NAME, APP_DESCRIPTION, SEARCH_PLACEHOLDER } from "../utils/constants";
import { useEffect, useState } from "react";

export default function Header({ searchQuery, onSearchChange, onToggleSidebar, isSidebarOpen }) {
  const [showMenu, setShowMenu] = useState(false);

  // Sync button state dengan sidebar state
  useEffect(() => {
    setShowMenu(isSidebarOpen);
  }, [isSidebarOpen]);

  const handleMenuClick = () => {
    onToggleSidebar?.();
  };

  return (
    <header className="header">
      <div className="header-inner">
        {/* Sidebar Toggle Button - Mobile Only */}
        <button 
          className={`header-menu-button ${showMenu ? 'active' : ''}`}
          onClick={handleMenuClick}
          aria-label="Toggle menu"
        >
          {showMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Logo Section */}
        <div className="header-logo">
          <img 
            src="/logo-preface.jpeg" 
            alt="PREFACE Logo" 
            className="header-logo-image"
          />
          <div className="header-logo-text">
            <div className="header-brand-name">{APP_NAME}</div>
            <div className="header-brand-sub">{APP_DESCRIPTION}</div>
          </div>
        </div>
        
        {/* Spacer */}
        <div className="header-spacer" />
        
        {/* Search Section */}
        <div className="header-search-wrapper">
          <Search size={18} className="header-search-icon" />
          <input
            className="header-search"
            placeholder={SEARCH_PLACEHOLDER}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>
    </header>
  );
}
