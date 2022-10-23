import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "../utile/url";
import { CgSpinner } from "react-icons/cg";
import HotPostBox from "../components/PostContent/HotPostBox";
import { HiChevronDoubleDown } from "react-icons/hi";
import Layout from "../components/Layout/Layout";

const HotPost = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [getPostData, setGetPostData] = useState([]);
  const [listLenght, setListLenght] = useState();

  const getPostList = async () => {
    try {
      const json = await axios({
        url: `${url}/api/post/list/all`,
        method: "GET",
      });

      setGetPostData(json.data);
      setIsLoading(false);
      setListLenght(json.data.length);
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
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
    <Layout>
      <div className="w-[1170px] h-[855px] rounded-lg overflow-y-scroll scrollbar-hide">
        <div>
          {getPostData
            .slice(listLenght - 30, listLenght)
            .reverse()
            .map((data, index) => (
              <HotPostBox key={index} postId={data.id} />
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
    </Layout>
  );
};

export default HotPost;
