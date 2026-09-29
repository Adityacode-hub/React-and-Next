
export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold cursor-pointer">
          MyApp 🚀
        </h1>

        {/* Menu */}
        <ul className="flex gap-8 font-medium">
          <li className="hover:text-gray-200 cursor-pointer">Home</li>
          <li className="hover:text-gray-200 cursor-pointer">About</li>
          <li className="hover:text-gray-200 cursor-pointer">Services</li>
          <li className="hover:text-gray-200 cursor-pointer">Contact</li>
        </ul>

        {/* Button */}
        <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
          Login
        </button>

      </div>
    </nav>
  );
}
