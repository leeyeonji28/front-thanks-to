import React from "react";

const Main = () => {
  return (
    <div className="grid grid-cols-[830px_320px] gap-5 w-[1170px] h-[855px] ">
      <div className="grid grid-rows-[310px_525px] gap-5">
        <div className="bg-white rounded-lg">section1</div>
        <div className="bg-white rounded-lg">section2</div>
      </div>
      <div className="grid grid-rows-[240px_350px_225px] gap-5">
        <div className="bg-white rounded-lg">section3</div>
        <div className="bg-white rounded-lg">section4</div>
        <div className="bg-white rounded-lg">section5</div>
      </div>
    </div>
  );
};

export default Main;
