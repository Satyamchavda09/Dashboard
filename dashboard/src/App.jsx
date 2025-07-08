/** @format */

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sildebar from "./components/Sidebar";
import Dashboard from "./Page/Dashboard";
import { useState } from "react";

function App() {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className="p-0 relative flex">
      <div className="hidden lg:flex full w-[300px]">
        <Sildebar />
      </div>
      <div
        className={`flex lg:hidden fixed top-0 ${
          showSideBar ? "left-0" : "-left-100"
        } transition-all duration-300 w-xs`}>
        <Sildebar menu={() => setShowSideBar(false)} />
      </div>
      <div className="w-full ">
        <Navbar menu={() => setShowSideBar(true)} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
