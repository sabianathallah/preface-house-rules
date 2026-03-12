# 🚀 Panduan Deploy Company Handbook

Project sudah 100% siap deploy! Pilih platform favorit Anda:

---

## 1️⃣ Deploy ke VERCEL (Recommended - Paling Mudah!)

### Option A: Via Dashboard (No CLI)
1. Buka https://vercel.com
2. Sign in dengan GitHub
3. Klik **"Add New Project"**
4. Import repository ini
5. Vercel akan auto-detect Vite
6. Klik **"Deploy"** ✨
7. Done! Website live dalam 1-2 menit

### Option B: Via CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy (dari folder project)
vercel

# Untuk production
vercel --prod
```

**URL Result**: `https://nama-project.vercel.app`

---

## 2️⃣ Deploy ke NETLIFY

### Option A: Via Dashboard
1. Buka https://app.netlify.com
2. Sign in dengan GitHub
3. Klik **"Add new site"** → **"Import an existing project"**
4. Pilih repository ini
5. Settings otomatis terdeteksi dari `netlify.toml`
6. Klik **"Deploy"** 🚀

### Option B: Via CLI
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy
npm run build
netlify deploy --prod --dir=dist
```

**URL Result**: `https://nama-project.netlify.app`

---

## 3️⃣ Deploy ke GITHUB PAGES

### Setup
1. Edit `vite.config.js`, tambahkan base URL:
```js
export default defineConfig({
  base: '/nama-repo/',  // ganti dengan nama repo Anda
  plugins: [react()],
  // ... config lainnya
})
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Tambahkan script di `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. Deploy:
```bash
npm run deploy
```

5. Aktifkan GitHub Pages:
   - Buka repo di GitHub
   - Settings → Pages
   - Source: `gh-pages` branch
   - Save

**URL Result**: `https://username.github.io/nama-repo`

---

## 4️⃣ Deploy ke FIREBASE HOSTING

```bash
# Install Firebase CLI
npm i -g firebase-tools

# Login
firebase login

# Init
firebase init hosting

# Pilih:
# - Public directory: dist
# - Single-page app: Yes
# - GitHub auto deploy: No (optional)

# Build & Deploy
npm run build
firebase deploy
```

**URL Result**: `https://project-id.web.app`

---

## 5️⃣ Deploy ke RAILWAY

1. Buka https://railway.app
2. Sign in dengan GitHub
3. **"New Project"** → **"Deploy from GitHub repo"**
4. Pilih repository
5. Add environment variables (jika perlu)
6. Deploy otomatis! 🎉

---

## ✅ Checklist Sebelum Deploy

- [x] Dependencies sudah terinstall (`npm install`)
- [x] Build berhasil tanpa error (`npm run build`)
- [x] Test di local dulu (`npm run dev`)
- [x] File `.gitignore` sudah ada
- [x] File konfigurasi deploy sudah ada (`vercel.json`, `netlify.toml`)

---

## 🔧 Environment Variables (Optional)

Jika butuh environment variables, buat file `.env`:

```env
VITE_API_URL=https://api.example.com
VITE_APP_NAME=Company Handbook
```

Lalu akses di code dengan:
```js
const apiUrl = import.meta.env.VITE_API_URL
```

**Important**: Variable harus diawali dengan `VITE_`

---

## 📊 Monitoring Performance

Setelah deploy, cek performa di:
- **Lighthouse**: DevTools → Lighthouse
- **PageSpeed Insights**: https://pagespeed.web.dev
- **GTmetrix**: https://gtmetrix.com

---

## 🆘 Troubleshooting

### Build Error
```bash
# Clear cache & reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Deploy Failed
- Pastikan `package.json` memiliki script `"build"`
- Cek Node version (min. v16)
- Cek error log di dashboard platform

### 404 on Refresh (SPA Issue)
Sudah handled di `vercel.json` dan `netlify.toml` dengan redirect rules!

---

## 💡 Tips

1. **Vercel** - Paling cepat & mudah, free SSL, auto preview
2. **Netlify** - Bagus untuk CI/CD, form handling
3. **GitHub Pages** - Free, tapi butuh manual config
4. **Firebase** - Bagus kalau sudah pakai Firebase services

**Rekomendasi**: Pakai **Vercel** atau **Netlify** untuk kemudahan maksimal! 🎯

---

Butuh bantuan? Hubungi tim DevOps di Slack #devops-help
