# Tutorial Deploy ke Vercel

Panduan lengkap untuk deploy aplikasi **Company Handbook** ke Vercel.

## 📋 Prasyarat

Sebelum memulai, pastikan Anda memiliki:

1. **Akun Vercel** - Daftar gratis di [vercel.com](https://vercel.com)
2. **Git Repository** - Project harus sudah ter-push ke GitHub
3. **Node.js** - Versi 16 atau lebih tinggi
4. **Vercel CLI** (opsional, untuk deployment lokal)

---

## 🚀 Metode 1: Deploy via GitHub Integration (Recommended)

Metode ini paling mudah dan otomatis melakukan redeploy setiap kali ada push ke repository.

### Step 1: Persiapan di GitHub

1. Pastikan project sudah ter-push ke repository GitHub Anda
   ```bash
   git status
   git push origin sabian
   ```

### Step 2: Login ke Vercel

1. Buka [vercel.com](https://vercel.com)
2. Klik **"Sign Up"** atau **"Log In"**
3. Pilih **"Continue with GitHub"**
4. Izinkan Vercel akses ke akun GitHub Anda

### Step 3: Import Project

1. Di dashboard Vercel, klik **"New Project"** atau **"Add New..."**
2. Klik **"Import Git Repository"**
3. Cari dan pilih repository `preface-house-rules`
4. Klik **"Import"**

### Step 4: Konfigurasi Project

Vercel akan mendeteksi otomatis bahwa ini adalah project Vite. Pastikan konfigurasi berikut:

| Setting | Nilai |
|---------|-------|
| **Framework** | Vite |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Install Command** | `npm install` |
| **Environment Variables** | (kosongkan jika tidak ada) |

Jika semua sudah benar, klik **"Deploy"**

### Step 5: Tunggu Deployment Selesai

- Vercel akan menginstall dependencies dan build project
- Proses biasanya memakan waktu 2-5 menit
- Setelah selesai, Anda akan mendapat URL unik seperti: `https://preface-house-rules.vercel.app`

---

## ⚙️ Metode 2: Deploy via Vercel CLI

Untuk development lokal dan quick deployment.

### Step 1: Install Vercel CLI

```bash
npm i -g vercel
```

### Step 2: Login ke Vercel

```bash
vercel login
```

Browser akan terbuka untuk authentikasi. Ikuti panduan di layar.

### Step 3: Deploy Project

Navigate ke folder project:
```bash
cd /Users/mac/Downloads/preface-house-rules
```

Kemudian jalankan:
```bash
vercel
```

Ikuti prompt yang muncul:
- **Project name**: `preface-house-rules` (atau nama pilihan Anda)
- **Directory to publish**: `./dist`
- **Override settings**: Pilih `N` (gunakan default)

### Step 4: Verifikasi Deployment

Setelah selesai, Vercel akan memberikan URL production. Buka di browser untuk memverifikasi.

---

## 🔄 Automated Deployments

Setelah GitHub integration setup, deployment otomatis akan terjadi:

### Automatic Deployments untuk:
- ✅ Setiap push ke branch utama (production)
- ✅ Setiap pull request (preview deployment)

### Disable Auto-Deploy (jika perlu):

1. Buka Project Settings di Vercel Dashboard
2. Masuk ke **"Git"**
3. Ubah **"Deploy on push"** menjadi OFF

---

## 📊 Konfigurasi untuk Project Ini

Vercel.json sudah dikonfigurasi dengan baik. Lihat file `vercel.json` untuk detail:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

### Variabel Environment (jika diperlukan)

Untuk menambah environment variables:

1. Buka Project Settings → **Environment Variables**
2. Tambahkan key-value pair yang dibutuhkan
3. Deploy ulang untuk mengaplikasikan perubahan

---

## 🐛 Troubleshooting

### Build Failed Error

**Masalah**: Build gagal saat deployment

**Solusi**:
```bash
# Bersihkan node_modules dan reinstall
rm -rf node_modules package-lock.json
npm install

# Coba build lokal
npm run build

# Jika error masih ada, cek logs di Vercel dashboard
```

### Deployments Slow/Timeout

**Masalah**: Deployment memakan waktu lama atau timeout

**Solusi**:
1. Pastikan tidak ada file besar di repository
2. Optimalkan image di folder `assets/images/`
3. Gunakan `.vercelignore` untuk exclude files yang tidak perlu

Contoh `.vercelignore`:
```
docs/
assets/references/
README.md
```

### Port 3000 Not Available (Local Testing)

**Solusi**:
```bash
# Gunakan port alternatif
npm run dev -- --port 3001
```

---

## 📱 Custom Domain (Optional)

Untuk menggunakan domain custom:

1. Buka Project Settings di Vercel Dashboard
2. Masuk ke **Domains**
3. Tambahkan domain custom Anda
4. Ikuti instruksi untuk update DNS settings
5. Tunggu DNS propagation (15-48 jam)

---

## 🔐 Security Best Practices

1. **Jangan commit `.env`** - Gunakan Environment Variables di Vercel instead
2. **Protect sensitive data** - Jangan hardcode API keys atau credentials
3. **Review deployments** - Check preview sebelum approve untuk production
4. **Monitor analytics** - Gunakan Vercel Analytics untuk tracking

---

## 📊 Monitoring & Analytics

Akses dashboard Vercel untuk:

- ✅ **Deployment history** - Lihat semua deployment sebelumnya
- ✅ **Performance** - Analytics, Core Web Vitals, edge network
- ✅ **Logs** - Build logs dan runtime errors
- ✅ **Rollback** - Revert ke deployment sebelumnya

---

## 🎯 Quick Checklist

Sebelum deploy, pastikan:

- [ ] Semua file sudah di-commit
- [ ] Tidak ada error di `npm run lint`
- [ ] Build lokal berhasil: `npm run build`
- [ ] Project sudah ter-push ke GitHub
- [ ] Akun Vercel sudah aktif
- [ ] Repository sudah terhubung dengan Vercel

---

## 📞 Bantuan Lebih Lanjut

- **Vercel Docs**: https://vercel.com/docs
- **Vite Docs**: https://vitejs.dev/
- **React Docs**: https://react.dev/

---

**Selamat! 🎉 Aplikasi Anda sekarang live di Vercel!**
