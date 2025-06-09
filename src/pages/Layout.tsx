import { Outlet } from "react-router-dom";
import Navbar from "../components/partials/navbar";
import Footer from "../components/partials/footer";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-grow p-2 mt-[80px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
