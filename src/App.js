import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./routes/Main";
import Header from "./components/Header/Header";
import SideNav from "./components/SideNav";
import Info from "./routes/Info";
import Login from "./routes/Login";
import Join from "./routes/Join";
// import { RecoilRoot, useRecoilState } from "recoil";
// import { userState } from "./recoil/user";

function App() {
  // const [user, setUser] = useRecoilState(userState);
  return (
    <div className="relative w-screen h-screen bg-gradient-to-r from-rose-200 to-rose-100">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/join" element={<Join />}></Route>
          {/* {user !== null ? (
            <Route path="/home" element={<Main />}></Route>
          ) : (
            alert("로그인 후 이용해 주세요.")
          )} */}
          <Route path="/home" element={<Main />}></Route>
          <Route path="/info" element={<Info />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
