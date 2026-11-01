---
name: AgriAlert Design System
description: Sistem Desain Siaga Pangan Berbasis High-Contrast Outdoor Ergonomics & One-Motif Rice Field Geometry
colors:
  primary: "#1F3921"
  primary-deep: "#0E1E10"
  primary-light: "#4A874C"
  harvest-gold: "#D97706"
  harvest-amber: "#F59E0B"
  harvest-dark: "#B45309"
  harvest-light: "#FEF3C7"
  soil-bg: "#F9F7F5"
  soil-card: "#FFFFFF"
  soil-border: "#E4D9CE"
  soil-700: "#795D4A"
  soil-text: "#1B140E"
  soil-muted: "#524136"
  satellite-sky: "#0284C7"
  satellite-sky-bg: "#E0F2FE"
  signal-emerald: "#10B981"
  signal-red: "#EF4444"
typography:
  display:
    fontFamily: "Jost, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(2.25rem, 1.5rem + 3.5vw, 3.25rem)"
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Jost, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Jost, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0em"
  body:
    fontFamily: "Jost, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  label:
    fontFamily: "Jost, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.05em"
  caption:
    fontFamily: "Jost, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.025em"
  micro:
    fontFamily: "Jost, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "0.625rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.02em"
rounded:
  sm: "8px"
  md: "12px"
  grain-sm: "20px"
  grain: "32px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.harvest-gold}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.harvest-dark}"
  button-secondary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: "14px 20px"
  button-secondary-hover:
    backgroundColor: "{colors.primary-deep}"
  badge-status:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.soil-bg}"
    rounded: "{rounded.full}"
    padding: "6px 12px"
---

## Overview

AgriAlert mengusung bahasa visual **Agro-Tactical Resilience**: perpaduan antara ketegasan pusat komando agroklimat (*Command Center Slab*) dengan kelembutan organik kurva bulir padi (*Grain Geometry*). Sistem ini dioptimalkan untuk keterbacaan tinggi di luar ruangan (*outdoor high-contrast*) agar petani dan penyuluh lapangan dapat mengoperasikan aplikasi dengan nyaman di bawah terik sinar matahari langsung di pematang sawah.

---

## Colors

Palet warna AgriAlert berakar pada ekologi persawahan dan status kewaspadaan bahaya pangan nasional:

- **Primary (`agro-900: #1F3921` / `agro-950: #0E1E10`):** Hijau kanopi pekat yang menjadi jangkar antarmuka, memberikan rasa kewibawaan agronomis sekaligus menghemat konsumsi daya layar OLED perangkat bergerak.
- **Harvest Gold (`harvest-gold: #D97706` / `harvest-amber: #F59E0B`):** Kuning keemasan malai padi matang yang difungsikan khusus sebagai warna aksen tindakan utama (*primary call-to-action*) dan penanda status siaga.
- **Soil Neutral (`soil-50: #F9F7F5` / `soil-text: #1B140E`):** Latar belakang hangat bertumpu pada warna lempung tanah subur, menghilangkan keletihan mata akibat latar putih murni (*stark white glare*) di lapangan terbuka.
- **Signal Triage (`emerald-500: #10B981` / `red-500: #EF4444`):** Hijau daun sehat untuk konfirmasi status aman, dan merah peringatan darurat untuk serangan hama eksplosif di atas ambang ekonomi.

---

## Typography

Tipografi tunggal yang kohesif menggunakan **Jost** (sans-serif geometris bernuansa humanis yang terinspirasi oleh Futura) untuk seluruh hierarki antarmuka:

- **Display (`font-black, 900`):** Judul utama hero yang tegas, kokoh, dan berbobot tanpa ornamen berlebihan.
- **Headline & Title (`font-bold, 700–800`):** Nama modul deteksi, indeks satelit, dan kategori OPT dengan kerning yang rapat untuk pemindaian cepat.
- **Body (`font-normal, 400` / `font-medium, 500`):** Teks panduan agronomi dan penanganan OPT dengan *line-height* longgar ($1.6$) untuk keterbacaan instruksi lapangan tanpa kerancuan.
- **Label & Metrics (`font-semibold, 600`, uppercase):** Penanda akurasi WebAssembly, koordinat GPS sawah, dan nilai indeks ONI.

