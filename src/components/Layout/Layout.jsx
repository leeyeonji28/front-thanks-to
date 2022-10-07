import React from "react";
import Header from "./Header";
import SideNav from "./SideNav";

const Layout = ({ children }) => {
  return (
    <>
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[1270px] h-[925px] m-auto">
        <Header />
        <div className="flex">
          <SideNav />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
