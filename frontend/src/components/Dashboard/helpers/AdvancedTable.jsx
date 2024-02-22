const AdvancedTable = ({ headings, rows, colorHead, isFreelancer }) => {
  return (
    <table className="w-full table-auto bg-white max-h-full overflow-scroll">
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
          <tr key={row._id}>
            <td className="py-3 px-5 border-b break-words font-bold">
              {isFreelancer
                ? row?.client?.firstName
                : row?.freelancer?.firstName}
            </td>
            <td className="py-3 px-5 border-b break-words">{row?.gig?.name}</td>
            <td className="py-3 px-5 border-b break-words">
              {row?.gig?.price}
            </td>
            <td className="py-3 px-5 border-b break-words">{row?.details}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AdvancedTable;
