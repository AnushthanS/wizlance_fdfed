import axios from "axios";
import { useState, useEffect } from "react";
import { Circles } from "react-loader-spinner";

const AllGigs = () => {
    const [gigs, setGigs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGigs = async () => {
            try {
                const response = await axios.get("/api/all-gigs");
                setGigs(response.data.gigs);
            } catch (error) {
                console.error("Error fetching gigs:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchGigs();
    }, []);

    const handleDeleteGig = async (gigId) => {
        try {
            await axios.post("/api/admin-delete-gig", {
                gigId,
            });
            console.log(`Gig deleted successfully`);
            setGigs((prevGigs) => prevGigs.filter((gig) => gig._id !== gigId));
        } catch (error) {
            console.error("Error deleting gig:", error);
        }
    };

    const handleSearch = async (e) => {
        e.preventDefault();

        const searchQuery = e.target[0].value;
        try {
            const response = await axios.post("/api/admin-search-gig", {
                searchQuery,
            });
            setGigs(response.data.gigs);
        } catch (error) {
            console.error("Error searching gigs:", error);
        }
    };

    return (
        <>
            <div className="sticky top-0 bg-white z-10 pb-6">
                <form className="pl-6 flex gap-4" onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Search Gigs"
                        className="border-2 border-black p-2 rounded-md w-5/6"
                    />
                    <button
                        type="submit"
                        className="bg-black p-2 text-white w-32 rounded-md hover:bg-gray-700 duration-150"
                    >
                        Search
                    </button>
                </form>
            </div>
            <div className="w-auto h-auto no-scrollbar px-6 overflow-y-scroll">
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
                    <>
                        <h2 className=" text-2xl m-3">
                            Total gigs: {gigs.length}
                        </h2>
                        <table className="message-table w-[100%]">
                            <thead>
                                <tr>
                                    <th className=" border-black border-2 p-[20px] text-xl align-middle ">
                                        ID
                                    </th>
                                    <th className=" border-black border-2 p-[20px] text-xl align-middle ">
                                        Name
                                    </th>
                                    <th className=" border-black border-2 p-[20px] text-xl align-middle ">
                                        Price
                                    </th>
                                    <th className=" border-black border-2 p-[20px] text-xl align-middle ">
                                        Sub Category
                                    </th>
                                    <th className=" border-black border-2 p-[20px] text-xl align-middle ">
                                        Freelancer
                                    </th>
                                    <th className=" border-black border-2 p-[20px] text-xl align-middle ">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {gigs.map((gig, index) => (
                                    <tr key={gig._id}>
                                        <td className="border-black border-2 p-[20px] text-lg align-middle">
                                            {index + 1}
                                        </td>
                                        <td className="border-black border-2 p-[20px] text-lg align-middle">
                                            {gig?.name}
                                        </td>
                                        <td className="border-black border-2 p-[20px] text-lg align-middle">
                                            {gig?.price}
                                        </td>
                                        <td className="border-black border-2 p-[20px] text-lg align-middle">
                                            {gig?.subCategoryId?.name}
                                        </td>
                                        <td className="border-black border-2 p-[20px] text-lg align-middle">
                                            {gig?.freelancer?.firstName}
                                        </td>
                                        <td className="border-black border-2 p-[20px] text-lg align-middle">
                                            <button
                                                className=" border-red-600 border-2 bg-red-600 text-white p-2 rounded-md"
                                                onClick={() =>
                                                    handleDeleteGig(gig._id)
                                                }
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                )}
            </div>
        </>
    );
};

export default AllGigs;
