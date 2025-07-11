# 🩺 Terapro

**Terapro** adalah aplikasi web berbasis React.js (Vite) yang memanfaatkan **Convex** sebagai backend realtime. Proyek ini dirancang untuk efisiensi dan kecepatan dalam pengembangan aplikasi web modern.

---

## 🚀 Menjalankan Aplikasi

Ikuti langkah-langkah berikut untuk menjalankan aplikasi di lokal:

### 1. Clone Repositori

```bash
git clone https://github.com/akhmadramedhon/terapro.git
cd terapro

2. Install Dependencies
npm install

3. Buat File Environment
Buat file .env.local di root folder dan tambahkan API key dari dokumentasi Convex atau layanan lain yang digunakan:

CONVEX_DEPLOYMENT=your_convex_deployment_url
VITE_CONVEX_URL=your_convex_deployment_url
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_deployment_url
MIDTRANS_CLIENT_KEY=your_midtrans_client_url
MIDTRANS_SERVER_KEY=your_midtrans_server_url


🔑 Catatan: Pastikan kamu sudah mendaftarkan project di Convex.dev dan mendapatkan deployment URL serta key-nya.

4. Jalankan Project
npm run dev

Aplikasi akan berjalan di:
👉 http://localhost:5173 (default Vite dev server)

⚙️ Teknologi yang Digunakan
💡 React.js

⚡ Vite

🧠 Convex

🛠️ Tailwind CSS (opsional, jika digunakan)