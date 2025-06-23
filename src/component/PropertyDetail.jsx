import {
  Ruler,
  Calendar,
  Landmark,
  Info,
} from 'lucide-react';

export default function PropertyDetail() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 min-h-screen">
      {/* Gambar utama */}
      <div className="rounded-xl overflow-hidden shadow">
        <img
          src="https://www.jurnal.id/wp-content/uploads/2019/10/pexels-photo-106399.jpeg"
          alt="Rumah"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Konten */}
      <div className="mt-6 space-y-6 bg-white p-6 rounded-xl shadow">
        {/* Judul */}
        <h1 className="text-xl font-bold text-gray-900">
          Jl. Melati Raya No. 27, Bandung
        </h1>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Info utama */}
          <div className="flex flex-col gap-4 text-sm w-full lg:w-1/4">
            <div className="flex items-center gap-2 px-3 py-2 border rounded-lg bg-gray-50">
              <Ruler className="h-4 w-4 text-gray-600" />
              <span>10×10</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 border rounded-lg bg-gray-50">
              <Landmark className="h-4 w-4 text-gray-600" />
              <span>Rp 1.000.000.000</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 border rounded-lg bg-gray-50">
              <Calendar className="h-4 w-4 text-gray-600" />
              <span>4 Januari 2025</span>
            </div>
          </div>

          {/* Fasilitas */}
          <div className="bg-gray-100 rounded-xl p-4 text-sm w-full lg:w-1/3 border">
            <p className="font-semibold text-gray-800 mb-2">Fasilitas:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Taman Kecil</li>
              <li>Garasi</li>
              <li>Dapur Terbuka</li>
              <li>Ruang Keluarga</li>
              {/* <li>Kamar Tidur Luas</li>
              <li>Keamanan 24 Jam</li>
              <li>Koneksi Wi-Fi</li>
              <li>Area Parkir</li> */}
            </ul>
          </div>

          {/* Peringatan & Tombol */}
          <div className="flex flex-col justify-between w-full lg:w-1/2 space-y-4">
            {/* Peringatan */}
            <div className="bg-red-100 border border-red-300 text-red-700 p-4 rounded-xl text-sm flex items-start gap-2">
              <Info className="h-5 w-5 mt-0.5 shrink-0" />
              <p>
                Baca dengan saksama deskripsi produk dan pastikan barang yang ditawarkan
                sesuai dengan yang dijelaskan. Jika ada yang tidak jelas, tanyakan kepada
                penjual terlebih dahulu.
              </p>
            </div>

            {/* Tombol Aksi */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button className="px-4 py-2 border rounded-lg text-white bg-black hover:bg-gray-800 w-full sm:w-1/2">
                Booking Konsultan
              </button>
              <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 w-full sm:w-1/2">
                Chat Pembeli
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
