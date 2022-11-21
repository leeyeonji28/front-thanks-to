import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "../utile/url";
import { CgSpinner } from "react-icons/cg";
import { HiChevronDoubleDown } from "react-icons/hi";
import Layout from "../components/Layout/Layout";
import HotPostBox from "../components/HotPostContent/HotPostBox";

const HotPost = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [getPostData, setGetPostData] = useState([]);
  const [listLenght, setListLenght] = useState(0);

  const getPostList = async () => {
    try {
      const json = await axios({
        url: `${url}/api/post/list/all/like`,
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
      {getPostData.length === 0 ? (
        <div className="flex justify-center items-center 2xl:w-[1180px] xl:w-[1080px] 2xl:h-[855px] h-[698px] rounded-lg bg-white">
          아직 게시글이 없습니다.
        </div>
      ) : (
        <div className="w-full">
          <div className="2xl:w-[1180px] xl:w-[1080px] 2xl:h-[855px] h-[698px] rounded-lg overflow-y-scroll scrollbar-hide">
            <div>
              {getPostData
                .slice(listLenght - 30, listLenght)
                .map((data, index) => (
                  <HotPostBox key={index} postId={data.id} />
                ))}
            </div>
          </div>
          {getPostData.length > 3 ? (
            <div className="lg:block hidden absolute top-[90vh] left-[50vw] animate-bounce">
              <HiChevronDoubleDown className="text-3xl text-gray-300" />
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </Layout>
  );
};

export default HotPost;
