// Header.jsx
import {
  SignedIn,
  SignedOut,
  useClerk,
  UserButton,
  useUser,
} from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

function HeaderNav() {
  const { openSignIn } = useClerk();
  const { user, isLoaded } = useUser();

  return (
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
        <Link to="/" className="text-black hover:underline">Home</Link>
        <Link to="/isi-data" className="text-black hover:underline">Chat</Link>
        <Link to="#" className="text-black hover:underline">Jual</Link>

        {!isLoaded ? null : user ? (
          <div className="flex items-center gap-2">
            <UserButton afterSignOutUrl="/" />
          </div>
        ) : (
          <button
            className="bg-black text-white px-4 py-1 rounded hover:bg-gray-800"
            onClick={() => openSignIn()}
          >
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
}

export default HeaderNav;
