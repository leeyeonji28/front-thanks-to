import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./routes/Main";
import Info from "./routes/Info";
import Login from "./routes/Login";
import Join from "./routes/Join";
import { useRecoilState } from "recoil";
import { loginState } from "./recoil/loginState";
import AuthRoute from "./components/AuthRoute";
import { useState } from "react";
import Post from "./routes/Post";
import HotPost from "./routes/HotPost";
// import { RecoilRoot, useRecoilState } from "recoil";
// import { userState } from "./recoil/user";

function App() {
  const [access, setAccess] = useRecoilState(loginState);
  setAccess(localStorage.getItem("Token"));
  // const [loginOn, setloginOn] = useRecoilState(loginState);
  // const [user, setUser] = useRecoilState(userState);

  return (
    <div className="relative w-screen h-screen bg-gradient-to-r from-rose-200 to-rose-100 overflow-hidden">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/join" element={<Join />}></Route>
          <Route path="/home" element={<Main />}></Route>
          <Route path="/info" element={<Info />}></Route>
          <Route path="/post" element={<Post />}></Route>
          <Route path="/hot_post" element={<HotPost />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
