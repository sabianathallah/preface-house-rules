import { Search } from "lucide-react";
import { APP_NAME, APP_DESCRIPTION, SEARCH_PLACEHOLDER } from "../utils/constants";

export default function Header({ searchQuery, onSearchChange }) {
  return (
    <header className="header">
      <div className="header-inner">
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
