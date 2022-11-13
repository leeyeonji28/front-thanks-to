import React from "react";
import Header from "./Header";
import SideNav from "./SideNav";
import { useMediaQuery } from "react-responsive";

const Layout = ({ children }) => {
  // media-query
  const tablet = useMediaQuery({
    query: "(max-width:1023px)",
  });

  const mobile = useMediaQuery({
    query: "(max-width:639px)",
  });

  return (
    <>
      {mobile || tablet ? (
        <div>
          <Header />
          <div className="w-[90%] m-auto pt-28 pb-8">
            {/* <SideNav /> */}
            {children}
          </div>
        </div>
      ) : (
        <div className="2xl:w-[1280px] xl:w-[1180px] w-[90%] 2xl:h-[925px] h-[768px] h-auto m-auto">
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
