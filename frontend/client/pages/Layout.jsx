import { Outlet, Link } from "react-router-dom";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />

      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
