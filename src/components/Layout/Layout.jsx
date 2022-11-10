import React from "react";
import Header from "./Header";
import SideNav from "./SideNav";
import { useMediaQuery } from "react-responsive";

const Layout = ({ children }) => {
  // media-query
  const mobile = useMediaQuery({
    query: "(max-width:639px)",
  });

  return (
    <>
      {mobile ? (
        <div>
          <Header />
          <div className="w-[90%] m-auto pt-28 pb-8">
            {/* <SideNav /> */}
            {children}
          </div>
        </div>
      ) : (
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[1270px] h-[925px] m-auto">
          <Header />
          <div className="flex">
            <SideNav />
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
