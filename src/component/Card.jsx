import {
  Ruler,
  Calendar,
  ListOrdered,
  Landmark,
} from 'lucide-react';

function PropertyCard() {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-md border bg-white">
      <img
        src="https://www.jurnal.id/wp-content/uploads/2019/10/pexels-photo-106399.jpeg"
        alt="Rumah"
        className="w-full h-48 object-cover"
      />

      <div className="p-4 space-y-3">
        <h2 className="text-base font-semibold text-gray-800">
          Jl. Melati Raya No. 27, Bandung
        </h2>

        <div className="flex items-center text-sm text-gray-600 space-x-2">
          <Ruler className="h-4 w-4" />
          <span>10×20</span>
        </div>

        <div className="flex items-center text-sm text-gray-600 space-x-2">
          <Landmark className="h-4 w-4" />
          <span>Rp 900.000.000</span>
        </div>

        <div className="text-sm text-gray-700">
          <div className="flex items-center gap-2 font-medium text-gray-800">
            <ListOrdered className="h-4 w-4" />
            <span>Fasilitas:</span>
          </div>
          <ul className="list-disc list-inside ml-6 mt-1 space-y-0.5">
            <li>2 Kamar tidur</li>
            <li>1 Kamar mandi</li>
            <li>Dapur terbuka</li>
          </ul>
        </div>

        <div className="flex items-center text-sm text-gray-600 space-x-2">
          <Calendar className="h-4 w-4" />
          <span>4 Januari 2025</span>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard