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
          <div className="bg-gray-50 ">
            {/* <SideNav /> */}
            <Routes>
              <Route path="/" element={<Main />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
