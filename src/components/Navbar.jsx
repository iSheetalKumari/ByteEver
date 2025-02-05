import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">ByteEver</h1>
      <ul className="flex gap-4">
        <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
        <li><Link to="/problems" className="hover:text-gray-400">Problems</Link></li>
        <li><Link to="/editor" className="hover:text-gray-400">Editor</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
