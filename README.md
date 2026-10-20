# Studi Kasus: Human-Computer Interaction (HCI) dan Data Visualization

## 1. Pendahuluan

Human-Computer Interaction (HCI) atau Interaksi Manusia dan Komputer (IMK) merupakan bidang ilmu yang mempelajari interaksi antara manusia dan sistem komputer, khususnya dalam perancangan antarmuka yang mudah digunakan, dipahami, dan sesuai dengan kebutuhan pengguna. Sementara itu, visualisasi data merupakan proses penyajian informasi dalam bentuk grafik, diagram, atau representasi visual lainnya agar data lebih mudah dianalisis.

Penerapan HCI dan visualisasi data sangat penting dalam pengembangan sistem informasi. Antarmuka yang baik dapat membantu pengguna memahami informasi dengan cepat, sedangkan visualisasi yang tepat dapat mempermudah pengguna menemukan pola, membandingkan data, dan mengambil keputusan.

## 2. Latar Belakang Masalah

Usaha Mikro, Kecil, dan Menengah (UMKM) menghasilkan data penjualan setiap bulan, seperti jumlah produk yang terjual dan total pendapatan. Namun, apabila data tersebut hanya disajikan dalam bentuk angka atau catatan biasa, pemilik usaha dapat mengalami kesulitan dalam mengetahui tren penjualan dan menentukan produk yang paling diminati pelanggan.

Permasalahan tersebut menunjukkan perlunya sistem yang mampu menyajikan data secara sederhana, menarik, dan interaktif. Oleh karena itu, dibuat sebuah dashboard penjualan UMKM yang menerapkan prinsip Human-Computer Interaction dan visualisasi data untuk membantu pengguna memahami informasi penjualan secara lebih efektif.

## 3. Rumusan Masalah

Berdasarkan latar belakang tersebut, rumusan masalah dalam studi kasus ini adalah:

1. Bagaimana merancang antarmuka dashboard yang mudah dipahami oleh pengguna?
2. Bagaimana menyajikan data penjualan agar lebih mudah dianalisis?
3. Bagaimana menerapkan fitur interaktif untuk membantu pengguna mengeksplorasi data?
4. Bagaimana merancang dashboard yang sesuai dengan kebutuhan pengguna?

## 4. Tujuan

Tujuan pengembangan studi kasus ini adalah:

1. Menerapkan prinsip HCI dalam perancangan antarmuka pengguna.
2. Menyajikan data penjualan melalui grafik dan tabel yang informatif.
3. Mengembangkan fitur filter kategori untuk mempermudah eksplorasi data.
4. Membuat dashboard yang sederhana, interaktif, dan mudah digunakan.
5. Mempraktikkan implementasi aplikasi web menggunakan HTML, CSS, dan JavaScript serta mengelola proyek melalui GitHub.

## 5. Deskripsi Studi Kasus

Studi kasus ini berfokus pada pengembangan **Dashboard Penjualan UMKM**, yaitu aplikasi web sederhana yang menampilkan informasi penjualan selama enam bulan, dari Januari hingga Juni.

Dashboard dirancang untuk membantu pemilik UMKM mengetahui total pendapatan, jumlah unit yang terjual, produk terlaris, serta perubahan pendapatan setiap bulan. Pengguna juga dapat memilih kategori produk untuk melihat informasi yang lebih spesifik.

Data yang digunakan merupakan data simulasi yang dibuat untuk keperluan pembelajaran, bukan data penjualan dari UMKM yang sebenarnya.

### Pengguna Sasaran

Pengguna utama sistem ini adalah pemilik atau pengelola UMKM yang membutuhkan informasi penjualan secara cepat dan mudah dipahami. Sistem dirancang dengan tampilan sederhana agar dapat digunakan oleh pengguna tanpa keahlian teknis khusus.

## 6. Analisis Kebutuhan Sistem

### 6.1 Kebutuhan Fungsional

Kebutuhan fungsional merupakan fitur yang harus disediakan oleh sistem.

1. Menampilkan total pendapatan berdasarkan data yang dipilih.
2. Menampilkan jumlah keseluruhan unit yang terjual.
3. Menampilkan produk dengan jumlah penjualan tertinggi.
4. Menampilkan grafik garis pendapatan bulanan.
5. Menampilkan grafik batang jumlah unit terjual per produk.
6. Menampilkan data penjualan dalam bentuk tabel.
7. Menyediakan filter berdasarkan kategori produk.
8. Menyediakan tombol untuk mengembalikan filter ke kondisi awal.
9. Menyediakan formulir penilaian kemudahan penggunaan dashboard.

