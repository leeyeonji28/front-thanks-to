import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./routes/Main";
import Header from "./components/Header/Header";
import SideNav from "./components/SideNav";
import Info from "./routes/Info";
import Login from "./routes/Login";

function App() {
  return (
    <div className="relative w-screen h-screen bg-gradient-to-r from-rose-200 to-rose-100">
      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/info" element={<Info />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
