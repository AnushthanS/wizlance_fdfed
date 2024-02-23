const Table = ({ headings, rows, colorHead, isIndexContent }) => {
  return (
    <table className="w-5/6 table-auto bg-white max-h-full overflow-scroll">
      <thead>
        <tr>
          {headings?.length > 0 &&
            headings.map((heading, index) => (
              <th
                key={index}
                className={`py-2 px-4 border-b whitespace-normal text-left ${
                  colorHead && "bg-blue-950"
                }`}
              >
                {heading}
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={row?._id ? row?._id : rowIndex}>
            {isIndexContent ? (
              <>
                <td className={"py-2 px-4 border-b break-words"}>
                  {row?.gig?.name}
                </td>
                <td className={"py-2 px-4 border-b break-words"}>
                  {row?.client?.firstName}
                </td>
                <td className={"py-2 px-4 border-b break-words"}>
                  {row?.status}
                </td>
              </>
            ) : (
              row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`py-2 px-4 border-b break-words ${
                    cellIndex === 0 && "font-bold "
                  }`}
                >
                  {cell}
                </td>
              ))
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
