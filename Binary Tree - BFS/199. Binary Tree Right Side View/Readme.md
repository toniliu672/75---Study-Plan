### Solution
Solusi ini menggunakan pendekatan Breadth-First Search (BFS) dengan struktur data antrian. Kita melintasi pohon biner level demi level, dan untuk setiap level, kita melacak nilai node paling kanan. Nilai ini kemudian ditambahkan ke daftar hasil.

Jika akar adalah null, kita mengembalikan daftar kosong. Kita menginisialisasi antrian dan daftar hasil, lalu memasukkan node akar ke dalam antrian. Selama antrian tidak kosong, kita mendapatkan ukuran level saat ini. Kita menginisialisasi variabel rightValue untuk menyimpan nilai paling kanan untuk level saat ini.

Selama iterasi level saat ini, kita mengeluarkan node dari antrian dan memperbarui rightValue dengan nilai node. Kita memasukkan anak kiri dan kanan node (jika ada) ke dalam antrian. Kemudian, kita menambahkan rightValue ke daftar hasil. Pada akhirnya, kita mengembalikan daftar hasil.

Kompleksitas waktu dari solusi ini adalah O(n), di mana n adalah jumlah node dalam pohon biner, karena kita mengunjungi setiap node sekali. Kompleksitas ruang adalah O(n) dalam kasus terburuk ketika pohon biner sepenuhnya tidak seimbang (seperti daftar terkait), karena kita perlu menyimpan semua node dalam antrian.

### Real Life Example
Masalah ini dapat terkait dengan skenario dunia nyata di mana Anda ingin memvisualisasikan atau menampilkan struktur hierarkis, seperti bagan organisasi atau sistem file, dari perspektif tertentu. Tampilan sisi kanan dari pohon biner mewakili node yang akan terlihat dari sisi paling kanan struktur, yang dapat berguna untuk menampilkan tampilan yang ringkas atau ringkasan dari hierarki.

