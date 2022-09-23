import React, { useState } from "react";
import { HiOutlineCamera } from "react-icons/hi";
import { HiLockOpen, HiLockClosed } from "react-icons/hi";

const CreateModal = ({ userImg, userName }) => {
  const [imageSrc, setImageSrc] = useState();
  const [postLock, setPostLock] = useState(false);
  const [files, setFiles] = useState([]);

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  const previewPostImg = (e) => {
    encodeFileToBase64(e.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setFiles([...files, { uploadedFile: file }]);
  };

  const lockCheck = (e) => {
    setPostLock(e.target.checked);
  };

  return (
    <div className="modal w-[200%] h-[200%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      {/* 모달 이너 */}
      <div className="modal-box relative max-w-xl overflow-hidden">
        <label
          htmlFor="my-modal-3"
          className="btn btn-sm btn-ghost absolute left-2 top-2 text-2xl"
        >
          ✕
        </label>
        {/* 프로필 */}
        <div className="my-8 text-left">
          <img
            src={userImg}
            alt={userName}
            className="inline-block w-14 mr-5 shadow-lg"
          />
          <b className="text-lg">{userName}</b>
        </div>
        <form action="">
          {/* 이미지 폼 */}
          <div className="relative">
            <div className="flex justify-center items-center w-full h-60 mb-4 border border-gray-300 rounded-lg cursor-pointer z-10">
              <div>
                <p className="text-gray-400">Image</p>
              </div>
            </div>
            <label
              htmlFor="selector_img"
              className="absolute bottom-3 right-3 btn btn-circle bg-gray-400 border-gray-400 z-20"
            >
              <div>
                <HiOutlineCamera className="m-auto text-2xl text-white " />
              </div>
            </label>
            <input
              type="file"
              accept="image/*"
              id="selector_img"
              encType="multipart/form-data"
              multiple="multiple"
              onChange={(e) => {
                previewPostImg(e);
                handleUpload(e);
              }}
              className="hidden"
              // className="block w-full p-4 mb-4 rounded-lg border border-gray-300 outline-rose-500"
            />
            <div
              className={
                imageSrc
                  ? "absolute top-0 w-full h-60 rounded-lg bg-white overflow-hidden"
                  : "hidden"
              }
            >
              <img
                src={imageSrc}
                alt="preview-img"
                className="absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 w-full z-10"
              />
            </div>
          </div>
          {/* 제목 입력 폼 */}
          <input
            type="text"
            placeholder="오늘의 제목!"
            className="block w-full p-4 mb-4 rounded-lg border border-gray-300 outline-rose-500"
          />
          {/* 내용 입력 폼 */}
          <textarea
            placeholder={userName + "님의 오늘은 어떤 감사한 일이 있었나요?"}
            className="block w-full p-4 mb-4 rounded-lg border border-gray-300 outline-rose-500"
          />
          {/* 공개여부 체크 */}
          <label htmlFor="lock">
            {postLock ? (
              <div className="text-right">
                <HiLockClosed className="inline-block text-2xl" />
                <p className="inline-block">나만 보기</p>
              </div>
            ) : (
              <div className="text-right">
                <HiLockOpen className="inline-block text-2xl" />
                <p className="inline-block">전체 공개</p>
              </div>
            )}
          </label>
          <input
            type="checkbox"
            // defaultChecked
            id="lock"
            onChange={lockCheck}
            className="hidden"
          />
          {/* 전송 버튼 */}
          <button className="w-full p-4 mt-10 bg-rose-500 text-white rounded-lg ">
            Submit
          </button>
        </form>
      </div>
      {/* 모달 이너 */}
    </div>
  );
};

export default CreateModal;
