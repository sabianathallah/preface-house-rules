# 🎯 Cheatsheet - PREFACE Handbook# 🎯 Cheatsheet - Company Handbook Project



Quick reference untuk development, deployment, dan maintenance.## ⚡ Quick Commands



---### Development

```bash

## ⚡ Quick Commandsnpm run dev          # Start dev server → http://localhost:3000

npm run build        # Build production → dist/

### Developmentnpm run preview      # Preview production build

```bashnpm run lint         # Check code quality

npm install          # Install dependencies (327 packages)```

npm run dev          # Start dev server → http://localhost:3000

npm run build        # Build production → dist/ (~52KB gzipped)### Deploy

npm run preview      # Preview production build```bash

npm run lint         # Check code quality# Vercel (Fastest!)

```vercel --prod



### Deploy# Netlify

```bashnetlify deploy --prod --dir=dist

# Vercel (Recommended)

npm i -g vercel# Auto script

vercel --prod./deploy.sh

```

# Netlify

npm i -g netlify-cli---

npm run build

netlify deploy --prod --dir=dist## 📁 File Organization

```

### Add New Policy

---```js

// Edit: src/utils/policies/{categoryName}.js

## 📝 Add New Policyexport const categoryPolicies = [

  {

### 1. Add to Existing Category    id: 9,

```js    category: "Category Name",

// Edit: src/utils/policies/{categoryName}.js    categoryColor: "#10b981",

export const categoryPolicies = [    icon: "🎯",

  // ... existing policies    title: "Policy Title",

  {    lastUpdated: "12 Mar 2026",

    id: 9,  // Must be unique!    tags: ["Tag1", "Tag2"],

    category: "Kesehatan & BPJS",  // Match category name    summary: "Brief summary",

    categoryColor: "#10b981",    content: `**Section**

    title: "New Policy Title",    Details here...`,

    lastUpdated: "12 Mar 2026",  },

    tags: ["Tag1", "Tag2", "Tag3"],];

    summary: "Brief one-line description of the policy",```

    content: `**Section Header**

Detail content here...### Add New Category

1. Create: `src/utils/policies/newCategory.js`

**Another Section**2. Update: `src/utils/policies/index.js` (import & export)

- Bullet point 13. Update: `src/utils/categories.js` (add icon & color)

- Bullet point 2

---

1. Numbered item

2. Another item## 🛠️ Project Structure



*Italic note at the end*`,```

  },src/

];├── components/              # UI Components

```│   ├── CompanyRules.jsx     # ← Main (uses all below)

│   ├── Header.jsx

### 2. Create New Category│   ├── CategorySidebar.jsx

**Step 1**: Create policy file│   ├── StatsRow.jsx

```js│   ├── PolicyCard.jsx

// Create: src/utils/policies/newCategory.js│   └── PolicyList.jsx

export const newCategoryPolicies = [│

  { id: 10, category: "New Category", ... }└── utils/                   # Data & Logic

];    ├── policies/            # ← Policy Data (by category)

```    │   ├── kesehatanBPJS.js

    │   ├── lemburKompensasi.js

**Step 2**: Update aggregator    │   ├── cutiAbsensi.js

```js    │   ├── pengembanganDiri.js

// Edit: src/utils/policies/index.js    │   ├── kodeEtik.js

import { newCategoryPolicies } from "./newCategory";    │   └── index.js         # ← Aggregate all

    │

export const allPolicies = [    ├── categories.js        # Icons & colors

  ...kesehatanBPJSPolicies,    ├── constants.js         # App config

  ...newCategoryPolicies,  // Add this    ├── helpers.js           # Utilities

  // ...    ├── filters.js           # Filter logic

];    ├── styles.js            # Style generators

```    └── contentRenderer.jsx  # Markdown parser

```

**Step 3**: Add icon & color

```js---

// Edit: src/utils/categories.js

import { Heart, /* add new icon */ Briefcase } from "lucide-react";## 🔗 Import Examples



export const categoryIcons = {```js

  // ... existing// Single import from utils

  "New Category": Briefcase,  // Choose appropriate iconimport { allPolicies, getCategoryColor, hexToRgb } from "../utils";

};

// Or specific imports

export const categoryColors = {import { kesehatanBPJSPolicies } from "../utils/policies/kesehatanBPJS";

  // ... existingimport { categoryIcons } from "../utils/categories";

  "New Category": "#E31E24",  // Use PREFACE red```

};

```---



---## 🎨 Category Colors



## 🎨 Styling Guide| Category | Color | Icon |

|----------|-------|------|

### Use COLORS Constants| Kesehatan & BPJS | #10b981 (Green) | 🏥 |

```js| Lembur & Kompensasi | #f59e0b (Orange) | ⏰ |

import { COLORS } from "../utils/constants";| Cuti & Absensi | #6366f1 (Blue) | 🌴 |

| Pengembangan Diri | #ec4899 (Pink) | 📚 |

