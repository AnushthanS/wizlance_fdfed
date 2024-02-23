import Stats from "./helpers/Stats";
import { faListCheck, faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "./helpers/Table";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const IndexContent = () => {
  const user = useSelector((state) => state?.user);

  const headings = ["Title", "Client", "Status"];

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .post(
        "/api/getOrders",
        {},
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      )
      .then((res) => {
        setOrders(res.data.orders);
      });
  }, []);

  return (
    <>
      <Stats />

      <div className="flex w-full flex-1 p-6 gap-6">
        <div className="h-fit w-full rounded-lg relative shadow-lg bg-white">
          <div
            className={`from-pink-800 to-pink-500 bg-gradient-to-tr h-[5.5rem] w-[5.5rem] rounded-sm absolute left-4 -top-3 flex items-center justify-center shadow-lg`}
          >
            <FontAwesomeIcon icon={faListCheck} className="h-10 text-white" />
          </div>
          <div className="h-full w-full flex flex-col">
            <Link to="/dashboard/projects">
              <p className="text-3xl font-bold pl-32 py-9">Active projects</p>
            </Link>
            <div className="flex justify-center py-3 h-[280px] overflow-auto">
              <Table headings={headings} rows={orders} isIndexContent={true} />
            </div>
          </div>
        </div>
        <div className="bg-white h-full w-[48rem] rounded-lg shadow-lg relative">
          <div
            className={` from-pink-400 to-orange-300 bg-gradient-to-tr h-[5.5rem] w-[5.5rem] rounded-sm absolute left-4 -top-3 flex items-center justify-center shadow-lg`}
          >
            <FontAwesomeIcon icon={faAdd} className="h-10 text-white" />
          </div>
          <div className="h-full w-full flex flex-col">
            <p className="text-3xl font-bold pl-32 py-9">Add a service</p>
            <Link to="/addgig">
              <div className="flex flex-col items-center gap-2 justify-center h-52 overflow-auto">
                <FontAwesomeIcon
                  icon={faAdd}
                  className="h-24 hover:h-28 hover:text-gray-500 ease-in-outx duration-300"
                />
                <p className="text-gray-300 text-md">Add a gig</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexContent;
