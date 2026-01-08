# Algo Trade Screener Landing Page

Landing page untuk **Algo Trade Screener** - platform yang menyediakan rekomendasi saham berbasis algoritma dengan track record nyata.

## 🚀 Fitur

- 📊 **History of Stockpick** - Track record lengkap dengan bukti call dan floating profit
- 📱 **Responsive Design** - Tampilan optimal di desktop dan mobile
- 🖼️ **Lightbox Gallery** - Galeri gambar dengan navigasi untuk bukti trading
- 🎨 **Modern UI** - Desain modern dengan animasi dan gradients

## 🛠️ Tech Stack

- **Next.js 16** - React framework
- **Tailwind CSS 4** - Styling
- **Radix UI** - Komponen UI
- **Lucide React** - Icons
- **TypeScript** - Type safety

## 📦 Instalasi

```bash
# Clone repository
git clone https://github.com/USERNAME/algo-trade-screener-landing-page.git

# Masuk ke folder project
cd algo-trade-screener-landing-page

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## 🚀 Deployment ke Vercel

### Langkah 1: Push ke GitHub

```bash
# Inisialisasi git (jika belum)
git init

# Tambahkan semua file
git add .

# Commit
git commit -m "Initial commit: Algo Trade Screener Landing Page"

# Tambahkan remote repository
git remote add origin https://github.com/USERNAME/algo-trade-screener-landing-page.git

# Push ke GitHub
git push -u origin main
```

### Langkah 2: Deploy ke Vercel

1. Buka [vercel.com](https://vercel.com) dan login dengan akun GitHub
2. Klik **"Add New..."** → **"Project"**
3. Pilih repository **algo-trade-screener-landing-page**
4. Vercel akan otomatis mendeteksi Next.js
5. Klik **"Deploy"**
6. Tunggu proses build selesai (~1-2 menit)
7. Website Anda sudah live! 🎉

### Langkah 3: Custom Domain (Opsional)

1. Di dashboard Vercel, pilih project Anda
2. Klik **"Settings"** → **"Domains"**
3. Tambahkan domain kustom dan ikuti instruksi DNS

## 📁 Struktur Folder

```
algo-trade-screener-landing-page/
├── app/                    # Next.js App Router
├── components/             # React components
│   ├── track-record-section.tsx  # History stockpick
│   └── ui/                 # UI components
├── public/
│   └── floating-profit/    # Screenshots trading
│       ├── 5-januari-2026/
│       └── 6-januari-2026/
├── styles/                 # Global styles
└── package.json
```

## 🔧 Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Linting
```

## 📄 License

MIT License - Silakan gunakan dan modifikasi sesuai kebutuhan.

---

**Algo Trade Screener** - *Lahir dari riset, bukan sekadar feeling* 📈
