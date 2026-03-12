# 📁 PREFACE Handbook - Project Structure# 📁 Struktur Utils & Components



Dokumentasi lengkap struktur folder dan file.Dokumentasi lengkap tentang organisasi folder utilities dan components.



------



## 📂 Folder Structure## 📂 Folder Structure



``````

preface-house-rules/src/

├── assets/├── components/              # React Components

│   ├── images/              # Logo dan aset gambar│   ├── CompanyRules.jsx     # Main container component

│   │   └── logo-preface.jpeg│   ├── Header.jsx           # Header with search & branding

│   └── references/          # Design references│   ├── CategorySidebar.jsx  # Sidebar with category filter

│       └── contoh-page.jpg│   ├── StatsRow.jsx         # Statistics cards

││   ├── PolicyCard.jsx       # Individual policy card

├── public/│   └── PolicyList.jsx       # List of policy cards

│   ├── logo-preface.jpeg   # Logo (accessible via /logo-preface.jpeg)│

│   └── LOGO_INSTRUCTIONS.txt└── utils/                   # Utilities & Data

│    ├── policies/            # Policy data by category

├── src/    │   ├── kesehatanBPJS.js

│   ├── components/          # 6 React Components    │   ├── lemburKompensasi.js

│   │   ├── CompanyRules.jsx     # Main container    │   ├── cutiAbsensi.js

│   │   ├── Header.jsx           # Logo + search    │   ├── pengembanganDiri.js

│   │   ├── CategorySidebar.jsx  # Category filter + help    │   ├── kodeEtik.js

│   │   ├── PolicyCard.jsx       # Expandable policy card    │   └── index.js         # Export all policies + helpers

│   │   ├── PolicyList.jsx       # Policy grid    │

│   │   └── Footer.jsx           # Contact info    ├── categories.js        # Category icons & colors

│   │    ├── constants.js         # App constants (name, version, etc)

│   ├── utils/               # Utilities & Data    ├── helpers.js           # Helper functions (hexToRgb, etc)

│   │   ├── policies/        # Policy data by category    ├── filters.js           # Filter & sort functions

│   │   │   ├── kesehatanBPJS.js      # 2 policies    ├── styles.js            # Reusable style generators

│   │   │   ├── lemburKompensasi.js   # 2 policies    └── contentRenderer.js   # Markdown content renderer

│   │   │   ├── cutiAbsensi.js        # 2 policies```

│   │   │   ├── pengembanganDiri.js   # 1 policy

│   │   │   ├── kodeEtik.js           # 1 policy---

│   │   │   └── index.js              # Aggregator

│   │   │## 🧩 Components

│   │   ├── categories.js        # Lucide icons & colors

│   │   ├── constants.js         # COLORS palette & config### **CompanyRules.jsx** (Main)

│   │   ├── contentRenderer.jsx  # Markdown parser- Container utama aplikasi

│   │   ├── filters.js           # Filter logic- Mengelola state (category, search, expanded)

│   │   ├── helpers.js           # countByCategory()- Mengkoordinasikan semua child components

│   │   └── index.js             # Central export

│   │### **Header.jsx**

│   ├── App.jsx              # Root component- Logo & branding

│   ├── main.jsx             # Entry point- Search bar

│   └── index.css            # Global white theme- Version badge

│

├── docs/                    # Documentation### **CategorySidebar.jsx**

│   ├── README.md            # Main documentation- List kategori dengan counter

│   ├── DEPLOY.md            # Deployment guide- Active state indicator

│   ├── CHEATSHEET.md        # Quick reference- Help box untuk kontak HR

│   ├── CLEANUP_SUMMARY.md   # Cleanup log

│   └── REDESIGN_SUMMARY.md  # Redesign changelog### **StatsRow.jsx**

│- 3 stat cards: Total Kebijakan, Kategori, Ditampilkan

├── dist/                    # Production build (generated)- Dynamic counting

├── node_modules/            # Dependencies (327 packages)

│### **PolicyCard.jsx**

├── .eslintrc.cjs           # ESLint config- Card untuk 1 policy

├── .gitignore              # Git ignore rules- Expandable/collapsible

├── index.html              # HTML entry- Tags, icon, summary, content

├── package.json            # Dependencies & scripts

├── package-lock.json       # Lock file### **PolicyList.jsx**

├── vite.config.js          # Vite config- Render list of PolicyCard

├── vercel.json             # Vercel deploy config- Empty state handling

└── netlify.toml            # Netlify deploy config

