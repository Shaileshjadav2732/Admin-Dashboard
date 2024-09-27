import {
  useTable,
  Column,
  TableOptions,
  useSortBy,
  usePagination,
} from "react-table";
import { FaSortDown, FaSortUp } from "react-icons/fa";

function TableHOC<T extends Object>(
  columns: Column<T>[],
  data: T[],
  containerClassname: string,
  heading: string,
  showPagination: boolean = false
) {
  return function HOC() {
    const options: TableOptions<T> = {
      columns,
      data,
      initialState: {
        pageSize: 5,
        pageIndex:0
      },
    };
    const {
      getTableBodyProps, // table body props from react-table
      getTableProps, // table props from react-table
      headerGroups, // columns
      page, //rows of data
      prepareRow, //prepare the row
      nextPage, //move to next page
      canNextPage, // check if there is another page
      previousPage, //move to previous page
      canPreviousPage, // check if there is a previous page
      pageCount, // total number of pages
      state: { pageIndex },  // this will be used to set the active page if use without the state it not count the page number
    } = useTable(options, useSortBy, usePagination);

    return (
      <div className={containerClassname}>
        <h2 className="heading">{heading}</h2>

        <table className="table" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <FaSortDown />
                      ) : (
                        <FaSortUp />
                      )
                    ) : null}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        {showPagination && (
          <div className="tab-pagination">
            <button disabled={!canPreviousPage} onClick={previousPage}>
              {/* if note a previous page is available, disable the button */}
              Prev
            </button>
            <span>{` ${pageIndex +1}  out of ${pageCount} `}</span>
            {/* Fallback applied */}
            <button disabled={!canNextPage} onClick={nextPage}>
              {/* if note a next page is available, disable the button */}
              Next
            </button>
          </div>
        )}
      </div>
    );
  };
}

export default TableHOC;
