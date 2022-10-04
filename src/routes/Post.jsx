import React, { useEffect } from "react";
import { useState } from "react";
import Header from "../components/Header/Header";
import SideNav from "../components/SideNav";
import { CgSpinner } from "react-icons/cg";
import axios from "axios";
import { url } from "../utile/url";
import PostBox from "../components/PostContent/PostBox";

const Post = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [userId, setUserId] = useState();
  const [getPostData, setGetPostData] = useState([]);

  const getPostList = async () => {
    try {
      const json = await axios({
        url: `${url}/api/post/list/all`,
        method: "GET",
        // headers: {
        //   Authorization: "Bearer " + localStorage.getItem("Token"),
        //   cont
        // },
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
      <div className="flex ">
        <SideNav />
        <div className="w-[1170px] h-[855px] rounded-lg text-center overflow-scroll">
          <div className="grid grid-cols-3">
            {getPostData.map((data, index) => (
              <PostBox
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
      </div>
    </div>
  );
};

export default Post;