```---



---## 🛠️ Utils



## 🧩 Components Detail### **policies/** (Data by Category)

Setiap file berisi array policies untuk 1 kategori:

### **CompanyRules.jsx** (Main Container)

**Purpose**: Orchestrates entire application  ```js

**State**:// kesehatanBPJS.js

- `activeCategory` - Currently selected categoryexport const kesehatanBPJSPolicies = [...];

- `searchQuery` - Search input value

- `expandedId` - Currently expanded policy ID// lemburKompensasi.js

export const lemburKompensasiPolicies = [...];

**Responsibilities**:

- Manage global state// dll...

- Filter policies based on category + search```

- Count policies per category

- Render Header, Sidebar, PolicyList, Footer**index.js** menggabungkan semua dan export helpers:

- `allPolicies` - Gabungan semua policies

**Imports**: Header, CategorySidebar, PolicyList, Footer, utilities- `getCategories()` - Get unique categories

- `getPoliciesByCategory(name)` - Filter by category

---- `getPolicyById(id)` - Get single policy

- `searchPolicies(query)` - Search policies

### **Header.jsx**

**Purpose**: Top navigation bar  ### **categories.js**

**Features**:```js

- PREFACE logo (48x48px) left sideexport const categoryIcons = { ... }

- Search bar right side (360px)export const categoryColors = { ... }

- Lucide Search iconexport const getCategoryIcon(name)

- White backgroundexport const getCategoryColor(name)

- Sticky positioning```



**Props**: `searchQuery`, `onSearchChange`### **constants.js**

App-wide constants:

---```js

export const APP_NAME = "Company Handbook"

### **CategorySidebar.jsx**export const APP_VERSION = "v2025.1"

**Purpose**: Category filter sidebar  export const CONTACT_INFO = { ... }

**Features**:```

- 6 category buttons with Lucide icons

- Active state highlighting (red border + light bg)### **helpers.js**

- Count badges per categoryHelper functions:

- Help box with email contact- `hexToRgb(hex)` - Convert HEX to RGB

- `formatDate(dateString)` - Format date

**Props**: `categories`, `activeCategory`, `onCategoryChange`, `categoryCounts`- `truncateText(text, maxLength)` - Truncate text

- `countByCategory(policies)` - Count policies per category

---

### **filters.js**

### **PolicyCard.jsx**Filter & sort functions:

**Purpose**: Individual expandable policy card  - `filterPolicies(policies, category, query)` - Filter policies

**Features**:- `sortPolicies(policies, sortBy)` - Sort policies

- Collapsible/expandable content

- Category tag (red background)### **styles.js**

- ChevronDown icon animationReusable style generators:

- Markdown content rendering- `getCategoryButtonStyle(active, color)`

- Tags + last updated info- `getStatCardStyle(color)`

- Shadow on hover- `getCardStyle(expanded, color)`

- `getIconBoxStyle(color)`

**Props**: `policy`, `isExpanded`, `onToggle`- `getCategoryTagStyle(color)`

- `getChevronStyle(expanded)`

---- `getStatNumStyle(color)`



### **PolicyList.jsx**### **contentRenderer.js**

**Purpose**: Render list of policies  - `renderContent(text)` - Convert markdown-style text to React elements

**Features**:

- Maps policies to PolicyCard---

- Empty state with SearchX icon

- Handles no results scenario## ✅ Keuntungan Struktur Ini



**Props**: `policies`, `expandedId`, `onToggleExpand`1. **Modular** - Setiap komponen punya tanggung jawab jelas

2. **Maintainable** - Mudah update policies per kategori

---3. **Reusable** - Utils bisa dipakai di komponen lain

4. **Scalable** - Mudah tambah kategori atau policy baru

### **Footer.jsx**5. **Clean Code** - Separation of concerns yang baik

**Purpose**: Bottom footer with contact info  6. **Testable** - Setiap function mudah di-test

**Features**:

- PREFACE logo + brand---

- Contact section: Email + Phone (Lucide icons)

- Address section: Full company address## 🆕 Cara Menambah Policy Baru

- Copyright with Heart icon

- White background (matches body)### 1. Tambah di kategori yang sesuai:

```js

**Props**: None (static content)// src/utils/policies/kesehatanBPJS.js

