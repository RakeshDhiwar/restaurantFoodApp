import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
// import App from "../App"

function Layout() {
  
  return (
    <div className="flex flex-col min-h-screen bg-main1  bg-cover">
      <div className="flex-grow">
        <Header />
        <Outlet />
      </div>
      <footer className=" text-white  text-center">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
