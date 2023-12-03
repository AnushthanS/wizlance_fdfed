import UserImg from "../../../assets/images/userImage.avif";

const ProfileFull = () => {
  return (
    <div className="flex justify-center flex-col">
      <div className="flex justify-center py-2">
        <img
          src={UserImg}
          alt="user"
          className="h-20 w-20 border-4 border-blue-950 shadow-lg"
        />
      </div>
      <h1 className="mx-auto text-3xl font-bold">Nishant Shinde</h1>
      <p className="mx-auto py-2 text-xl">Freelancer</p>
    </div>
  );
};

export default ProfileFull;
