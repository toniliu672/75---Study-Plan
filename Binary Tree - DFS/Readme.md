# Maximum Depth of Binary Tree

**Pendekatan:** Rekursi

**Algoritma:** Depth-First Search (DFS)

**Penjelasan:** Solusi ini menggunakan pendekatan rekursif dengan DFS untuk menghitung kedalaman maksimum dari binary tree. Pada setiap node, fungsi rekursif dipanggil pada subtree kiri dan kanan, dan kedalaman maksimum dihitung dengan mengambil nilai maksimum dari kedalaman subtree kiri dan kanan, ditambah 1 (untuk node saat ini).

**Penerapan:** Dalam struktur data seperti binary tree, mengetahui kedalaman maksimum dapat berguna untuk mengoptimalkan operasi seperti pencarian, penyisipan, dan penghapusan. Selain itu, algoritma ini juga dapat digunakan dalam pemrosesan gambar biner atau analisis data hierarkis.

---

# Leaf-Similar Trees

**Pendekatan:** Rekursi

**Algoritma:** Depth-First Search (DFS)

**Penjelasan:** Solusi ini menggunakan pendekatan rekursif dengan DFS untuk mengumpulkan semua nilai daun (leaf) dari dua binary tree. Kemudian, kedua daftar nilai daun dibandingkan untuk memeriksa apakah keduanya identik atau tidak.

**Penerapan:** Algoritma ini dapat digunakan dalam pemrosesan data hierarkis atau struktur data seperti XML atau JSON, di mana kita perlu membandingkan subtree atau subbagian dari struktur data tersebut.

---

# Count Good Nodes in Binary Tree

**Pendekatan:** Rekursi

**Algoritma:** Depth-First Search (DFS)

**Penjelasan:** Solusi ini menggunakan pendekatan rekursif dengan DFS untuk melintasi binary tree dan menghitung jumlah node yang memenuhi kriteria "good node". Pada setiap node, nilai node dibandingkan dengan nilai maksimum yang telah ditemukan sejauh ini di sepanjang jalur dari root ke node saat ini. Jika nilai node lebih besar atau sama dengan nilai maksimum, maka node tersebut dihitung sebagai "good node".

**Penerapan:** Algoritma ini dapat digunakan dalam analisis data hierarkis atau struktur data seperti binary tree, di mana kita perlu menghitung jumlah node yang memenuhi kriteria tertentu berdasarkan nilai node dan jalur dari root ke node tersebut.

---

# Path Sum III

**Pendekatan:** Rekursi dengan Backtracking

**Algoritma:** Depth-First Search (DFS)

**Penjelasan:** Solusi ini menggunakan pendekatan rekursif dengan DFS dan backtracking untuk menghitung jumlah jalur di binary tree yang jumlahnya sama dengan target yang diberikan. Pada setiap node, algoritma memeriksa apakah jumlah jalur saat ini sama dengan target, kemudian melakukan rekursi pada subtree kiri dan kanan. Setelah rekursi, algoritma melakukan backtracking untuk memeriksa semua kemungkinan jalur yang dimulai dari node saat ini.

**Penerapan:** Algoritma ini dapat digunakan dalam analisis data hierarkis atau struktur data seperti binary tree, di mana kita perlu menemukan jumlah jalur yang memenuhi kriteria tertentu berdasarkan nilai node dan jumlah target yang diberikan.

---

# Longest ZigZag Path in a Binary Tree

**Pendekatan:** Rekursi

**Algoritma:** Depth-First Search (DFS)

**Penjelasan:** Solusi ini menggunakan pendekatan rekursif dengan DFS untuk menemukan jalur zigzag terpanjang di binary tree. Pada setiap node, algoritma melakukan rekursi pada subtree kiri dan kanan, dan menghitung panjang jalur zigzag terpanjang yang dimulai dari node saat ini dengan mempertimbangkan jalur zigzag dari subtree kiri dan kanan.

**Penerapan:** Algoritma ini dapat digunakan dalam analisis data hierarkis atau struktur data seperti binary tree, di mana kita perlu menemukan jalur terpanjang yang memenuhi kriteria tertentu, seperti pola zigzag.

---

# Lowest Common Ancestor of a Binary Tree

**Pendekatan:** Rekursi

**Algoritma:** Depth-First Search (DFS)

**Penjelasan:** Solusi ini menggunakan pendekatan rekursif dengan DFS untuk menemukan Lowest Common Ancestor (LCA) dari dua node yang diberikan di binary tree. Pada setiap node, algoritma melakukan pencarian rekursif pada subtree kiri dan kanan untuk menemukan p dan q. Jika p dan q ada di subtree yang berbeda, maka node saat ini adalah LCA. Jika p dan q ada di salah satu subtree, maka LCA ada di subtree tersebut.

**Penerapan:** Algoritma ini dapat digunakan dalam analisis data hierarkis atau struktur data seperti binary tree, di mana kita perlu menemukan nenek moyang terdekat (Lowest Common Ancestor) dari dua node yang diberikan. Hal ini berguna dalam banyak aplikasi, seperti bioinformatika (untuk menentukan hubungan evolusi antara spesies), compiler (untuk mengoptimalkan kode), dan lain-lain.
