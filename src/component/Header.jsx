import { Link } from 'react-router';
import { Search } from 'lucide-react';

function Header(){
    return (
        <>
        <nav className="flex items-center justify-between px-6 py-3 space-x-12 bg-white shadow">
            <div className="flex-1 text-xl font-bold text-black">
              Tera<span className="font-bold">Pro</span>
            </div>

            <div className="flex items-center border rounded-md px-2 py-1 w-64 bg-gray-50">
            <Search className="h-4 w-4 text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Cari rumah"
                className="w-full bg-transparent outline-none text-sm text-gray-700"
              />
            </div>

            <div className="flex items-center space-x-4 text-sm">
              <a href="#" className="text-black hover:underline">Home</a>
              <a href="#" className="text-black hover:underline">Chat</a>
              <a href="#" className="text-black hover:underline">Jual</a>
              <button className="bg-black text-white px-4 py-1 rounded hover:bg-gray-800">
                Sign In
              </button>
            </div>
        </nav>
        </>
    )
}

export default Header