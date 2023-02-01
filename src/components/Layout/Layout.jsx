import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "../ResponsiveAppBar/ResponsiveAppBar";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <ResponsiveAppBar />
      <div className="box mt-5 mx-3">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
