### Masalah 1: House Robber Problem

#### Algoritma: Dynamic Programming

**Ilustrasi dan Penjelasan:**

Tujuannya adalah memaksimalkan jumlah uang yang dapat Anda curi tanpa mencuri dua rumah yang bersebelahan· Berikut cara kita menyelesaikan masalah ini menggunakan Dynamic Programming:

1· **Definisi State:**
   - Misalkan `dp[i]` mewakili jumlah uang maksimum yang dapat dicuri dari rumah pertama hingga rumah ke-i·

2· **Relasi Rekurens:**
   - Untuk setiap rumah `i`, Anda memiliki dua pilihan:
     - **Tidak mencuri rumah `i`:** Dalam kasus ini, uang maksimum sama dengan jumlah uang maksimum dari rumah pertama hingga rumah ke-i-1, yang berarti `dp[i-1]`·
     - **Mencuri rumah `i`:** Dalam kasus ini, Anda tidak dapat mencuri rumah ke-i-1, sehingga uang maksimum adalah uang dari rumah `i` ditambah jumlah uang maksimum dari rumah pertama hingga rumah ke-i-2, yaitu `nums[i] + dp[i-2]`·
   - Oleh karena itu, relasi rekurensnya adalah:
     \[
     dp[i] = \max(dp[i-1], nums[i] + dp[i-2])
     \]

3· **Kasus Dasar:**
   - `dp[0] = nums[0]` (jika hanya ada satu rumah, curi rumah tersebut)
   - `dp[1] = \max(nums[0], nums[1])` (untuk dua rumah, curi yang memiliki uang lebih banyak)

4· **Menghitung Array DP:**
   - Mulai dari kasus dasar dan gunakan relasi rekurens untuk mengisi array `dp` hingga `dp[n-1]`·

**Contoh:**

Misalkan inputnya `nums = [2, 7, 9, 3, 1]`·

- Inisialisasi array DP:
  ```
  dp = [2, max(2, 7), 0, 0, 0]
  dp = [2, 7, 0, 0, 0]
  ```

- Isi array DP menggunakan relasi rekurens:
  ```
  dp[2] = max(dp[1], nums[2] + dp[0]) = max(7, 9 + 2) = 11
  dp[3] = max(dp[2], nums[3] + dp[1]) = max(11, 3 + 7) = 11
  dp[4] = max(dp[3], nums[4] + dp[2]) = max(11, 1 + 11) = 12
  ```

- Array DP akhir:
  ```
  dp = [2, 7, 11, 11, 12]
  ```

- Jawabannya adalah `dp[4] = 12`·

### Masalah 2: Menyusun Ubin pada Papan 2 x n

#### Algoritma: Dynamic Programming

**Ilustrasi dan Penjelasan:**

Tujuannya adalah menghitung jumlah cara menyusun ubin pada papan 2 x n menggunakan ubin domino 2 x 1 dan tromino berbentuk L· Masalah ini diselesaikan menggunakan Dynamic Programming dengan langkah-langkah berikut:

1· **Definisi State:**
   - Misalkan `dp[i]` mewakili jumlah cara untuk menyusun ubin pada papan 2 x i·

2· **Relasi Rekurens:**
   - Untuk menyusun ubin pada papan 2 x n, pertimbangkan hal berikut:
     - Jika ubin terakhir adalah domino vertikal, masalahnya berkurang menjadi menyusun ubin pada papan 2 x (n-1)·
     - Jika dua ubin terakhir adalah domino horizontal, masalahnya berkurang menjadi menyusun ubin pada papan 2 x (n-2)·
     - Jika ubin terakhir adalah tromino berbentuk L (menutupi tiga kolom), masalahnya berkurang menjadi menyusun ubin pada papan 2 x (n-3)·
   - Oleh karena itu, relasi rekurensnya adalah:
     \[
     dp[i] = (2 \times dp[i-1] + dp[i-3]) \mod (10^9 + 7)
     \]

3· **Kasus Dasar:**
   - `dp[1] = 1` (hanya satu cara untuk menyusun ubin pada papan 2x1 dengan domino vertikal)
   - `dp[2] = 2` (dua cara untuk menyusun ubin pada papan 2x2: dua domino vertikal atau dua domino horizontal)
   - `dp[3] = 5` (lima cara untuk menyusun ubin pada papan 2x3: beberapa kombinasi tromino dan domino)

4· **Menghitung Array DP:**
   - Gunakan kasus dasar dan relasi rekurens untuk mengisi array `dp` hingga `dp[n]`·

**Contoh:**

Misalkan inputnya `n = 4`·

- Inisialisasi array DP dengan kasus dasar:
  ```
  dp = [0, 1, 2, 5, 0]
  ```

- Isi array DP menggunakan relasi rekurens:
  ```
  dp[4] = (2 * dp[3] + dp[1]) % (10^9 + 7)
  dp[4] = (2 * 5 + 1) % (10^9 + 7)
  dp[4] = 11
  ```

- Array DP akhir:
  ```
  dp = [0, 1, 2, 5, 11]
  ```

- Jawabannya adalah `dp[4] = 11`·

Kedua masalah ini menggunakan Dynamic Programming untuk memecah masalah yang kompleks menjadi submasalah yang lebih kecil, memanfaatkan hasil dari submasalah yang sudah diselesaikan untuk membangun solusi hingga mencapai solusi akhir· Pendekatan ini memastikan solusi yang efisien dengan kompleksitas waktu polinomial· 