import React from "react";
import infoBg from "../assets/images/info_bg.jpg";
import Layout from "../components/Layout/Layout";

const Info = () => {
  return (
    <Layout>
      <div className="rounded-lg "></div>
      <div className="w-[1170px] h-[855px] bg-white rounded-lg">
        <div className="p-7 text-center">
          <div className="flex justify-conter items-center h-[230px] overflow-hidden rounded-lg">
            <img src={infoBg} alt="" className="opacity-80" />
          </div>
          <h2 className="my-10 font-bold text-5xl">Welcome</h2>
          <span className="inline-block w-10 h-[2px] mb-10 bg-gray-300"></span>
          <p>
            안녕하세요 Thanks to 입니다 😊
            <br />
            <br />
            매일 매일 감사일기를 적는다면 긍정적인 감정을 느끼는 두뇌를 활성화
            시켜 행복감을 증진시켜준다고 합니다.
            <br />
            <br />
            하루 하루 저희의 일상에 감사하고 모두 행복한 사회가 되길 바라는
            마음에서 시작한 Thank to는 감사일기를 서로 공유하며
            <br />
            서로의 일기에서 <b>당연하다고 생각했던 일상의 감사함</b>을 찾고 또
            그것을 공유하는데 도움이 되고자 합니다.
            <br />
            <br />
            모두가 행복하고 기분 좋은 나날을 보낼 수 있도록 저희 Thanks to에
            많은 관심과 사랑 부탁드립니다.
            <br />
            <br />
            감사합니다.
          </p>
        </div>
        <div className="flex justify-between items-center mt-8 p-7 pt-8 border-t-2">
          <h4 className="text-rose-500 font-bold text-2xl">Thanks to</h4>
          <ul className="flex">
            <div>
              <li className="mr-8">
                <b className="inline-block w-14">Add</b>
                대전광역시 유성구 봉명동 123번지 Thanks to
              </li>
              <li>
                <b className="inline-block w-14">Mail</b>
                thanks2@thanksto.com
              </li>
            </div>
            <div>
              <li>
                <b className="inline-block w-14">Tel</b>
                042 - 123 - 1234 / 042 - 456 - 4567
              </li>
              <li>
                <b className="inline-block w-14">Fax</b>
                070 - 1234 - 1234
              </li>
            </div>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Info;
