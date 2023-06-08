import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-76px)]">
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
};

export default Main;
