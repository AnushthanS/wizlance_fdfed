import { useEffect, useState } from "react";
import AdvancedTable from "./helpers/AdvancedTable";
import axios from "axios";
import { useSelector } from "react-redux";

const OrdersContent = () => {
  const user = useSelector((state) => state?.user);
  const headings = [
    user?.user?.isFreelancer ? "Client Name" : "Freelancer",
    "Service Name",
    "Price",
    "Description",
    "Status",
  ];

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
        console.log(res.data);
        setOrders(res.data.orders);
      });
  }, []);

  return (
    <div className="flex flex-1 flex-col">
      <h1 className="text-3xl font-bold p-4">Orders Received</h1>
      <div className="flex justify-center p-6  overflow-y-scroll h-[35rem] ">
        <AdvancedTable
          rows={orders}
          headings={headings}
          isFreelancer={user?.user?.isFreelancer}
        />
      </div>
    </div>
  );
};

export default OrdersContent;
