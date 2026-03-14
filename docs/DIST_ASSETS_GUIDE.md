# 📂 Penjelasan Folder: DIST & ASSETS

Panduan lengkap tentang folder `dist/` dan `assets/` dalam project Preface Handbook.

---

## 📦 Folder `DIST` (Distribution)

### Apa itu?
`dist` adalah folder yang berisi **hasil build production** project Anda. Folder ini dibuat otomatis setelah menjalankan perintah `npm run build`.

### Fungsi:
- ✅ **Output build** - Berisi file HTML, CSS, JS yang sudah di-optimize
- ✅ **Minified & optimized** - Ukuran file lebih kecil untuk performa lebih cepat
- ✅ **Production-ready** - File siap di-deploy ke hosting (Vercel, Netlify, etc)
- ✅ **Source maps** - Map file untuk debugging production (jika diaktifkan)

### Struktur Folder:
```
dist/
├── index.html          # HTML utama (entry point)
├── assets/
│   ├── index-xxxx.js   # JavaScript bundle (minified)
│   └── index-xxxx.css  # CSS bundle (minified)
└── vite.svg            # Static assets
```

### Kapan Digunakan?
- **Development**: Jalankan `npm run dev` - tidak perlu folder `dist`
- **Production**: Jalankan `npm run build` - akan generate folder `dist`
- **Preview**: Jalankan `npm run preview` - menjalankan hasil build lokal

### Penting! ⚠️
- **Jangan edit manual** folder `dist/` - akan overewrite saat rebuild
- **Jangan commit** folder `dist/` ke Git - tambahkan ke `.gitignore` (sudah ada)
- **Rebuild saat ada perubahan** - jalankan `npm run build` lagi untuk update

### Kapan Dihapus?
Aman untuk dihapus kapan saja! Caranya:
```bash
rm -rf dist/
```

Rebuild otomatis saat:
- Deploy ke Vercel ✅
- Deploy ke Netlify ✅
- Jalankan `npm run build` ✅

---

## 🎨 Folder `ASSETS`

### Apa itu?
`assets` adalah folder yang menyimpan **file media & resources** project seperti gambar, foto, dan reference materials.

### Struktur & Fungsi:

#### **1. `assets/images/`**
Menyimpan gambar yang **digunakan di dalam aplikasi**:

```
assets/images/
└── logo-preface.jpeg    # Logo PREFACE (24 KB)
                         # Digunakan di:
                         # - Favicon (tab browser)
                         # - Header aplikasi
                         # - Public assets
```

**Penggunaan**:
```jsx
// Di komponen React
<img src="/logo-preface.jpeg" alt="Logo PREFACE" />

// Di HTML
<link rel="icon" href="/logo-preface.jpeg" />
```

**Penting**: File di `assets/images/` diakses dengan path `/nama-file.ext` dari root public

---

#### **2. `assets/references/`**
Menyimpan file **referensi & contoh** yang **tidak digunakan di aplikasi**:

```
assets/references/
└── contoh-page.jpg      # Screenshot contoh halaman
```

**Penggunaan**:
- 📌 Dokumentasi internal
- 📌 Referensi design
- 📌 Archive untuk dokumentasi

**Penting**: File ini tidak ter-import di aplikasi, hanya untuk referensi tim

---

### Perbandingan Lokasi Asset:

| Lokasi | Fungsi | Akses dari Browser | Dicommit ke Git |
|--------|--------|-------------------|-----------------|
| `public/` | Asset statis yang diakses app | ✅ Ya (path `/nama.ext`) | ✅ Ya |
| `assets/images/` | Gambar terstruktur rapi | ✅ Ya (via public/) | ✅ Ya |
| `assets/references/` | File referensi internal | ❌ Tidak | ✅ Ya |
| `src/` | Komponen React & logic | ✅ Ya (di-bundle) | ✅ Ya |
| `dist/` | Hasil build (generated) | ✅ Ya (saat production) | ❌ Tidak |

---

## 🔄 Alur File: Development vs Production

### **Development Mode** (`npm run dev`)
```
src/
  ├── App.jsx
  ├── components/
  └── utils/
        └── policies/
                └── kesehatanBPJS.js
                
assets/
  └── images/
      └── logo-preface.jpeg

public/
  ├── logo-preface.jpeg   ← Browser akses di sini
  └── Struktur Divisi.jpg

Browser: Langsung akses file asli (no bundling)
```

### **Production Mode** (`npm run build`)
```
src/  ─────┐
           │ Vite
assets/ ──┤ bundler
           │
public/ ───┘

           ↓
           
dist/
  ├── index.html         ← Entry point
  ├── assets/
  │   ├── index-abc123.js    ← Bundled + minified
  │   └── index-def456.css   ← Bundled + minified
  └── logo-preface.jpeg  ← Copied dari public/

Browser: Akses file di dist/ (minified & optimized)
```

---

## 📊 File Size Comparison

### Sebelum Build (Development):
```
src/ ........................ 150+ KB (JS source code)
assets/images/ .............. 24 KB (unoptimized)
```

### Sesudah Build (Production):
```
dist/assets/index-xyz.js .... 45 KB (minified + gzip)
dist/assets/index-xyz.css ... 12 KB (minified + gzip)
dist/logo-preface.jpeg ...... 24 KB (sama)
```

**Hasil**: ~3-4x lebih kecil ✨

---

## 🛠️ Quick Reference

### Perintah Penting:

```bash
# Build production
npm run build

# Lihat hasil build
npm run preview

# Bersihkan dist (aman)
rm -rf dist/

# Development
npm run dev
```

### File Mana yang Diedit?

| Untuk Edit | Edit File Ini | Jangan Edit |
|-----------|--------------|-----------|
| Tampilan | `src/components/` | `dist/` |
| Logic | `src/utils/` | `dist/` |
| Asset | `public/` atau `assets/` | `dist/` |
| Style | `src/index.css` | `dist/assets/` |

---

## ❓ FAQ

**Q: Apa bedanya `public/` dan `assets/`?**
- `public/` = Folder yang di-serve oleh server (browser akses)
- `assets/` = Folder terstruktur untuk manajemen aset lokal

**Q: Kenapa ada file di `dist/` yang sama dengan `public/`?**
- Vite copy file dari `public/` ke `dist/` saat build untuk packaging yang lengkap

**Q: Boleh saya commit folder `dist/`?**
- Tidak, sudah ada di `.gitignore`. Folder ini di-generate ulang saat deploy

**Q: Bagaimana jika `dist/` corrupt?**
- Aman dihapus! Rebuild dengan `npm run build` untuk regenerate

**Q: Apakah `assets/references/` penting?**
- Tidak kritis untuk app, hanya untuk dokumentasi internal tim

---

## 📝 Kesimpulan

### `dist/` ➡️ Generated Build Output
- ✅ Auto-generated dari `npm run build`
- ✅ Production-ready (minified & optimized)
- ❌ Jangan edit manual
- ❌ Jangan commit ke Git

### `assets/` ➡️ Project Resources
- ✅ `assets/images/` = Gambar terstruktur rapi
- ✅ `assets/references/` = File referensi internal
- ✅ Dicommit ke Git
- ✅ Diakses via `public/` atau import di komponen

---

**Happy coding! 🚀**