---

## Layout

- **Sistem Grid Mobile-First:** Tata letak kartu tunggal fluid untuk layar ponsel pintar vertikal, bertransformasi menjadi grid 12 kolom pada layar tablet dan desktop.
- **Komando Sawah Satu Tangan (*Thumb Zone Optimization*):** Tombol aksi pemindaian kamera dan konsultasi darurat ditempatkan pada jangkauan ibu jari bawah untuk operasi satu tangan di sawah.
- **Sticky Status Navigation:** Header ringkas permanen setinggi $64\text{ px}$ (`h-16`) yang memuat identitas sistem, status konektivitas, dan pintasan modul krusial.

---

## Elevation & Depth

- **Tonal Slab Layering:** AgriAlert menghindari bayangan gelap bertingkat (*heavy dropshadows*) yang tampak kotor di bawah cahaya matahari langsung. Kedalaman diciptakan melalui pemisahan nada warna (*tonal contrast*) dan border perimeter presisi `1px` (`border-agro-850` atau `border-soil-200`).
- **Focus Rings:** Ring fokus aksesibilitas tegas `2px solid #F59E0B` dengan offset `2px` pada setiap tautan dan kontrol interaktif.

---

## Shapes

- **Radius Bulir Padi (*Grain Geometry*):**
  - Kontainer Utama Hero & Sesi Deteksi: `rounded-grain (32px)` merepresentasikan lengkungan aerodinamis bulir gabah.
  - Kartu Modul & Panel Hasil Diagnosis: `rounded-grain-sm (20px)`.
  - Tombol Interaktif & Kolom Input: `rounded-xl (12px)`.
  - Lencana Verifikasi & Status Indeks: `rounded-full (9999px)`.

---

## Components

### 1. Tombol Aksi Utama (*Primary Scan Button*)
- Latar belakang `{colors.harvest-gold}`, teks putih berbobot `font-bold`, radius `{rounded.md}`, padding `14px 24px`.
- Wajib memiliki transisi mikro `:active:scale-95` untuk kepastian sentuhan taktil di layar sentuh basah/berdebu.

### 2. Panel Hasil Klasifikasi AI (*Diagnosis Card*)
- Mengintegrasikan indikator kepercayaan model, persentase keyakinan, dan matriks validasi spektral HSV 4 lapis.
- Menampilkan spesimen referensi berdampingan (*side-by-side*) dengan foto daun hasil tangkapan kamera pengguna.

### 3. TaniBot Consultation Drawer
- Antarmuka pohon keputusan navigasi instan tanpa pengetikan manual panjang (tombol pilihan cepat berbasis gejala lapangan).

---

## Do's and Don'ts

### Do:
- **Do** pertahankan rasio kontras teks minimal $4.5:1$ (WCAG AA) pada seluruh elemen antarmuka, terutama kartu metrik lapangan.
- **Do** sertakan ikon simbolik bersamaan dengan label teks pada setiap sinyal peringatan bahaya hama (tidak mengandalkan kode warna merah/kuning semata).
- **Do** pastikan seluruh tombol aksi utama memiliki tinggi minimal $48\text{ px}$ untuk kemudahan sentuhan jari petani.

### Don't:
- **Don't** menggunakan animasi memantul murahan (*bounce slop easing*) yang memperlambat rendering gawai berdaya rendah.
- **Don't** menggunakan teks abu-abu tipis (*low-contrast gray*) yang memudar di bawah sinar matahari terbuka.
- **Don't** menyertakan elemen visual dekoratif abstrak yang mengaburkan instruksi dosis penanganan hama.