### 6.2 Kebutuhan Nonfungsional

Kebutuhan nonfungsional berkaitan dengan kualitas dan karakteristik sistem.

1. **Kemudahan penggunaan:** antarmuka harus mudah dipahami.
2. **Konsistensi:** warna, tombol, judul, dan tata letak harus seragam.
3. **Responsivitas:** tampilan dapat menyesuaikan ukuran layar.
4. **Aksesibilitas:** teks, label, tabel, dan kontrol harus mudah dikenali.
5. **Kinerja:** data dapat ditampilkan dan diperbarui tanpa proses yang rumit.
6. **Keamanan dan privasi:** sistem tidak meminta informasi pribadi yang tidak diperlukan.

## 7. Perancangan Antarmuka Berdasarkan Prinsip HCI

Dalam pengembangan dashboard, beberapa prinsip HCI diterapkan sebagai berikut.

### 7.1 User-Centered Design

Desain berfokus pada kebutuhan pengguna, yaitu mengetahui pendapatan, membandingkan produk, dan memahami tren penjualan. Fitur dipilih berdasarkan kebutuhan tersebut agar informasi penting mudah ditemukan.

### 7.2 Konsistensi Antarmuka

Warna, bentuk tombol, jarak antarelemen, dan gaya judul dibuat konsisten untuk membantu pengguna memahami pola penggunaan sistem.

### 7.3 Visibility of System Status

Sistem menampilkan informasi mengenai filter yang sedang digunakan. Dengan demikian, pengguna dapat mengetahui kategori yang sedang ditampilkan.

### 7.4 Recognition Rather Than Recall

Informasi penting, seperti nama kategori, judul grafik, dan keterangan metrik, ditampilkan secara langsung. Pengguna tidak harus mengingat arti setiap bagian dashboard.

### 7.5 Aksesibilitas

Sistem menggunakan label pada formulir, judul kolom pada tabel, dan pesan status yang dapat dikenali teknologi bantu. Tampilan juga dirancang agar tetap dapat digunakan pada layar yang lebih kecil.

### 7.6 Menghindari Dark Pattern

Antarmuka tidak menggunakan manipulasi yang mendorong pengguna melakukan tindakan yang tidak diinginkan. Filter dan formulir disajikan secara jelas sehingga pengguna dapat mengendalikan interaksinya sendiri.

## 8. Perancangan Visualisasi Data

Visualisasi dipilih berdasarkan jenis informasi yang ingin disampaikan.

| Komponen | Fungsi |
|---|---|
| Kartu ringkasan | Menampilkan total pendapatan, unit terjual, dan produk terlaris |
| Grafik garis | Menunjukkan perubahan pendapatan dari Januari hingga Juni |
| Grafik batang | Membandingkan jumlah unit terjual setiap produk |
| Tabel data | Menampilkan rincian bulan, produk, kategori, unit terjual, dan pendapatan |
| Filter kategori | Memungkinkan pengguna menampilkan data berdasarkan kategori tertentu |

Grafik garis digunakan untuk melihat tren dari waktu ke waktu, sedangkan grafik batang digunakan untuk membandingkan nilai antarproduk. Tabel disediakan sebagai pelengkap agar pengguna tetap dapat membaca angka secara langsung.

## 9. Kesimpulan

Studi kasus Dashboard Penjualan UMKM menunjukkan penerapan prinsip Human-Computer Interaction dan visualisasi data dalam pengembangan aplikasi web sederhana. Prinsip HCI diterapkan melalui antarmuka yang konsisten, informasi status yang jelas, aksesibilitas, dan fitur yang berfokus pada kebutuhan pengguna. Sementara itu, visualisasi data menggunakan grafik garis, grafik batang, kartu ringkasan, dan tabel untuk membantu pengguna memahami informasi penjualan.

Implementasi menggunakan HTML, CSS, dan JavaScript menghasilkan dashboard yang interaktif dan responsif. Melalui proyek ini, prinsip HCI dan visualisasi data dapat dipelajari sekaligus diterapkan dalam pengembangan sistem informasi yang lebih efektif dan berorientasi pada pengguna.
