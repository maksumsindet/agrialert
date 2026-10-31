# AgriAlert - Sistem Cerdas Peringatan Dini Padi Berbasis AI & Satelit

AgriAlert adalah aplikasi pemantauan iklim pertanian, deteksi dini penyakit daun padi secara on-device (client-side AI), dan asisten agronomis interaktif offline yang dimigrasikan dari prototipe monolitik Streamlit ke arsitektur modern **Astro Framework (Native Web)**.

---

## 🌟 Fitur Utama

### 1. Deteksi Penyakit Daun Padi On-Device (AI Vision)
- **4-Layer HSV Vegetation Spectral Filter**: Memvalidasi foto daun secara real-time di peramban untuk mencegah false positive pada foto non-daun atau foto berswafoto/pemandangan.
  - *Layer 1 (Hijau Sehat)*: $H \in [55, 165], S > 0.15, V \in [0.08, 0.95]$
  - *Layer 2 (Kuning-Kering Blast/HDB)*: $H \in [40, 58], S > 0.30, V \in [0.10, 0.97]$
  - *Layer 3 (Cokelat Lesi Oval/Linear)*: $H \in [18, 42], S > 0.40, V \in [0.08, 0.60]$
  - *Layer 4 (Desaturasi Hawar Pelepah)*: $H \in [25, 70], S \in [0.04, 0.25], V \in [0.40, 0.92]$
- **Inferensi Native WebAssembly (ONNX Runtime Web)**: Menjalankan model `model_agriwarn.onnx` (4.8 MB) langsung di CPU/GPU perangkat pengguna tanpa pengiriman gambar ke server luar (menjaga privasi petani dan hemat kuota).
- **Shannon Entropy & Confidence Gate**: Menolak hasil diagnosis jika tingkat keyakinan $< 35\%$ atau rasio entropi $> 0.80$.
- **Koreksi Morfologi Spektral**: Membedakan bercak oval besar (*Brown Spot*) dari lesi sempit linier (*Narrow Brown Spot*).

### 2. Cuaca, Iklim ENSO & Penginderaan Jauh Satelit
- **GPS Mikro Sawah**: Mendeteksi koordinat lokasi sawah dan menghitung stasiun agroklimat terdekat.
- **Oceanic Niño Index (ONI)**: Visualisasi tren anomali suhu muka laut Samudera Pasifik (Zona Niño 3.4) dengan peramalan model Deep Learning LSTM ($R^2 = 0.943$, Akurasi Fase $98.34\%$).
- **Satelit ESA Copernicus**:
  - *Sentinel-2 NDVI*: Indeks kehijauan dan kerapatan kanopi tanaman padi.
  - *Sentinel-1 SAR*: Hamburan balik radar gelombang mikro polarisasi ganda (VH & VV) untuk mendeteksi biomassa tegakan batang padi dan genangan air.

### 3. TaniBot - Asisten Cerdas Offline
- **Pohon Keputusan Komprehensif (61 Nodes)** bersumber dari *Buku Prakiraan OPT Pangan Ditjen Tanaman Pangan Kementan RI*.
- Alur rekomendasi pengendalian paska deteksi berfase:
  1. Fase Pra-Tanam (Sanitasi lahan, perlakuan benih agens hayati)
  2. Fase Pesemaian (Pemeliharaan bibit prima)
  3. Fase Pertanaman (Vegetatif & Generatif, ambang ekonomi pengendalian, dosis zat aktif bakterisida/fungisida anjuran)
- **Kalkulator & Rekomendasi Pemupukan Berimbang** (Urea, NPK Phonska, KCl, dan Kompos Jerami Padi).

### 4. Katalog Interaktif OPT & Formulir Pengaduan
- Ensiklopedia 11 OPT Padi (Hawar Daun Bakteri, Blas, Bercak Cokelat, Hawar Pelepah, Tungro, Wereng Coklat, Penggerek Batang Sundep/Beluk, Tikus Sawah, dll.).
- Formulir pengaduan serangan hama lapangan dengan penyimpanan lokal (Local Storage) dan ekspor data ke format CSV.

---

## 🚀 Panduan Memulai

### Prasyarat
- Node.js versi 18.17.1+ atau Node.js 20+

### Instalasi & Menjalankan

1. Masuk ke direktori proyek:
   ```bash
   cd agrialert-astro
   ```

2. Jalankan server pengembangan lokal:
   ```bash
   npm run dev
   ```
   Buka peramban di `http://localhost:4321`.

3. Membangun untuk produksi:
   ```bash
   npm run build
   ```

4. Pratinjau hasil produksi:
   ```bash
   npm run preview
   ```

---

## 🏛️ Struktur Direktori Proyek

```
agrialert-astro/
├── public/
│   ├── assets/hama/       # Foto referensi resolusi tinggi hama & penyakit padi
│   ├── images/            # Maskot dan ikon UI
│   ├── models/            # Model CNN ONNX (model_agriwarn.onnx)
│   └── ort/               # Binari WebAssembly ONNX Runtime Web (offline)
├── src/
│   ├── components/
│   │   ├── Classifier.astro       # Komponen inferensi AI kamera & HSV filter
│   │   ├── EnsoChart.astro        # Komponen grafik ENSO ONI & LSTM
│   │   ├── SatelliteChart.astro   # Komponen grafik Sentinel-2 NDVI & Sentinel-1 SAR
│   │   ├── TaniBotChat.astro      # Asisten decision tree TaniBot
│   │   └── WeatherWidget.astro    # Widget cuaca BMKG & Geolocation GPS
│   ├── data/
│   │   ├── enso_recent.json       # Dataset time-series ONI ENSO
│   │   ├── oni_metrics.json       # Metrik evaluasi akurasi model LSTM
│   │   ├── sentinel1.json         # Data radar satelit SAR VH/VV
│   │   ├── sentinel2.json         # Data indeks vegetasi optik NDVI
│   │   └── tanibot_data_v2.json   # Knowledge base OPT Kementan RI
│   ├── layouts/
│   │   └── Layout.astro           # Shell layout utama, navbar & footer
│   └── pages/
│       ├── cuaca.astro            # Halaman Cuaca, Iklim & Satelit
│       ├── deteksi.astro          # Halaman Klasifikasi AI Daun Padi
│       ├── hama.astro             # Halaman Katalog Lengkap OPT
│       ├── index.astro            # Beranda & Dashboard Utama
│       ├── pengaduan.astro        # Halaman Formulir Pelaporan Lapangan
│       └── tanibot.astro          # Halaman Konsultasi TaniBot
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

---

## 📜 Rujukan Ilmiah & Regulasi
- Balai Besar Peramalan Organisme Pengganggu Tumbuhan (BBPOPT), Ditjen Tanaman Pangan, Kementerian Pertanian Republik Indonesia.
- Badan Meteorologi, Klimatologi, dan Geofisika (BMKG) Republik Indonesia.
- European Space Agency (ESA) Copernicus Sentinel-1 SAR & Sentinel-2 MSI Open Data.
- National Oceanic and Atmospheric Administration (NOAA) Climate Prediction Center (CPC).
