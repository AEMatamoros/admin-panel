import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iTableOptions } from "../../interfaces/generic.interfaces";

import { faRefresh, faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";

interface iTableOptionsActions {
  tableOptions: iTableOptions;
  searchState: any;
  fetching: boolean;
  resetSearch: () => void;
  handleSearchAction: () => void;
  handleSearchWord: (e: any) => void;
  showCreateModal: () => void;
}

export default function TableOptions({
  tableOptions,
  searchState,
  resetSearch,
  handleSearchAction,
  handleSearchWord,
  showCreateModal,
  fetching,
}: iTableOptionsActions) {
  return (
    <div className="w-3/12 float-right my-2 text-right flex flex-row-reverse">
      {tableOptions.searchOptions?.searchWord?.show && (
        <button
          className={`btn ml-1 ${
            searchState.search?.length === 0
              ? "bg-indigo-200"
              : "bg-indigo-400 hover:bg-indigo-500"
          }  m-0`}
          onClick={resetSearch}
          disabled={fetching}
          title="Resetear busqueda por palabra clave"
        >
          <FontAwesomeIcon icon={faRefresh}></FontAwesomeIcon>
        </button>
      )}
      {tableOptions.searchOptions?.searchWord?.show && (
        <button
          className={`btn ml-1 ${
            searchState.search?.length === 0
              ? "bg-yellow-200"
              : "bg-yellow-400 hover:bg-yellow-500"
          }  m-0`}
          onClick={handleSearchAction}
          disabled={searchState.search?.length === 0 || fetching}
          title="Buscar por palabra clave"
        >
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </button>
      )}
      {tableOptions.searchOptions?.searchWord?.show && (
        <input
          type="text"
          placeholder="Buscar..."
          className="form-control block px-3 py-1.5 text-base font-normal text-gray-500 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-500 focus:bg-white focus:border-blue-400 focus:outline-none"
          value={searchState.search || ""}
          onChange={handleSearchWord}
        />
      )}

      <button
        className="btn bg-green-400 hover:bg-green-500 my-0 mx-1 "
        onClick={showCreateModal}
        hidden={!tableOptions.createItem?.active}
        disabled={fetching}
        title="Crear registro"
      >
        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
      </button>
    </div>
  );
}
