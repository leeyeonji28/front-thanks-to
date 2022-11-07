import axios from "axios";
import React, { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { IoHeartSharp } from "react-icons/io5";
import SearchDetail from "./SearchDetail";
import { url } from "../../utile/url";

const SearchPostBox = ({ postId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchData, setSearchData] = useState("");
  const [postUserId, setPostUserId] = useState();
  const [userNick, setUserNick] = useState();
  const [userImg, setUserImg] = useState();
  const [modal, setModal] = useState(false);

  const getSearchPostList = async () => {
    try {
      const json = await axios({
        url: `${url}/api/post/detail/${postId}`,
        method: "GET",
      });
      setSearchData(json.data);
      setIsLoading(false);
      setUserNick(json.data.user.nickName);
      setUserImg(json.data.user.profileImg);
      setPostUserId(json.data.user.id);
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    getSearchPostList();
  }, []);

  function showModal() {
    setModal(!modal);
  }

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
    <div>
      <div
        className="flex w-full h-[270px] rounded-lg bg-white mb-5 cursor-pointer"
        onClick={() => {
          showModal();
        }}
      >
        {searchData.postImg !== "" ? (
          <div className="flex justify-center items-center w-[800px] overflow-hidden">
            <img src={searchData.postImg} alt="" />
          </div>
        ) : (
          ""
        )}
        <div className="w-full">
          <div className="p-3">
            <b className="block mb-3 text-xl">{searchData.postTitle}</b>
            <p className="h-28">
              {searchData.postContent.length > 300
                ? `${searchData.postContent.slice(0, 300)}...`
                : searchData.postContent}
            </p>
            <p className="mt-3 text-gray-400">{searchData.postDate}</p>
          </div>
          <div className="p-3 border-t">
            <div className="flex justify-between items-center">
              <b>{userNick}</b>
              <div className="text-gray-500">
                <IoHeartSharp className="inline-block mr-2 text-xl" />
                <span>{searchData.postLike}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {modal === true ? (
        <SearchDetail
          postId={postId}
          postTitle={searchData.postTitle}
          postContent={searchData.postContent}
          postDate={searchData.postDate}
          postImg={searchData.postImg}
          postLike={searchData.postLike}
          showModal={showModal}
          postUserId={postUserId}
          userNick={userNick}
          userImg={userImg}
          getSearchPostList={getSearchPostList}
        />
      ) : null}
    </div>
  );
};

export default SearchPostBox;
