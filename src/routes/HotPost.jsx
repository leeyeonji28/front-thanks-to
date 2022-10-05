import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "../utile/url";
import { CgSpinner } from "react-icons/cg";
import Header from "../components/Header/Header";
import SideNav from "../components/SideNav";
import HotPostBox from "../components/PostContent/HotPostBox";
import { HiChevronDoubleDown } from "react-icons/hi";

const HotPost = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [userId, setUserId] = useState();
  const [getPostData, setGetPostData] = useState([]);

  const getPostList = async () => {
    try {
      const json = await axios({
        url: `${url}/api/post/list/all`,
        method: "GET",
      });

      setGetPostData(json.data);
      setIsLoading(false);
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    setUserId(localStorage.getItem("id"));
    getPostList();
  }, []);

  console.log(getPostData);

  if (error) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <p className="text-rose-500 text-2xl">{error.message}</p>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <p className="text-rose-500 text-2xl">
          <CgSpinner className="m-auto mb-2 animate-spin text-3xl" />
          Loading
        </p>
      </div>
    );
  }

  return (
    <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[1270px] h-[925px] m-auto">
      <Header />
      <div className="flex">
        <SideNav />
        <div className="w-[1170px] h-[855px] rounded-lg overflow-y-scroll scrollbar-hide">
          <div>
            {getPostData.map((data, index) => (
              <HotPostBox
                key={index}
                postImg={data.postImg}
                postTitle={data.postTitle}
                postContent={data.postContent}
                postDate={data.postDate}
                // userName={data.user.nickName}
              />
            ))}
          </div>
        </div>
        {getPostData.length > 3 ? (
          <div className="absolute top-[860px] left-[655px] animate-bounce">
            <HiChevronDoubleDown className="text-3xl text-gray-300" />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default HotPost;
