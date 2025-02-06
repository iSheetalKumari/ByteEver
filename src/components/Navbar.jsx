import { Link } from "react-router-dom";

function Navbar() {
  return (
    <aside className="w-64 bg-gray-800 p-6 flex flex-col">
      <h1 className="text-3xl font-bold mb-6">ByteEver</h1>
      <nav>
        <ul className="space-y-2">
          <li><Link to="/" className="text-blue-400 hover:underline">Home</Link></li>
          <li><Link to="/problems" className="text-blue-400 hover:underline">Problems</Link></li>
          <li><Link to="/editor" className="text-blue-400 hover:underline">Editor</Link></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Navbar;