const styles = {| Kode Etik | #ef4444 (Red) | ⚖️ |

  myElement: {

    background: COLORS.bgPrimary,    // White---

    color: COLORS.textPrimary,       // Dark text

    border: `1px solid ${COLORS.border}`,## 📦 Dependencies

    boxShadow: COLORS.shadow,

  }```json

};{

```  "react": "^18.2.0",

  "react-dom": "^18.2.0",

### Available Colors  "vite": "^5.0.8",

```js  "@vitejs/plugin-react": "^4.2.1"

COLORS.primary         // #E31E24 - PREFACE red}

COLORS.primaryHover    // #C71920 - Darker red```

COLORS.primaryLight    // #FEF2F2 - Light red bg

---

COLORS.bgPrimary       // #FFFFFF - White

COLORS.bgHover         // #F9FAFB - Hover state## 🚀 Deploy Platforms



COLORS.textPrimary     // #1a1a1a - Main text| Platform | Time | Auto Deploy | Custom Domain | SSL |

COLORS.textSecondary   // #6b7280 - Secondary text|----------|------|-------------|---------------|-----|

COLORS.textMuted       // #9ca3af - Muted text| Vercel | 2 min | ✅ | ✅ | ✅ |

| Netlify | 3 min | ✅ | ✅ | ✅ |

COLORS.border          // #e5e7eb - Borders| GitHub Pages | 5 min | ✅ | ✅ | ✅ |

COLORS.borderLight     // #f3f4f6 - Light borders| Firebase | 3 min | ❌ | ✅ | ✅ |

| Railway | 4 min | ✅ | ✅ | ✅ |

COLORS.shadow          // Subtle shadow

COLORS.shadowHover     // Elevated shadow---

```

## 📊 Build Output

---

```

## 🔧 Component Propsdist/

├── index.html (0.58 KB)

### Header├── assets/

```jsx    ├── index-[hash].css (0.50 KB)

<Header     └── index-[hash].js (159.80 KB → 52.15 KB gzipped)

  searchQuery={string}```

  onSearchChange={function}

/>---

```

## 🎯 Performance Tips

### CategorySidebar

```jsx- Already optimized! ✅

<CategorySidebar- Lazy load images if you add them

  categories={array}- Use React.memo for heavy components

  activeCategory={string}- Add service worker for offline support

  onCategoryChange={function}- Enable Vercel/Netlify Analytics

  categoryCounts={object}

/>---

```

## 🆘 Troubleshooting

### PolicyList

```jsx### Dev server not starting

<PolicyList```bash

  policies={array}rm -rf node_modules package-lock.json

  expandedId={number|null}npm install

  onToggleExpand={function}npm run dev

/>```

```

### Build errors

### PolicyCard```bash

```jsxnpm run lint         # Check for errors

<PolicyCardnpm run build -- --debug

  policy={object}```

  isExpanded={boolean}

  onToggle={function}### Deploy failed

/>- Check Node version (min v16)

```- Ensure `dist/` folder exists after build

- Check platform-specific logs

---

---

## 📦 Lucide Icons Usage

## 📝 Notes

### Import Icons

```js- All styles are inline (no CSS modules)

import { Heart, Mail, Search, ChevronDown } from "lucide-react";- Using DM Sans font from Google Fonts

```- No external UI libraries (pure React)

- Markdown-style content parsing

### Use in JSX- Fully responsive (mobile-ready)

```jsx

<Heart size={18} strokeWidth={2} style={{ color: COLORS.primary }} />---

```

**Updated**: March 12, 2026

### Available Icons in Project**Version**: 1.0.0

- `LayoutGrid` - Semua**Status**: ✅ Ready to Deploy

- `Heart` - Kesehatan & BPJS
- `Clock` - Lembur & Kompensasi
- `Calendar` - Cuti & Absensi
- `BookOpen` - Pengembangan Diri
- `Shield` - Kode Etik
- `Search` - Search bar
- `ChevronDown` - Expand/collapse
- `SearchX` - Empty state
- `Mail` - Email contact
- `Phone` - Phone contact
- `MapPin` - Address
- `MessageCircle` - Help (removed)

**Browse more**: https://lucide.dev/icons/

---

## 🐛 Common Issues

### Issue: Logo not showing
**Fix**: Ensure `logo-preface.jpeg` is in `public/` folder
```bash
cp assets/images/logo-preface.jpeg public/
```

### Issue: Build fails
**Fix**: Check for unused imports
```bash
npm run lint
```

### Issue: Hot reload not working
**Fix**: Restart dev server
```bash
# Stop: Ctrl+C
npm run dev
```

### Issue: Port 3000 already in use
**Fix**: Kill existing process or use different port
```bash
lsof -ti:3000 | xargs kill
# or
npm run dev -- --port 3001
```

---

## 📂 Folder Organization

```
Root Files by Type:
├── Config         (.eslintrc, vite.config, package.json)
├── Deploy         (vercel.json, netlify.toml)
├── Assets         (assets/images/, assets/references/)
├── Documentation  (docs/*.md)
├── Source Code    (src/)
├── Build Output   (dist/)
└── Public Assets  (public/)
```

---

## 🔄 Update Workflow

### Update Content
1. Edit policy file: `src/utils/policies/{category}.js`
2. Save → Auto hot reload
3. Verify in browser

### Update Styling
1. Edit `COLORS` in `src/utils/constants.js`
2. Or edit component inline styles
3. Save → Auto reload

### Update Contact Info
1. Edit `CONTACT_INFO` in `src/utils/constants.js`
2. Update `Footer.jsx` if needed
3. Update `CategorySidebar.jsx` help box

---

## 🚀 Production Checklist

Before deploying:
- [ ] Test all categories filter
- [ ] Test search functionality
- [ ] Test expand/collapse cards
- [ ] Verify logo displays correctly
- [ ] Check responsive on mobile
- [ ] Run `npm run build` successfully
- [ ] Test production preview: `npm run preview`
- [ ] Update contact info if needed
- [ ] Check all links in footer work

---

## 💡 Tips

- **Fast Reload**: Vite HMR updates instantly on save
- **Modular Design**: Each policy category in separate file
- **Centralized Config**: All constants in one place
- **Clean Code**: No unused functions or files
- **Type Safety**: JSDoc comments for better IntelliSense
- **Git**: Commit regularly with clear messages

---

**Last Updated**: March 12, 2026  
**Project Status**: ✅ Production Ready
