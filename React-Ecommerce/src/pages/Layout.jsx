import { Navbar } from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
