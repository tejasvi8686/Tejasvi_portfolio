import Aos from "aos";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";
import "./Styles.css";

const Main = () => {
  useEffect(() => {
    Aos.init({ offset: 200 });
  }, []);

  return (
    <div className=" min-h-[calc(100vh-2px)] content-container z-auto">
      <div className="-z-30  animate-content animate-rotate"></div>
      <Navbar />
      <div className="h-[calc(100vh-4rem)] pb-12">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
