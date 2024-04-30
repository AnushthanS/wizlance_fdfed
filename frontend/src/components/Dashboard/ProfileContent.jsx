import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import axios from "axios";

import ProfileFull from "./helpers/ProfileFull";
import Table from "./helpers/Table";
import BecomeSeller from "../../assets/images/becomeSeller.png";
import FreelancerImg from "../../assets/images/freelancer.png";
import { becomeFreelancer } from "../../features/userSlice";
import { Circles } from "react-loader-spinner";

const animatedComponents = makeAnimated();

const ProfileContent = () => {
    const user = useSelector((state) => state?.user?.user);
    const dispatch = useDispatch();

    const [showImage, setShowImage] = useState(true);
    const [skills, setSkills] = useState("");
    const [selected, setSelected] = useState([]);
    const [loading, setLoading] = useState(false);

    const rows = [
        ["First Name", user.firstName],
        ["Last Name", user.lastName],
        ["Email", user.email],
        ["Role", user.isFreelancer ? "Freelancer" : "User"],
    ];
    const headings = ["", ""];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await dispatch(
                becomeFreelancer({ userId: user._id, skills: selected })
            );
            console.log(res);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        axios
            .get("/api/getSkills")
            .then((res) => {
                setSkills(
                    res.data.skills.map((skill) => ({
                        value: skill._id,
                        label: skill.name,
                    }))
                );
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="h-full w-full flex gap-8 pt-4 p-10">
            <div className="h-full w-1/2 rounded-lg py-14">
                <ProfileFull />
                <div className="pt-4 flex flex-col items-center">
                    <h2 className="text-2xl pb-5">User Details</h2>
                    <div className="flex justify-center">
                        <Table
                            rows={rows}
                            headings={headings}
                            colorHead={true}
                        />
                    </div>
                </div>
            </div>

            {user?.isFreelancer ? (
                <div className="h-full w-1/2 rounded-lg flex justify-center">
                    <div className="h-[400px] flex flex-col items-center justify-center relative mt-6">
                        <img src={FreelancerImg} alt="seller" />
                        <div className="absolute -bottom-16 text-[#7D7D7D] text-sm italic">
                            <p>
                                &ldquo;Pleasure in the job puts perfection in
                                the work&rdquo;
                            </p>
                            <p>~ Aristotle</p>
                        </div>
                    </div>
                </div>
            ) : showImage ? (
                <div className="h-full w-1/2 bg-blue-950 rounded-lg flex justify-center items-center">
                    <div className="aspect-square h-[300px] flex flex-col items-center justify-center gap-6">
                        <img src={BecomeSeller} alt="seller" />
                        <button
                            onClick={() => setShowImage(false)}
                            className="p-[10px] bg-black text-[#fff] rounded-[20px] hover:bg-white hover:text-black w-64"
                        >
                            Become a Freelancer
                        </button>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col align-middle pt-12 m-auto w-1/2 h-full rounded-lg  bg-white border-[#ccc] border-2">
                    {loading ? (
                        <Circles
                            height="60"
                            width="60"
                            color="black"
                            ariaLabel="circles-loading"
                            wrapperStyle={{}}
                            wrapperClass="w-full flex justify-center items-center h-full"
                            visible={true}
                        />
                    ) : (
                        <>
                            <h1 className=" font-semibold text-3xl text-center">
                                Become a Freelancer
                            </h1>
                            <p className="text-center">
                                Join the community of freelancers today!
                            </p>

                            <form
                                onSubmit={handleSubmit}
                                className="flex p-10 flex-col"
                            >
                                <label className="mb-[8px] text-[20px]">
                                    Skills
                                </label>
                                <div className="py-6">
                                    <Select
                                        placeholder="Select your skills"
                                        options={skills}
                                        isMulti
                                        value={selected}
                                        onChange={(selected) =>
                                            setSelected(selected)
                                        }
                                        components={animatedComponents}
                                        styles={{
                                            control: (baseStyles, state) => ({
                                                ...baseStyles,
                                                backgroundColor: "#f3f4f6",
                                                color: "white",
                                                borderColor: state.isFocused
                                                    ? "#646cff"
                                                    : "transparent",
                                                textAlign: "left",
                                                paddingLeft: "10px",
                                                ":hover": {
                                                    borderColor: "#646cff",
                                                },
                                            }),
                                            option: (styles) => {
                                                return {
                                                    ...styles,
                                                    backgroundColor: "white",
                                                    borderBottom:
                                                        "1px solid #646cff",
                                                    ":hover": {
                                                        backgroundColor:
                                                            "#f3f4f6",
                                                    },
                                                };
                                            },
                                            menu: (styles) => ({
                                                ...styles,
                                                backgroundColor: "#1a1a1a",
                                            }),
                                            multiValue: (styles) => {
                                                return {
                                                    ...styles,
                                                    backgroundColor: "white",
                                                    border: "1px solid black",
                                                };
                                            },
                                            multiValueLabel: (styles) => ({
                                                ...styles,
                                                color: "black",
                                            }),
                                        }}
                                    />
                                </div>
                                <br />
                                <button
                                    type="submit"
                                    className="p-[10px] bg-black text-[#fff] rounded-[20px] hover:bg-pink-500"
                                >
                                    Submit
                                </button>
                            </form>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProfileContent;
