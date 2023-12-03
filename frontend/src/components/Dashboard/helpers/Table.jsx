const Table = ({ headings, rows, colorHead }) => {
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
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                className={`py-2 px-4 border-b break-words ${
                  cellIndex === 0 && "font-bold "
                }`}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