export const kesehatanBPJSPolicies = [

---  // ...existing policies

  {

## 🛠️ Utils Detail    id: 9,

    category: "Kesehatan & BPJS",

### **policies/index.js**    categoryColor: "#10b981",

**Exports**:    icon: "💊",

- `allPolicies` - Array of all 8 policies    title: "Policy Baru",

- `getCategories()` - Returns ["Semua", "Kesehatan & BPJS", ...]    lastUpdated: "12 Mar 2026",

- `getPoliciesByCategory(name)` - Filter policies    tags: ["Tag1", "Tag2"],

- `getPolicyById(id)` - Get single policy    summary: "Ringkasan singkat...",

- `searchPolicies(query)` - Search in title/content/tags    content: `**Detail Policy**

...konten lengkap...`,

**Data Structure**:  },

```js];

{```

  id: 1,

  category: "Kesehatan & BPJS",### 2. Tidak perlu update file lain!

  categoryColor: "#10b981",`index.js` akan otomatis include policy baru ke `allPolicies`.

  title: "Reimburse BPJS Kesehatan",

  lastUpdated: "1 Jan 2025",---

  tags: ["BPJS", "Kesehatan"],

  summary: "Short description...",## 🆕 Cara Menambah Kategori Baru

  content: `**Markdown** formatted content...`

}### 1. Buat file policy baru:

``````js

// src/utils/policies/keamananIT.js

---export const keamananITPolicies = [

  {

### **categories.js**    id: 10,

**Purpose**: Category configuration with Lucide icons      category: "Keamanan IT",

    categoryColor: "#8b5cf6",

**Exports**:    icon: "🔒",

```js    title: "Password Policy",

// Icon mapping (Lucide components)    // ...

export const categoryIcons = {  },

  "Semua": LayoutGrid,];

  "Kesehatan & BPJS": Heart,```

  "Lembur & Kompensasi": Clock,

  "Cuti & Absensi": Calendar,### 2. Update `policies/index.js`:

  "Pengembangan Diri": BookOpen,```js

  "Kode Etik": Shieldimport { keamananITPolicies } from "./keamananIT";

}

export const allPolicies = [

// All unified to PREFACE red  ...kesehatanBPJSPolicies,

export const categoryColors = { ... }  // ... existing

  ...keamananITPolicies, // tambahkan ini

// Helper functions];

export const getCategoryIcon(name)

export const getCategoryColor(name)export { keamananITPolicies }; // export

``````



---### 3. Update `categories.js`:

```js

### **constants.js**export const categoryIcons = {

**Purpose**: Centralized configuration & color system  // ...existing

  "Keamanan IT": "🔒",

**Exports**:};

```js

export const APP_NAME = "PREFACE Handbook";export const categoryColors = {

export const APP_VERSION = "v2025.1";  // ...existing

export const APP_DESCRIPTION = "Kebijakan & Peraturan Perusahaan";  "Keamanan IT": "#8b5cf6",

};

export const CONTACT_INFO = {```

  email: "sabian.athallah05@gmail.com",

  phone: "+62 858-8779-9935",Done! 🎉

  address: "Jl. Sarikaso III No.5, ..."

};---



export const SEARCH_PLACEHOLDER = "Cari kebijakan...";## 📝 Best Practices



