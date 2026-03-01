import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="bg-proxio-darker text-proxio-text-main min-h-screen">
      <Navbar />

      <Outlet />
    </div>
  );
}
