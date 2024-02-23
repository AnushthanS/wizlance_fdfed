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

const Stats = () => {
  const user = useSelector((state) => state?.user);

  const [stats, setStats] = useState({});

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
      });
  }, []);

  return (
    <div className=" flex h-64 flex-wrap gap-5 rounded-lg py-9 px-7">
      <StatCard
        statname="Ratings"
        statvalue="4.9"
        featureColor="from-orange-500 to-yellow-400"
        featureIcon={faStar}
        statdesc="Average rating"
      />
      <StatCard
        statname="Earnings in &#8377;"
        statvalue={stats?.earnings}
        featureColor="from-green-500 to-green-300"
        featureIcon={faCoins}
        statdesc="Total amount earned"
      />
      <StatCard
        statname="Orders"
        statvalue={stats?.totalOrders}
        featureColor="from-red-500 to-orange-500"
        featureIcon={faBagShopping}
        statdesc="Total orders fulfilled"
      />
      <StatCard
        statname="Projects"
        statvalue={stats?.totalProjects}
        featureColor="from-cyan-500 to-blue-500"
        featureIcon={faClipboardCheck}
        statdesc="Total projects"
      />
    </div>
  );
};

export default Stats;
