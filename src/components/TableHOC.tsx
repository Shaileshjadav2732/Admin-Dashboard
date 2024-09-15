import { useTable, Column, TableOptions } from "react-table";
function TableHOC<T extends Object>(
  columns: Column<T>[],
  data: T[],
  containerClassname: string,
  heading: string
) {
  return function HOC() {
    const options: TableOptions<T> = {
      columns,
      data,
    };
    // const table = useTable(options);
    const { getTableBodyProps, getTableProps, headerGroups, rows, prepareRow } = useTable(options);

    return (
      <div className={containerClassname}>
        <h2 className="heading">{heading}</h2>

        <table className="table" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
            return <tr {...row.getRowProps()}> 

              {row.cells.map((cell) => (
                  <td{...cell.getCellProps()}> {cell.render("Cell")}</td>
            ))}
                </tr>
            })}
          </tbody>
        </table>
      </div>
    );
  };
}

export default TableHOC;

/**
 * A Higher-Order-Component that takes columns, data, containerClassname and heading
 * and returns a new component that renders a table.
 * The useTable hook is called with the columns and data and the result is stored in the table variable.
 
 */






