import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex">
      <Navbar />
      <main className="flex-1 p-8">
        <Outlet /> {/* This will load Home, Problems, or Editor */}
      </main>
    </div>
  );
}

export default App;
