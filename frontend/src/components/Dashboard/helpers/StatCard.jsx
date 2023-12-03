import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StatCard = ({
  statname,
  statvalue,
  statdesc,
  featureColor,
  featureIcon,
}) => {
  return (
    <div className="box-border h-full w-[17rem] rounded-lg">
      <div className="bg-white h-4/5 rounded-md relative top-[20%] shadow-md">
        <div
          className={`${featureColor} bg-gradient-to-tr h-[5.5rem] w-[5.5rem] rounded-sm absolute left-3 -top-3 flex items-center justify-center shadow-lg`}
        >
          <FontAwesomeIcon icon={featureIcon} className="h-10 text-white" />
        </div>
        <div className="right-0 py-2">
          <p className="text-right px-3 my-1 font-light text-sm">{statname}</p>
          <p className="text-right px-3 my-1 text-3xl">{statvalue}</p>
        </div>
        <hr className="mt-4 w-10/12 mx-auto" />
        <p className="px-4 pt-3 text-gray-400 text-xs">{statdesc}</p>
      </div>
    </div>
  );
};

export default StatCard;
