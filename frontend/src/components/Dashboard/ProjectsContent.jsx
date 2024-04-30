import { useEffect, useState } from "react";
import AdvancedTable from "./helpers/AdvancedTable";
import axios from "axios";
import { useSelector } from "react-redux";
import { Circles } from "react-loader-spinner";

const ProjectsContent = () => {
    const user = useSelector((state) => state?.user);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    const headings = ["Project Name", "Sub Category", "Price", "Description"];

    useEffect(() => {
        axios
            .post(
                "/api/getProjects",
                {},
                {
                    headers: {
                        Authorization: `Bearer ${user?.token}`,
                    },
                }
            )
            .then((res) => {
                console.log(res.data);
                setProjects(res?.data?.projects);
                setLoading(false);
            });
    }, []);

    return (
        <div className="flex flex-1 flex-col">
            <h1 className="text-3xl font-bold p-4">Your Projects</h1>
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
                        rows={projects}
                        headings={headings}
                        isProject={true}
                    />
                )}
            </div>
        </div>
    );
};

export default ProjectsContent;
