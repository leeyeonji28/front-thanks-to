import React, { useEffect } from "react";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import axios from "axios";
import { url } from "../utile/url";
import PostBox from "../components/PostContent/PostBox";
import Masonry from "react-masonry-css";
import { HiChevronDoubleDown } from "react-icons/hi";
import Layout from "../components/Layout/Layout";
import { useMediaQuery } from "react-responsive";

const Post = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
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
    getPostList();
  }, []);

  // media-query
  const tablet = useMediaQuery({
    query: "(max-width:1023px)",
  });

  const mobile = useMediaQuery({
    query: "(max-width:639px)",
  });

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
        <div className="flex justify-center items-center w-[1170px] h-[855px] rounded-lg bg-white">
          아직 게시글이 없습니다.
        </div>
      ) : (
        <div className="w-full">
          {mobile ? (
            <div className="rounded-lg">
              <div>
                {getPostData.map((data, index) => (
                  <PostBox key={index} postId={data.id} />
                ))}
              </div>
            </div>
          ) : (
            <div>
              {tablet ? (
                <div className="w-full rounded-lg">
                  <div>
                    <Masonry breakpointCols={2} className="flex gap-5">
                      {getPostData.map((data, index) => (
                        <PostBox key={index} postId={data.id} />
                      ))}
                    </Masonry>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="2xl:w-[1180px] xl:w-[1080px] 2xl:h-[855px] h-[698px] rounded-lg overflow-y-scroll scrollbar-hide">
                    <div>
                      <Masonry breakpointCols={3} className="flex gap-5">
                        {getPostData.map((data, index) => (
                          <PostBox key={index} postId={data.id} />
                        ))}
                      </Masonry>
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
              )}
            </div>
          )}
        </div>
      )}
    </Layout>
  );
};

export default Post;
