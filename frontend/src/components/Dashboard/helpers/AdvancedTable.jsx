const AdvancedTable = ({
  headings,
  rows,
  colorHead,
  isFreelancer,
  isProject,
}) => {
  return (
    <table className="w-full table-auto bg-white max-h-14 overflow-scroll">
      <thead>
        <tr>
          {headings?.length > 0 &&
            headings.map((heading, index) => (
              <th
                key={index}
                className={`py-3 px-5 border-b whitespace-normal text-left ${
                  colorHead && "bg-blue-950"
                }`}
              >
                {heading}
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {rows?.map((row) => (
          <tr key={row._id} className="max-h-14">
            <td className="py-3 px-5 border-b break-words font-bold">
              {isProject
                ? row?.name
                : isFreelancer
                ? row?.client?.firstName
                : row?.freelancer?.firstName}
            </td>
            <td className="py-3 px-5 border-b break-words">
              {isProject ? row?.subCategoryId?.name : row?.gig?.name}
            </td>
            <td className="py-3 px-5 border-b break-words">
              {isProject ? row?.price : row?.gig?.price}
            </td>
            <td className="py-3 px-5 border-b break-words">
              {isProject ? row?.description : row?.details}
            </td>
            {!isProject && (
              <td className="py-3 px-5 border-b break-words">{row?.status}</td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AdvancedTable;
