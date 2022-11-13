import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { searchState } from "../../recoil/searchState";

const HeaderSerach = () => {
  const navigate = useNavigate();
  const [searchWord, setSearchWord] = useRecoilState(searchState);

  return (
    <div>
      <div className="form-control">
        <form
          className="input-group"
          onSubmit={(e) => {
            // e.preventDefault();
            navigate(`/search/${searchWord}`);
          }}
        >
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered border-0 sm:w-40 w-32"
            value={searchWord}
            onChange={(e) => {
              setSearchWord(e.target.value);
            }}
          />
          <button className="btn btn-square sm:bg-rose-500 bg-rose-300 hover:bg-rose-300 border-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default HeaderSerach;
