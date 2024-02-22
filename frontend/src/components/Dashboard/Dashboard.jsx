import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const user = useSelector((state) => state?.user?.user);

 console.log(user);

  return (
    <div className=" flex ">
      <Sidebar user={user} />
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
