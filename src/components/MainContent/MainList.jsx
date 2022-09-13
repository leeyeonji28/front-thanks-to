import React from "react";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";

const MainList = () => {
  // 데모 데이터
  const listData = [
    {
      diaryDate: "22.08.13",
      diaryInner: [
        {
          userId: "user1",
          diaryId: "4",
          diaryTitle: "오늘의 감사일기~",
          diaryContent:
            "오늘 더 열심히 공부하였고, 친구의 고민도 들어줬던 것에 대해 그리고 친구와의 관계가 조금 더 가까워 진 것에 감사합니다.",
        },
      ],
    },
    {
      diaryDate: "22.08.21",
      diaryInner: [
        {
          userId: "user1",
          diaryId: "3",
          diaryTitle: "오늘 감사한 일들",
          diaryContent:
            "어제도 그저께 보다 더 발전하였고 어제 부모님과 연락할 수 있었음에, 그리고 깊은 잠을 잘 수 있었음에 대해 감사합니다.",
        },
      ],
    },
    {
      diaryDate: "22.08.26",
      diaryInner: [
        {
          userId: "user1",
          diaryId: "2",
          diaryTitle: "기분 좋은 날!",
          diaryContent:
            "오늘도 기분좋은 하루를 맞이 하고 하루 일과를 무사히 마칠 수 있었음에 감사합니다.",
        },
        {
          userId: "user1",
          diaryId: "1",
          diaryTitle: "오늘의 감사일기~",
          diaryContent:
            "오늘 친구와 만나서 이야기를 나누고, 나의 고민도 털어놓고, 친구의 고민도 들어줬던 것에 대해 그리고 친구와의 관계가 조금 더 가까워 진 것에 감사합니다.",
        },
      ],
    },
  ];

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  if (error) {
    return <span>{error.message}</span>;
  }
  if (isLoading) {
    return (
      <span>
        <CgSpinner />
        Loading...
      </span>
    );
  }

  return (
    <div>
      <div>
        <h3 className="mb-10">
          <b className="text-xl text-rose-500">Thanks to</b>
          <br />
          그동안 감사했던 기록들을 함께 보아요 😊
        </h3>
        <div>
          <ul>
            {listData.map((list, i) => (
              <li key={i} className="group flex flex-wrap">
                <b className="w-[104px] h-11 mr-5 text-center font-semibold leading-10 rounded-lg group-even:bg-gray-200 group-odd:bg-rose-100">
                  {list.diaryDate}
                </b>

                <div>
                  <span className="block w-[650px] my-5 border-b border-dashed"></span>
                  {list.diaryInner.map((inner, j) => (
                    <div
                      key={j}
                      className="w-[650px] mb-5 p-5 rounded-lg bg-gray-50"
                    >
                      <h5 className="mb-2 text-lg font-semibold">
                        {inner.diaryTitle}
                      </h5>
                      <p>{inner.diaryContent}</p>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainList;
