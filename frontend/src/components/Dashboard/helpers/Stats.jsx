import { useEffect, useState } from "react";
import StatCard from "./StatCard";
import {
    faCoins,
    faBagShopping,
    faClipboardCheck,
    faStar,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useSelector } from "react-redux";
import { ThreeDots } from "react-loader-spinner";

const Stats = () => {
    const user = useSelector((state) => state?.user);

    const [stats, setStats] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .post(
                "/api/getFreelancerStats",
                {},
                {
                    headers: {
                        Authorization: `Bearer ${user?.token}`,
                    },
                }
            )
            .then((res) => {
                console.log(res.data);
                setStats(res.data);
                setLoading(false);
            });
    }, []);

    const loader = (
        <ThreeDots
            visible={true}
            height="36"
            width="36"
            color="#7D7D7D"
            radius="12"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass="flex justify-end"
        />
    );

    return (
        <div className=" flex h-64 flex-wrap gap-5 rounded-lg py-9 px-7">
            <StatCard
                statname="Ratings"
                statvalue={loading ? loader : "4.9"}
                featureColor="from-orange-500 to-yellow-400"
                featureIcon={faStar}
                statdesc="Average rating"
            />
            <StatCard
                statname="Earnings in &#8377;"
                statvalue={loading ? loader : stats?.earnings}
                featureColor="from-green-500 to-green-300"
                featureIcon={faCoins}
                statdesc="Total amount earned"
            />
            <StatCard
                statname="Orders"
                statvalue={loading ? loader : stats?.totalOrders}
                featureColor="from-red-500 to-orange-500"
                featureIcon={faBagShopping}
                statdesc="Total orders fulfilled"
            />
            <StatCard
                statname="Projects"
                statvalue={loading ? loader : stats?.totalProjects}
                featureColor="from-cyan-500 to-blue-500"
                featureIcon={faClipboardCheck}
                statdesc="Total projects"
            />
        </div>
    );
};

export default Stats;
