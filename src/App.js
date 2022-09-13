import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./routes/Main";
import Header from "./components/Header/Header";
import SideNav from "./components/SideNav";

function App() {
  return (
    <div className="relative w-screen h-screen bg-gradient-to-r from-rose-200 to-rose-100">
      <Router>
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[1270px] h-[925px] m-auto">
          <Header />
          <div className="flex ">
            <SideNav />
            <div className="rounded-lg ">
              <Routes>
                <Route path="/" element={<Main />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
