import { useSelector } from "react-redux";

const ProfileCard = () => {
  const user = useSelector((state) => state?.user?.user);

  return (
    <div className="bg-blue-950 rounded-lg py-3 px-4 mx-4 flex items-center justify-between">
      <div>
        <p className="font-bold">{user.firstName + " " + user.lastName}</p>
        <p className="font-light">
          {user.isFreelancer ? "Freelancer" : "User"}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
