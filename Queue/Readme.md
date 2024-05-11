### RecentCounter:

Menggunakan deque (Python) atau array (TypeScript) sebagai queue untuk menyimpan permintaan.
Pada setiap ping, tambahkan waktu permintaan baru ke queue.
Hapus permintaan yang di luar jendela waktu 3000 milidetik.
Kembalikan panjang queue sebagai jumlah permintaan terbaru.


### PredictPartyVictory:

Menggunakan dua queue (radiant dan dire) untuk melacak senator dari masing-masing pihak yang masih memiliki hak suara.
Iterasi melalui setiap senator dan masukkan ke queue sesuai pihaknya.
Lakukan simulasi pemungutan suara:

Ambil senator pertama dari masing-masing queue.
Senator dengan indeks terkecil akan dilarang hak suaranya oleh senator lainnya.
Senator yang dilarang hak suaranya akan ditambahkan kembali ke akhir queue dengan indeks ditambah n (jumlah total senator).


Iterasi berlanjut sampai hanya tersisa satu pihak di queue.
Kembalikan pihak yang memenangkan pemungutan suara.



Kedua solusi ini memiliki kompleksitas waktu O(n) dan kompleksitas ruang O(n), di mana n adalah jumlah senator atau permintaan. Pendekatan ini efisien dan memenuhi batasan masalah yang diberikan.