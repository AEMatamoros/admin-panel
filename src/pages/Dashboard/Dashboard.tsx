import { Sidebar, Navbar, Loader } from "../../components";
import { Outlet } from "react-router-dom";
import { Suspense, useState } from "react";
export default function Dashboard() {
  const [atr, setatr] = useState({ width: 20, show: true });

  let handleSidebar = () => {
    setatr((old) => ({ ...old, show: !old.show }));
  };

  return (
    <div className="flex">
      <Sidebar atr={atr} sidebarState={handleSidebar}></Sidebar>
      <div
        className="bg-indigo-100 transition-all duration-300"
        style={{
          width: !!atr.show ? `${100 - atr.width}vw` : `${95}vw`,
          minHeight: `100vh`,
        }}
      >
        <Navbar handleSidebar={handleSidebar} sidebarState={atr.show}></Navbar>
        <Suspense fallback={<Loader></Loader>}>
          <div className="p-4 ">
            <div className="bg-white flex justify-between flex-wrap w-full p-2 rounded-md shadow-lg">
              <Outlet />
            </div>
          </div>
        </Suspense>
      </div>
    </div>
  );
}
