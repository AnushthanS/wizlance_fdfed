import axios from "axios";
import { useState, useEffect } from "react";
import { Circles } from "react-loader-spinner";

import Gigs from "./Gigs";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deleteUserEmail, setDeleteUserEmail] = useState(null);
    const [showGigs, setShowGigs] = useState(false);
    const [gigs, setGigs] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get("/api/admin-users");
            setUsers(response.data.users);
        } catch (error) {
            console.error("Error fetching users:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteUser = async () => {
        try {
            await axios.post("/api/admin-delete", {
                deleteFromEmail: deleteUserEmail,
            });
            console.log(`User ${deleteUserEmail} deleted successfully`);
            setUsers((prevUsers) =>
                prevUsers.filter((user) => user.email !== deleteUserEmail)
            );
            setDeleteUserEmail(null);
        } catch (error) {
            console.error("Error deleting user:", error);
        } finally {
            setDeleteUserEmail(null); // Close the modal
        }
    };

    const handleShowGigs = async (userId) => {
        try {
            const res = await axios.post("/api/admin-gigs", {
                type: "user",
                id: userId,
            });
            console.log(res.data.gigs);
            setGigs(res.data.gigs);
            setShowGigs(true);
        } catch (error) {
            console.error("Error fetching gigs:", error);
        }
    };

    return (
        <div className="w-auto h-auto px-4 overflow-y-scroll no-scrollbar">
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
                        Total Users: {users.length}
                    </h2>
                    <table className="user-table w-[100%]">
                        <thead>
                            <tr>
                                <th className=" border-black border-2 p-[20px] text-xl align-middle ">
                                    ID
                                </th>
                                <th className=" border-black border-2 p-[20px] text-xl align-middle ">
                                    Name
                                </th>
                                <th className=" border-black border-2 p-[20px] text-xl align-middle ">
                                    Email
                                </th>
                                <th className=" border-black border-2 p-[20px] text-xl align-middle ">
                                    Gigs
                                </th>
                                <th className=" border-black border-2 p-[20px] text-xl align-middle ">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user.id}>
                                    <td className="border-black border-2 p-[20px] text-lg align-middle">
                                        {index + 1}
                                    </td>
                                    <td className="border-black border-2 p-[20px] text-lg align-middle">{`${user.firstName} ${user.lastName}`}</td>
                                    <td className="border-black border-2 p-[20px] text-lg align-middle">
                                        {user.email}
                                    </td>
                                    <td className="border-black border-2 p-[20px] text-lg align-middle">
                                        <button
                                            className="border-green-600 border-2 bg-green-600 text-white p-2 rounded-md"
                                            onClick={() =>
                                                handleShowGigs(user._id)
                                            }
                                        >
                                            Gigs
                                        </button>
                                    </td>
                                    <td className="border-black border-2 p-[20px] text-lg align-middle">
                                        <button
                                            className="border-red-600 border-2 bg-red-600 text-white p-2 rounded-md"
                                            onClick={() =>
                                                setDeleteUserEmail(user.email)
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

            {deleteUserEmail && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div
                            className="fixed inset-0 transition-opacity"
                            aria-hidden="true"
                        >
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span
                            className="hidden sm:inline-block sm:align-middle sm:h-screen"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <svg
                                            className="h-6 w-6 text-red-600"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                                            Delete User
                                        </h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                Are you sure you want to delete
                                                the user with email:{" "}
                                                {deleteUserEmail}?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={handleDeleteUser}
                                >
                                    Delete
                                </button>
                                <button
                                    type="button"
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => setDeleteUserEmail(null)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {showGigs && (
                <Gigs
                    onClose={() => setShowGigs(false)}
                    gigs={gigs}
                    setGigs={setGigs}
                />
            )}
        </div>
    );
};

export default Users;
