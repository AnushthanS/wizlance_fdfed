import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { useSelector } from "react-redux";

const Dashboard = () => {
  

  return (
    <div className=" flex ">
      <Sidebar  />
      <div className="flex-1 flex flex-col bg-gray-100">
        <TopBar />
        <div className="flex flex-1 flex-col mx-4 mb-4 box-border rounded-lg flex-wrap">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
