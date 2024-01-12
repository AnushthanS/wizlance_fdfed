// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-regular-svg-icons";

const ProfileCard = ({user}) => {
  return (
    <div className="bg-blue-900 rounded-lg py-3 px-4 mx-4 flex items-center justify-between">
      {/* <FontAwesomeIcon icon={faUser} className="h-8" /> */}
      <div>
        <p className="font-bold">{user.firstName + " " + user.lastName}</p>
        <p className="font-light">{user.isFreelancer ? 'Freelancer': 'User'}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
