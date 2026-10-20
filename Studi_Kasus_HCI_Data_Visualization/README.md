# Studi Kasus HCI dan Data Visualization: Dashboard Penjualan UMKM

## 1. Latar Belakang
Pemilik UMKM memiliki data penjualan bulanan, tetapi sulit membandingkan penjualan antarkategori dan melihat perubahan pendapatan. Studi kasus ini membuat dashboard sederhana untuk membantu pengguna memahami data tanpa harus membaca angka satu per satu.

> **Catatan:** Data pada proyek ini adalah data simulasi untuk pembelajaran, bukan data bisnis sungguhan.

## 2. Tujuan
- Menerapkan prinsip Human-Computer Interaction (HCI/IMK).
- Menyajikan data dengan visualisasi yang sesuai.
- Membuat filter interaktif yang memperbarui ringkasan dan grafik.
- Menyediakan evaluasi usability sederhana.
- Mempraktikkan pengelolaan proyek menggunakan GitHub.

## 3. Pengguna Sasaran
Pemilik atau pengelola UMKM yang ingin mengetahui pendapatan bulanan dan produk yang paling banyak terjual. Pengguna diasumsikan membutuhkan tampilan yang sederhana, label yang jelas, serta informasi yang mudah dibandingkan.

## 4. Implementasi Prinsip HCI
1. **User-centered design:** fitur dipilih berdasarkan kebutuhan pengguna untuk memahami penjualan.
2. **Konsistensi:** warna, tombol, jarak, dan gaya judul dibuat konsisten.
3. **Visibility of system status:** teks status menunjukkan filter yang sedang aktif.
4. **Recognition rather than recall:** nama kategori, judul grafik, dan label metrik ditampilkan langsung.
5. **Accessibility:** formulir memiliki label, tabel memakai header, status diumumkan dengan `aria-live`, dan halaman responsif.
6. **Menghindari dark pattern:** filter tidak menyembunyikan biaya atau memaksa pengguna melakukan tindakan yang tidak diinginkan.
7. **Evaluasi:** formulir umpan balik menyediakan penilaian kemudahan penggunaan. Data umpan balik tidak dikirim ke server.

## 5. Pemilihan Visualisasi
- **Grafik garis:** menunjukkan perubahan total pendapatan dari Januari sampai Juni.
- **Grafik batang:** membandingkan jumlah unit terjual per produk.
- **Kartu ringkasan:** menampilkan pendapatan total, unit terjual, dan produk terlaris.
- **Tabel:** menyediakan angka detail sebagai alternatif yang lebih mudah diakses daripada grafik saja.
- **Filter kategori:** memungkinkan pengguna mengeksplorasi subset data.

## 6. Teknologi
- HTML untuk struktur halaman.
- CSS untuk tata letak dan tampilan responsif.
- JavaScript untuk filter, perhitungan ringkasan, tabel, dan grafik Canvas.
- Git dan GitHub untuk version control dan publikasi proyek.

## 7. Cara Menjalankan di VS Code
1. Unduh dan ekstrak folder proyek.
2. Buka Visual Studio Code.
3. Pilih **File → Open Folder**, lalu pilih folder `Studi_Kasus_HCI_Data_Visualization`.
4. Buka file `index.html`.
5. Jalankan dengan membuka `index.html` di browser. Jika memiliki ekstensi **Live Server**, klik kanan `index.html` lalu pilih **Open with Live Server**.
6. Coba ubah filter kategori dan periksa perubahan kartu ringkasan serta grafik.

Proyek ini tidak membutuhkan instalasi library atau koneksi internet.

## 8. Struktur Folder
```text
Studi_Kasus_HCI_Data_Visualization/
├── index.html
├── style.css
├── script.js
└── README.md
```

## 9. Skenario Pengujian Usability
Mintalah 3–5 orang mencoba dashboard, lalu catat hasilnya. Jangan menganggap hasil pengujian sudah ada sebelum benar-benar dilakukan.

| Tugas pengguna | Kriteria berhasil |
|---|---|
| Menemukan pendapatan total | Pengguna dapat menyebutkan nilai pada kartu pendapatan |
| Memilih kategori Minuman | Ringkasan, tabel, dan grafik berubah sesuai filter |
| Mengembalikan semua data | Tombol “Atur ulang filter” menampilkan semua kategori |
| Menemukan produk terlaris | Pengguna dapat menemukan produk dari kartu ringkasan |
| Mengirim penilaian | Pesan konfirmasi muncul setelah formulir dikirim |

Pertanyaan evaluasi:
- Apakah judul dan label mudah dipahami?
- Apakah grafik membantu membandingkan data?
- Apakah filter mudah ditemukan?
- Bagian mana yang membingungkan?
- Perbaikan apa yang paling dibutuhkan?

Catat jumlah tugas yang berhasil, waktu penyelesaian, kesalahan yang terjadi, dan komentar peserta. Hindari memasukkan nama atau informasi pribadi peserta ke repository publik.

## 10. Contoh Analisis Hasil
Setelah pengujian nyata, rangkum temuan seperti ini:
- **Temuan:** [isi berdasarkan hasil pengujian].
- **Masalah utama:** [bagian yang membuat pengguna bingung].
- **Perbaikan:** [perubahan yang dilakukan].
- **Hasil setelah perbaikan:** [uji kembali dan catat hasilnya].

Jangan mengisi bagian ini dengan angka atau kesimpulan yang dibuat-buat.

## 11. Upload ke GitHub

### Opsi A — Melalui situs GitHub
1. Masuk ke https://github.com dan buat repository baru, misalnya `studi-kasus-hci-data-visualization`.
2. Pilih **Public** jika tugas perlu dilihat pemateri/dosen. Jangan unggah data pribadi.
3. Klik **Add file → Upload files**.
4. Unggah file `index.html`, `style.css`, `script.js`, dan `README.md` (atau isi folder proyek).
5. Isi pesan commit, misalnya `Menambahkan studi kasus HCI dan visualisasi data`.
6. Klik **Commit changes**.

### Opsi B — Melalui Terminal VS Code
Pastikan Git sudah terpasang dan repository kosong sudah dibuat di akun GitHub. Jalankan terminal dari folder proyek:

```bash
git init
git add .
git commit -m "Menambahkan studi kasus HCI dan visualisasi data"
git branch -M main
git remote add origin https://github.com/USERNAME/studi-kasus-hci-data-visualization.git
git push -u origin main
```

Ganti `USERNAME` dengan username GitHub sendiri. Jika diminta login, ikuti proses autentikasi GitHub. Jika `origin` sudah ada, periksa dengan `git remote -v` dan jangan menambahkan remote yang sama dua kali.

### Opsional — Publikasikan dengan GitHub Pages
1. Buka repository di GitHub.
2. Masuk ke **Settings → Pages**.
3. Pada bagian build/deployment, pilih deploy dari branch `main` dan folder `/ (root)`.
4. Simpan pengaturan dan tunggu proses publikasi selesai. GitHub akan menampilkan alamat situs setelah berhasil.

## 12. Kesimpulan
Proyek ini menunjukkan bagaimana prinsip HCI dapat diterapkan melalui antarmuka yang konsisten, status filter yang jelas, label yang mudah dipahami, desain responsif, dan umpan balik pengguna. Grafik garis dan batang membantu melihat tren serta membandingkan kategori, sedangkan tabel menjaga detail angka tetap tersedia. Pengujian dengan pengguna sungguhan tetap diperlukan untuk mengetahui apakah dashboard benar-benar mudah digunakan.
