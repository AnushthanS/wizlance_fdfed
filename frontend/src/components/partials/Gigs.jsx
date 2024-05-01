import axios from "axios";
import { ImCross } from "react-icons/im";

const Gigs = ({ onClose, gigs, setGigs }) => {
    const handleDeleteGig = (gigId) => {
        try {
            const updatedGigs = gigs.filter((gig) => gig._id !== gigId);
            setGigs(updatedGigs);
            axios.post("/api/admin-delete-gig", { gigId });
        } catch (error) {
            console.log("Error deleting gig", error);
        }
    };

    return (
        <div className="fixed w-screen h-screen top-0 left-0 flex bg-black bg-opacity-50 justify-center items-center z-[500]">
            <div className="w-full xs:w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] max-h-[80%] mt-20 mb-10 overflow-auto bg-white rounded-xl py-10 px-3 sm:px-6 z-50 flex flex-col gap-4 overflow-y-scroll">
                <div className="flex justify-between">
                    <h2 className="text-2xl m-3">Total gigs: {gigs.length}</h2>
                    <ImCross
                        onClick={onClose}
                        className="text-2xl cursor-pointer"
                    />
                </div>
                {gigs.length > 0 && (
                    <table className="gig-table w-[100%]">
                        <thead>
                            <tr>
                                <th className=" border-black border-2 p-[20px] text-xl align-middle ">
                                    ID
                                </th>
                                <th className=" border-black border-2 p-[20px] text-xl align-middle ">
                                    Gig name
                                </th>
                                <th className=" border-black border-2 p-[20px] text-xl align-middle ">
                                    Price
                                </th>
                                <th className=" border-black border-2 p-[20px] text-xl align-middle ">
                                    Description
                                </th>
                                {/* <th className=" border-black border-2 p-[20px] text-xl align-middle ">
                                    Sub Category
                                </th> */}
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
                                        {gig.name}
                                    </td>
                                    <td className="border-black border-2 p-[20px] text-lg align-middle">
                                        {gig.price}
                                    </td>
                                    <td className="border-black border-2 p-[20px] text-lg align-middle">
                                        {gig.description}
                                    </td>
                                    {/* <td className="border-black border-2 p-[20px] text-lg align-middle">
                                        {gig.subCategoryId}
                                    </td> */}
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
                )}
            </div>
        </div>
    );
};

export default Gigs;
