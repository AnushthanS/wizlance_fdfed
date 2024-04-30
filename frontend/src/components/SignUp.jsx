import { useState } from "react";
import { Footer, Navbar } from "./partials";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import login2 from "../assets/images/login2.jpg";

const SignUp = () => {
    const navigate = useNavigate();
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);

        console.log("Fname:", fname);
        console.log("Lname:", lname);
        console.log("Email:", email);
        console.log("Password:", password);

        // Send data to backend
        axios
            .put("/api/signup", {
                firstName: fname,
                lastName: lname,
                email: email.toString(),
                password,
            })
            .then((res) => {
                console.log("Signup successful", res.data);
                // Optionally, redirect to another page or show a success message
                navigate("/login");
            })
            .catch((err) => {
                console.error("Signup failed:", err);
                // Handle error, show error message, etc.
                setShowPopup(true);
                setPopupMessage("Something went wrong. Please try again.");
            })
            .finally(() => {
                setLoading(false);
                setFname("");
                setLname("");
                setEmail("");
                setPassword("");
            });
    };

    return (
        <>
            <Navbar showlink={false} />
            <div
                className="div1 mt-10 m-auto max-w-6xl w-[70vw] flex flex-wrap justify-end border-[#ccc] border-2 rounded-[25px] shadow-[0_0px_20px_rgba(0,0,0,0.1)] text-black bg-cover"
                style={{ backgroundImage: `url(${login2})` }}
            >
                <div className="div1a rounded-[25px] p-14 px-32 bg-white border-[#ccc] border-2">
                    <h1 className=" font-semibold text-3xl">Create Account</h1>
                    <p>Join the community of freelancers today!</p>

                    <form
                        className="flex m-[8px] p-[40px] flex-col"
                        onSubmit={handleLogin}
                    >
                        <label className="mb-[8px] text-[20px]">
                            First name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter first name"
                            value={fname}
                            onChange={(e) => setFname(e.target.value)}
                            className=" p-[18px] mb-[16px] text-black border-b-2 border-gray-400"
                        />

                        <label className="mb-[8px] text-[20px]">
                            Last name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter last name"
                            value={lname}
                            onChange={(e) => setLname(e.target.value)}
                            className=" p-[18px] mb-[16px] text-black border-b-2 border-gray-400"
                        />

                        <label className="mb-[8px] text-[20px]">Email</label>
                        <input
                            type="text"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className=" p-[18px] mb-[16px] text-black border-b-2 border-gray-400"
                        />

                        <label className="mb-[8px] text-[20px]">Password</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className=" p-[18px] mb-[16px] text-black border-b-2 border-gray-400"
                        />

                        <button
                            type="submit"
                            className="p-[10px] bg-black text-[#fff] rounded-[20px] hover:bg-pink-500"
                        >
                            {loading ? "Signing up..." : "Sign Up"}
                        </button>
                    </form>

                    <p>
                        {" "}
                        Already have an account?
                        <button
                            type="submit"
                            className="signup p-[10px] bg-white border-black border rounded-[12px] m-3"
                        >
                            <Link to="/login">Login</Link>
                        </button>
                    </p>
                </div>
            </div>
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <p className="text-xl mb-4">{popupMessage}</p>
                        <button
                            onClick={() => setShowPopup(false)}
                            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-gray-800"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
            <Footer />
        </>
    );
};

export default SignUp;
