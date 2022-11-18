import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./routes/Main";
import Info from "./routes/Info";
import Login from "./routes/Login";
import Join from "./routes/Join";
import Post from "./routes/Post";
import HotPost from "./routes/HotPost";
import MyPage from "./routes/MyPage";
import PostSearch from "./routes/PostSearch";

function App() {
  return (
    <div className="lg:flex w-screen h-screen bg-gradient-to-r from-rose-200 to-rose-100 overflow-scroll scrollbar-hide">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/join" element={<Join />}></Route>
          <Route path="/" element={<Main />}></Route>
          <Route path="/info" element={<Info />}></Route>
          <Route path="/post" element={<Post />}></Route>
          <Route path="/hot_post" element={<HotPost />}></Route>
          <Route path="/mypage/:myId" element={<MyPage />}></Route>
          <Route path="/search/:keyword" element={<PostSearch />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
