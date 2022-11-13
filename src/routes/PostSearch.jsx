import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { url } from "../utile/url";
import { CgSpinner } from "react-icons/cg";
import { HiChevronDoubleDown } from "react-icons/hi";
import axios from "axios";
import Layout from "../components/Layout/Layout";
import SearchPostBox from "../components/postSearch/SearchPostBox";

const PostSearch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchList, setSearchList] = useState([]);
  const { keyword } = useParams();

  const getSearchList = async () => {
    try {
      const json = await axios({
        url: `${url}/api/post/search?keyword=${keyword}`,
        method: "GET",
      });

      setSearchList(json.data);
      setIsLoading(false);
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    getSearchList();
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
      {searchList.length === 0 ? (
        <div className="flex justify-center items-center 2xl:w-[1180px] xl:w-[1080px] w-full 2xl:h-[855px] h-[698px] rounded-lg bg-white">
          검색어에 해당되는 게시글이 없습니다.
        </div>
      ) : (
        <div className="w-full">
          <div className="2xl:w-[1180px] xl:w-[1080px] w-full 2xl:h-[855px] h-[698px] rounded-lg overflow-y-scroll scrollbar-hide">
            <div>
              {searchList.reverse().map((data, index) => (
                <SearchPostBox key={index} postId={data.id} />
              ))}
            </div>
          </div>
          {searchList.length > 3 ? (
            <div className="absolute top-[860px] left-[655px] animate-bounce">
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

export default PostSearch;
