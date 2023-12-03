import ProfileFull from "./helpers/ProfileFull";
import Table from "./helpers/Table";
import BecomeSeller from "../../assets/images/becomeSeller.png";
import { useState } from "react";

const ProfileContent = () => {
  const [showImage, setShowImage] = useState(true);
  const [skills, setSkills] = useState("");

  const rows = [
    ["First Name", "Nishant"],
    ["Last Name", "Shinde"],
    ["Email", "nishantshinde316@gmail.com"],
    ["Role", "Freelancer"],
  ];
  const headings = ["", ""];

  return (
    <div className="h-full w-full flex gap-8 p-4">
      <div className="h-full w-1/2 rounded-lg py-14">
        <ProfileFull />
        <div className="pt-4 flex flex-col items-center">
          <h2 className="text-2xl pb-5">User Details</h2>
          <div className="flex justify-center">
            <Table rows={rows} headings={headings} colorHead={true} />
          </div>
        </div>
      </div>

      {showImage ? (
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
        <div className="flex flex-col align-middle justify-center m-auto   w-1/2 h-full rounded-lg  bg-white border-[#ccc] border-2">
          <h1 className=" font-semibold text-3xl text-center">
            Become a Freelancer
          </h1>
          <p className="text-center">
            Join the community of freelancers today!
          </p>

          <form
            className="flex p-10 flex-col"
            // onSubmit={handleLogin}
          >
            <label className="mb-[8px] text-[20px]">Skills</label>
            <textarea
              type="text"
              placeholder="Enter your skills which you would like to share"
              rows={5}
              cols={15}
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className=" p-[18px] mb-[16px] text-black border-b-2 border-2 focus:border-blue-200 focus:border-opacity-5 focus:shadow-lg border-gray-400"
            />
            <br />
            <button
              type="submit"
              className="p-[10px] bg-black text-[#fff] rounded-[20px] hover:bg-pink-500"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProfileContent;
