import { useState, useMemo } from "react";
import { allPolicies, getCategories } from "../utils/policies";
import { countByCategory } from "../utils/helpers";
import { filterPolicies } from "../utils/filters";
import WelcomePage from "./WelcomePage";
import Header from "./Header";
import CategorySidebar from "./CategorySidebar";
import PolicyList from "./PolicyList";
import Footer from "./Footer";

export default function CompanyRules() {
  const [hasEntered, setHasEntered] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState(null);

  // Get all categories
  const categories = useMemo(() => getCategories(), []);

  // Filter policies based on category and search
  const filteredPolicies = useMemo(() => {
    return filterPolicies(allPolicies, activeCategory, searchQuery);
  }, [activeCategory, searchQuery]);

  // Count policies by category
  const categoryCounts = useMemo(() => {
    const counts = countByCategory(allPolicies);
    counts["Semua"] = allPolicies.length;
    return counts;
  }, []);

  // If user hasn't entered yet, show welcome page
  if (!hasEntered) {
    return <WelcomePage onEnter={() => setHasEntered(true)} />;
  }

  return (
    <div className="app-root">
      <Header 
        searchQuery={searchQuery} 
        onSearchChange={setSearchQuery} 
      />

      <div className="app-body">
        <CategorySidebar
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          categoryCounts={categoryCounts}
        />

        <main className="app-main">
          <PolicyList
            policies={filteredPolicies}
            expandedId={expandedId}
            onToggleExpand={setExpandedId}
          />
        </main>
      </div>

      <Footer />
    </div>
  );
}
