import UserImg from "../../../assets/images/userImage.avif";
import { useSelector } from "react-redux";

const ProfileFull = () => {
  const user = useSelector((state) => (
    state?.user?.user
  )
  )
  return (
    <div className="flex justify-center flex-col">
      <div className="flex justify-center py-2">
        <img
          src={UserImg}
          alt="user"
          className="h-20 w-20 border-4 border-blue-950 shadow-lg"
        />
      </div>
      <h1 className="mx-auto text-3xl font-bold">{user.firstName + " " + user.lastName}</h1>
      <p className="mx-auto py-2 text-xl">{user.isFreelancer ? 'Freelancer' : 'User'}</p>
    </div>
  );
};

export default ProfileFull;
