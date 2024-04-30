import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

const ProfileFull = () => {
    const user = useSelector((state) => state?.user?.user);
    return (
        <div className="flex justify-center flex-col">
            <div className="flex justify-center py-2">
                <FaUserCircle className="h-20 w-20 " />
            </div>
            <h1 className="mx-auto text-3xl font-bold">
                {user.firstName + " " + user.lastName}
            </h1>
            <p className="mx-auto py-2 text-xl">
                {user.isFreelancer ? "Freelancer" : "User"}
            </p>
        </div>
    );
};

export default ProfileFull;
