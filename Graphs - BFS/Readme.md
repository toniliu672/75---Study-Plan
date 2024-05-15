Algoritma yang digunakan dalam kedua permasalahan tersebut adalah Breadth-First Search (BFS), yang merupakan salah satu algoritma pencarian dalam teori graf.

## Permasalahan Nearest Exit:

Algoritma yang digunakan adalah BFS untuk mencari jalur terpendek dari pintu masuk (entrance) menuju pintu keluar (exit) terdekat dalam labirin (maze).
Dalam BFS, kita memulai dari sel pintu masuk (entrance) dan melakukan pencarian secara bertahap, mengunjungi sel-sel tetangga yang belum dikunjungi dan menambahkannya ke dalam antrian.
Setiap kali kita mengunjungi sel baru, kita menghitung jumlah langkah yang diperlukan untuk mencapai sel tersebut dari pintu masuk.
Jika sel yang dikunjungi berada di pinggir labirin dan bukan pintu masuk, maka kita telah menemukan pintu keluar terdekat, dan jumlah langkah yang diperlukan adalah solusi yang dicari.
Jika antrian menjadi kosong dan tidak ada pintu keluar yang ditemukan, maka tidak ada jalur yang memenuhi syarat, dan kita mengembalikan -1.


## Permasalahan Oranges Rotting:

Algoritma yang digunakan juga adalah BFS untuk menyimulasikan proses pembusukan jeruk segar yang bertetangga dengan jeruk busuk.
Pertama, kita menghitung jumlah jeruk segar dan memasukkan semua jeruk busuk ke dalam antrian.
Dalam setiap menit, kita memproses semua jeruk busuk yang saat ini ada dalam antrian dan memeriksa sel-sel tetangganya (atas, bawah, kiri, kanan).
Jika sel tetangga berisi jeruk segar, kita menandainya sebagai jeruk busuk, mengurangi jumlah jeruk segar, dan memasukkan sel tersebut ke dalam antrian untuk diproses pada menit berikutnya.
Proses ini berlanjut hingga tidak ada lagi jeruk segar atau tidak ada lagi jeruk busuk yang perlu diproses.
Jika masih ada jeruk segar tersisa setelah proses selesai, berarti ada jeruk segar yang tidak dapat membusuk, dan kita mengembalikan -1.
Jika semua jeruk segar berhasil membusuk, kita mengembalikan jumlah menit yang diperlukan untuk proses pembusukan.



## Penerapan di Dunia Nyata:

### Pencarian Jalur Terpendek:

Algoritma BFS dapat digunakan dalam berbagai aplikasi pencarian jalur terpendek, seperti navigasi kendaraan, pencarian rute dalam jaringan komputer, atau pencarian jalur dalam game.
Contoh penerapannya adalah dalam aplikasi navigasi seperti Google Maps atau Waze, di mana algoritma BFS digunakan untuk menemukan rute terpendek dari lokasi awal menuju tujuan, dengan mempertimbangkan jalan yang dapat dilalui dan menghindari hambatan seperti jalan buntu atau jalan yang sedang dalam perbaikan.


### Simulasi Penyebaran:

Masalah Oranges Rotting merupakan contoh sederhana dari simulasi penyebaran atau perambatan dalam suatu sistem.
Konsep ini dapat diterapkan dalam berbagai bidang, seperti epidemiologi (penyebaran penyakit), kimia (reaksi berantai), atau jaringan sosial (penyebaran informasi atau tren).
Contoh penerapannya adalah dalam pemodelan penyebaran virus atau wabah penyakit, di mana algoritma BFS dapat digunakan untuk menyimulasikan bagaimana virus menyebar dari individu yang terinfeksi ke individu lain yang berada di sekitarnya, dengan mempertimbangkan faktor seperti jarak dan interaksi antar individu.