import AppPagination from './AppPagination'

export default function PaginationConf({
  state,
  searchState,
  tableId,
  pageNumber,
  goFirst,
  goBack,
  goToSpecific,
  goNext,
  goLast,
  handleLimit,
  fetching,
}: {
  state: any
  searchState: any
  tableId: number
  pageNumber: number
  fetching: boolean
  goFirst: () => void
  goBack: () => void
  goToSpecific: (currentPageNumber: number) => void
  goNext: () => void
  goLast: () => void
  handleLimit: (e: any) => void
}) {
  return (
    <div className="flex justify-center float-right my-2">
      <nav aria-label="Page navigation example" className="bg-white">
        <ul className="flex list-style-none">
          <li>
            <button
              className="page-item cursor-pointer"
              hidden={pageNumber === 1}
              onClick={goFirst}
              disabled={fetching}
              title="Ir al inicio"
            >
              <a className="page-link relative border block py-1.5 px-3 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-white hover:bg-app-black focus:shadow-none">
                <i className="fa-solid fa-backward-fast"></i>
              </a>
            </button>
          </li>
          <li>
            <button
              className="page-item cursor-pointer"
              hidden={pageNumber === 1}
              onClick={goBack}
              disabled={fetching}
              title="Anterior"
            >
              <a className="page-link relative block py-1.5 px-3 border bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-white hover:bg-app-black focus:shadow-none">
                <i className="fa-solid fa-backward"></i>
              </a>
            </button>
          </li>
          <AppPagination
            totalCount={state.tables[tableId].totalPages}
            pageSize={searchState.limit}
            siblingCount={2}
            currentPage={pageNumber}
            goToSpecific={goToSpecific}
            fetching={fetching}
          ></AppPagination>
          <li>
            <button
              className="page-item cursor-pointer"
              onClick={goNext}
              hidden={pageNumber === state.tables[tableId].totalPages}
              disabled={fetching}
              title="Siguiente"
            >
              <a className="page-link relative block py-1.5 px-3 border bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-white hover:bg-app-black focus:shadow-none">
                <i className="fa-solid fa-forward"></i>
              </a>
            </button>
          </li>
          <li>
            <button
              className="page-item cursor-pointer"
              onClick={goLast}
              hidden={pageNumber === state.tables[tableId].totalPages}
              disabled={fetching}
              title="Ir al final"
            >
              <a className="page-link relative border block py-1.5 px-3 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-white hover:bg-app-black focus:shadow-none">
                <i className="fa-solid fa-forward-fast"></i>
              </a>
            </button>
          </li>
          <li className="page-item cursor-pointer">
            <div className="flex justify-center">
              <select
                className="form-select cursor-pointer block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-800 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
                onChange={handleLimit}
                value={state.tables[tableId].searchOptions.limit}
                disabled={fetching}
                title="Numero de registros a mostrar"
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}
