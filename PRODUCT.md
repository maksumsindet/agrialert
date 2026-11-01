# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

1. **Petani Padi di Lapangan:** Mengoperasikan aplikasi langsung di pematang sawah dengan satu tangan di bawah terik sinar matahari; membutuhkan diagnosis visual cepat terhadap gejala penyakit daun dan rekomendasi aksi penanganan darurat tanpa hambatan teknis.
2. **Penyuluh Pertanian Lapangan (PPL) & POPT (Pengamat Organisme Pengganggu Tumbuhan):** Memerlukan data pemantauan iklim mikro-makro terverifikasi, riwayat anomali vegetasi satelit, dan panduan mitigasi berbasis ambang ekonomi resmi untuk mendampingi kelompok tani.
3. **Dewan Juri & Reviewer Kompetisi Nasional SATRIA DATA 2026 (Puspresnas Kemdiktisaintek RI):** Menilai rigor metodologi integrasi sains data multivariat (remote sensing radar/optik, dinamika oseanografi ENSO, dan neural network vision) serta kelayakan implementasi praktis di Indonesia.

## Product Purpose

Menyediakan sistem peringatan dini terintegrasi untuk mendeteksi ancaman penyakit tanaman padi sedini mungkin, mengantisipasi risiko iklim ekstrem berbasis data satelit/ENSO, dan memicu peringatan darurat (*early warning alarm*) agar kegagalan panen di tingkat petani dapat dicegah secara presisi.

## Positioning

Satu-satunya platform agronomi padi di Indonesia yang memadukan telekoneksi oseanografi iklim makro Samudera Pasifik (NOAA ERSSTv5 via LSTM $R^2 = 0.943$), penginderaan jauh radar gelombang mikro dan optik ESA Copernicus (Sentinel-1 SAR & Sentinel-2 NDVI), serta Computer Vision on-device/cloud berfilter spektral vegetasi 4 lapis HSV untuk proteksi tanaman padi menyeluruh.

## Operating Context

- Digunakan pada gawai mobile di area persawahan dengan paparan sinar matahari langsung (membutuhkan kontras visual tinggi dan target sentuh berjarak aman).
- Terhubung dengan backend komputasi awan / Cloud API untuk pemrosesan data analitik dan satelit berat, dengan arsitektur responsif yang tetap memberikan umpan balik status koneksi instan.
- Terikat pada naskah esai ilmiah resmi 24 halaman berkode registrasi kompetisi `SEC_(SD2026020000315)` SATRIA DATA 2026.

## Capabilities and Constraints

- **Kapabilitas:**
  - *Vision Classifier*: Klasifikasi citra daun padi untuk 6 kelas utama (Blas, Hawar Daun Bakteri/HDB, Bercak Cokelat, dsb.) didahului filter spektral vegetasi 4 lapis HSV untuk menolak foto non-daun.
  - *Early Warning Climate Alert*: Pemantauan indeks anomali ONI Samudera Pasifik dan proyeksi risiko anomali curah hujan/kekeringan ekstrem (El Niño/La Niña).
  - *Remote Sensing Satellite Tracking*: Monitoring kanopi kanopi padi (NDVI) dan hamburan balik radar biomassa tegakan (SAR VH/VV).
  - *TaniBot Consultation*: Asisten pakar berbasis pohon keputusan 61 node rujukan Ditjen Tanaman Pangan Kementan RI.
  - *Pelaporan Lapangan*: Formulir pengaduan serangan hama dengan penyimpanan lokal dan ekspor data CSV.
- **Batasan:**
  - Komputasi analitik berat dan pembaruan telemetri cuaca difasilitasi melalui arsitektur Server-backed / Cloud API.
  - Menghindari hasil diagnosis spekulatif: klasifikasi dilengkapi gerbang entropi Shannon dan ambang keyakinan minimal 35%.

## Brand Commitments

- **Nama Resmi:** AgriAlert
- **Konteks Prestasi:** Karya Esai Ilmiah SATRIA DATA 2026 — Puspresnas Kemdiktisaintek RI & Universitas Diponegoro.
- **Tone & Voice:** Siaga, tegas, ilmiah, dan berbasis peringatan darurat (*action-oriented early warning alarm*). Mengutamakan kejelasan bahaya dan panduan intervensi taktis.
- **Identitas Visual:** Elemen agrikultur presisi (Emerald Forest, Golden Harvest, Sky Telemetry, Signal Hazard Amber/Red untuk status kritis).

## Evidence on Hand

- Dokumen Naskah Ilmiah: Berkas resmi esai 24 halaman registrasi `SEC_(SD2026020000315)`.
- Dataset Terverifikasi: Data time-series ONI ENSO Samudera Pasifik di `src/data/enso_recent.json`, metrik model LSTM di `src/data/oni_metrics.json`, data Sentinel-1 SAR di `src/data/sentinel1.json`, dan Sentinel-2 NDVI di `src/data/sentinel2.json`.
- Basis Pengetahuan Resmi: Dokumen Ditjen Tanaman Pangan Kementan RI yang dikompilasi pada `src/data/tanibot_data_v2.json`.
- Aset Spesimen Ilmiah: Foto referensi hama dan penyakit padi autentik di `public/assets/hama/`.

## Product Principles

1. **Peringatan Sebelum Kerugian (*Early Alarm First*):** Setiap anomali iklim dan indikasi penyakit harus memicu sinyal peringatan yang jelas dan dapat dieksekusi sebelum kerusakan menyebar.
2. **Keterbacaan Lapangan Ekstrem (*Outdoor Clarity*):** Tata letak dan kontras visual dirancang khusus agar tetap terbaca jelas di bawah terik sinar matahari sawah dengan interaksi satu tangan yang ergonomis.
3. **Integritas Metodologi Ilmiah:** Seluruh batas ambang kendali, metrik akurasi, dan formula peramalan berakar kuat pada data terukur dan rujukan kementerian yang sah.

## Accessibility & Inclusion

- Rasio kontras teks minimal $4.5:1$ (WCAG AA), dengan aksen peringatan darurat yang membedakan bahaya menggunakan teks deskriptif dan ikon simbolik (tidak mengandalkan warna semata bagi pengguna dengan gangguan penglihatan warna).
- Ukuran target interaksi minimal $44 \times 44\text{ px}$ untuk memudahkan sentuhan jari pengguna di lapangan.

