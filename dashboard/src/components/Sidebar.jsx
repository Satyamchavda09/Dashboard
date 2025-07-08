/** @format */

function Sildebar({ menu }) {
  return (
    <div className="bg-gray-900 h-screen w-full text-white ">
      <div className="bg-blue-950 flex py-2 px-6 justify-start items-center">
        <img
          className="rounded-full w-14"
          src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29uJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
        <div className="px-3 text-nowrap">
          <h1 className="text-xl font-semibold">John David </h1>
          <h2 className="text-sm font-medium">Online</h2>
        </div>
      </div>

      <div className="">
        <h2 className="py-5 px-5 border-b-[2px] border-gray-500 text-2xl flex justify-between">
          General{" "}
          <i
            onClick={() => menu()}
            className="ri-close-large-line flex lg:hidden"></i>
        </h2>
        <div>
          {[
            {
              icon: "ri-dashboard-fill text-amber-500",
              name: "Dashboard",
              nv: "/",
            },
            { icon: "ri-time-line text-amber-600", name: "Widgets" },
            { icon: "ri-vip-diamond-line text-indigo-700", name: "Elements" },
            { icon: "ri-table-line text-purple-800", name: "Tables" },
            { icon: "ri-apps-fill text-blue-500", name: "Apps" },
            {
              icon: "ri-briefcase-4-fill text-blue-600",
              name: "Pricing Tables",
            },
            { icon: "ri-telegram-2-fill text-pink-600", name: "Contact" },
            {
              icon: "ri-file-copy-line text-amber-400",
              name: "Additional Pages",
            },
            { icon: "ri-map-2-line text-purple-500", name: "Map" },
            { icon: "ri-bar-chart-fill text-green-400", name: "Chats" },
            { icon: "ri-settings-5-line text-amber-500", name: "Settings" },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 px-2 py-2 items-center">
              <i className={`${item.icon} text-lg `}></i>
              <h1 className="text-sm text-gray-300">{item.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sildebar;