export const COLORS = {1. **Naming Convention**:

  primary: "#E31E24",        // PREFACE Red   - Components: PascalCase (e.g., `PolicyCard.jsx`)

  primaryHover: "#C71920",   - Utils: camelCase (e.g., `helpers.js`)

  primaryLight: "#FEF2F2",   - Constants: UPPER_SNAKE_CASE

  bgPrimary: "#FFFFFF",      // White

  bgIvory: "#FFFFF0",        // Ivory (unused now)2. **File Organization**:

  bgCard: "#FFFFFF",   - 1 component = 1 file

  bgHover: "#F9FAFB",   - 1 category policies = 1 file

  textPrimary: "#1a1a1a",   - Group related utilities

  textSecondary: "#6b7280",

  textMuted: "#9ca3af",3. **Import Order**:

  border: "#e5e7eb",   ```js

  borderLight: "#f3f4f6",   // 1. External libraries

  shadow: "0 1px 3px rgba(0,0,0,0.1)",   import { useState } from "react";

  shadowHover: "0 4px 12px rgba(0,0,0,0.15)"   

};   // 2. Internal utils

```   import { allPolicies } from "../utils/policies";

   

---   // 3. Internal components

   import Header from "./Header";

### **contentRenderer.jsx**   ```

**Purpose**: Parse markdown-style text to React elements

4. **Props Documentation**:

**Features**:   Tambahkan JSDoc untuk props yang kompleks

- Headers: `**Bold**` → uppercase styled

- Bullet lists: `- Item` → `<ul><li>`---

- Numbered lists: `1. Item` → `<ol><li>`

- Italics: `*text*` → italic styleNeed help? Contact DevOps team! 🚀

- Paragraphs: Regular text
- Proper list grouping with margins
- White theme text colors

**Export**: `renderContent(text)`

---

### **filters.js**
**Purpose**: Policy filtering logic

**Export**:
```js
export function filterPolicies(policies, category, searchQuery) {
  // 1. Filter by category
  // 2. Filter by search (title, content, tags)
  // 3. Return filtered array
}
```

---

### **helpers.js**
**Purpose**: Utility helper functions

**Export**:
```js
export function countByCategory(policies) {
  // Count policies per category
  // Returns: { "Kesehatan & BPJS": 2, ... }
}
```

---

### **index.js** (Central Export)
Re-exports all utilities from single entry point:
```js
export * from "./policies";
export * from "./categories";
export * from "./constants";
export * from "./helpers";
export * from "./filters";
export { renderContent } from "./contentRenderer.jsx";
```

**Usage**:
```js
import { allPolicies, COLORS, filterPolicies } from "../utils";
```

---

## 🎨 Styling Approach

### No CSS Modules
- All styles inline with `style={}` prop
- Centralized colors in `COLORS` constant
- Reusable style functions removed (replaced by inline)

### Color System
Single source of truth: `COLORS` object in `constants.js`

**Used throughout**:
- `COLORS.primary` - Buttons, badges, links
- `COLORS.bgPrimary` - All backgrounds (header, body, footer, cards)
- `COLORS.textPrimary/Secondary/Muted` - Text hierarchy
- `COLORS.border` - All borders
- `COLORS.shadow` - Card shadows

---

## 📊 Data Flow

```
policies/*.js (raw data)
    ↓
policies/index.js (aggregate)
    ↓
CompanyRules.jsx (filter & state)
    ↓
PolicyList.jsx (map to cards)
    ↓
PolicyCard.jsx (render individual)
    ↓
contentRenderer.jsx (parse content)
```

---

## 🔧 Key Functions

### **filterPolicies(policies, category, searchQuery)**
```js
// Location: utils/filters.js
// Returns: Filtered policy array
// Usage: In CompanyRules.jsx useMemo
```

### **countByCategory(policies)**
```js
// Location: utils/helpers.js
// Returns: { "Category": count, ... }
// Usage: For sidebar badges
```

### **renderContent(text)**
```js
// Location: utils/contentRenderer.jsx
// Returns: React elements array
// Usage: In PolicyCard for policy.content
```

### **getCategoryIcon(name)**
```js
// Location: utils/categories.js
// Returns: Lucide React component
// Usage: CategorySidebar buttons
```

---

## 🎯 Component Communication

```
CompanyRules (State Manager)
  ├─→ Header
  │    └─→ searchQuery (value)
  │    └─→ onSearchChange (callback)
  │
  ├─→ CategorySidebar
  │    ├─→ categories (array)
  │    ├─→ activeCategory (string)
  │    ├─→ onCategoryChange (callback)
  │    └─→ categoryCounts (object)
  │
  ├─→ PolicyList
  │    ├─→ policies (filtered array)
  │    ├─→ expandedId (number|null)
  │    └─→ onToggleExpand (callback)
  │      └─→ PolicyCard (per policy)
  │           ├─→ policy (object)
  │           ├─→ isExpanded (boolean)
  │           └─→ onToggle (callback)
  │
  └─→ Footer (no props)
```

---

## 📦 File Count Summary

- **Components**: 6 files
- **Utils**: 7 files (+ 5 policy files)
- **Config**: 5 files (.eslintrc, vite.config, vercel, netlify, package.json)
- **Documentation**: 5 files (in docs/)
- **Assets**: 2 files (logo, reference image)

**Total Source Files**: 18 files  
**No Dead Code**: All files actively used ✅

---

## 🚀 Build Output

```bash
npm run build
# → dist/
#    ├── index.html
#    ├── assets/
#    │   ├── index-[hash].js   (~160 KB → 52 KB gzipped)
#    │   └── index-[hash].css  (minimal)
#    └── logo-preface.jpeg
```

---

## 📝 Notes

- **No StatsRow**: Removed per user request (cleaner UI)
- **No Version Badge**: Removed from Header
- **No styles.js**: Replaced by inline styles with COLORS
- **No hexToRgb**: Removed after switching from rgba() to hex colors
- **Clean Architecture**: Every file has a clear purpose
- **Modular**: Easy to add new policies or categories
- **Maintainable**: Well-organized, documented, typed

---

**Last Updated**: March 12, 2026  
**Status**: ✅ Production Ready
