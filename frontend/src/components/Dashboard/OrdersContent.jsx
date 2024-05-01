import { useEffect, useState } from "react";
import AdvancedTable from "./helpers/AdvancedTable";
import axios from "axios";
import { useSelector } from "react-redux";
import { Circles } from "react-loader-spinner";

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
    const [loading, setLoading] = useState(true);

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
                setLoading(false);
            });
    }, []);

    return (
        <div className="flex flex-1 flex-col">
            <h1 className="text-3xl font-bold p-4">Orders Received</h1>
            <div className="flex justify-center p-6  overflow-y-scroll h-[35rem] ">
                {loading ? (
                    <Circles
                        height="60"
                        width="60"
                        color="black"
                        ariaLabel="circles-loading"
                        wrapperStyle={{}}
                        wrapperClass="w-full flex justify-center items-center h-[50vh]"
                        visible={true}
                    />
                ) : (
                    <AdvancedTable
                        rows={orders}
                        headings={headings}
                        isFreelancer={user?.user?.isFreelancer}
                    />
                )}
            </div>
        </div>
    );
};

export default OrdersContent;
