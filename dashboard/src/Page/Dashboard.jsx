/** @format */

import ItemBox from "../components/ItemBox";
import SocialBox from "../components/SocialBox";

function Dashboard() {
  return (
    <div className="w-full">
      <h1 className="text-2xl text-blue-950 py-4 px-4 shadow-lg">Dashboard</h1>

      <div className="py-3 px-2">
        <ItemBox />
        <SocialBox />
      </div>
    </div>
  );
}

export default Dashboard;
