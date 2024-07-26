import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const LayoutContainer = () => {
  return (
    <div className="bg-errie-black min-h-screen">
      <Header />
      <main className="content-wrapper relative z-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutContainer;
