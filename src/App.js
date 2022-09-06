import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./routes/Main";
import Header from "./components/Header/Header";
import SideNav from "./components/SideNav";

function App() {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-rose-200 to-rose-100">
      <Router>
        <div className="w-10/12 h-4/5 m-auto">
          <Header />
          <div className="flex w-full h-full ">
            <SideNav />
            <div className="bg-gray-200">
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
