import { useEffect } from 'react'

import {
  PaginationConf,
  TableHeader,
  TableBody,
  TableOptions,
  TableDeleteUpdate,
} from '../index'

import { iTableData, iTableOptions } from '../../interfaces/generic.interfaces'

import { useTable } from '../../hooks'

import Loader from './Loader'
interface iProps {
  tableId: number
  tableName: string
  tableHeaders: iTableData
  tableOptions: iTableOptions
  data: {
    dispatchAction: any
  }
}

export default function AppTable({
  tableId,
  tableName,
  tableHeaders,
  tableOptions,
  data,
}: iProps) {
  const {
    state,
    searchState,
    tableData,
    pageNumber,
    updateModal,
    createModal,
    settableData,
    dispatch,
    resetSearch,
    handleSearchAction,
    handleSearchWord,
    showCreateModal,
    Orderhandler,
    showUpdateModal,
    handleDeleteAlert,
    goFirst,
    goBack,
    goToSpecific,
    goNext,
    goLast,
    handleLimit,
    removeTable,
  } = useTable({ tableId, tableOptions, data })

  // Add Content
  useEffect(() => {
    if (state.tables[tableId] && state.tables[tableId].content) {
      settableData({ content: state.tables[tableId].content })
    }
  }, [state.tables])

  // On Parameter Change
  useEffect(() => {
    dispatch(
      data.dispatchAction({
        tableId,
        searchOptions: { ...searchState },
      }),
    )
  }, [
    searchState.limit,
    searchState.offset,
    searchState.sortField,
    searchState.sortOrder,
  ])

  // Dimount
  useEffect(() => {
    return () => {
      dispatch(removeTable({ tableId }))
    }
  }, [])

  return (
    <div className={`m-0 p-0 w-full`}>
      <h4 className="text-gray-500">{tableName}</h4>
      {!!state.tables[tableId] && !state.tables[tableId].error ? (
        <>
          {state.tables[tableId].loading ? (
            <div className="w-full">
              <Loader />
            </div>
          ) : (
            <div
              className={`${
                state.tables[tableId].fetching && 'animate-pulse'
              } overflow-x-auto`}
            >
              <TableOptions
                fetching={state.tables[tableId].fetching}
                tableOptions={tableOptions}
                searchState={searchState}
                resetSearch={resetSearch}
                handleSearchAction={handleSearchAction}
                handleSearchWord={handleSearchWord}
                showCreateModal={showCreateModal}
              ></TableOptions>
              <table
                className={`table-auto w-full mt-2 ${
                  state.tables[tableId].fetching && 'animate-pulse'
                }`}
              >
                <thead className="bg-app-black">
                  <tr className="bg-primary text-center">
                    {tableHeaders.headers.map(({ name, key }, index) => (
                      <TableHeader
                        key={`h${index}${tableId}`}
                        obkey={key}
                        state={state}
                        tableId={tableId}
                        Orderhandler={Orderhandler}
                        name={name}
                      />
                    ))}
                    {((!!tableOptions.updateItem &&
                      tableOptions.updateItem.active) ||
                      (!!tableOptions.deleteItem &&
                        tableOptions.deleteItem.active)) && (
                      <th
                        key={`${tableId}Options`}
                        className=" w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-l border-transparent"
                      >
                        Opciones
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {tableHeaders.headers.map(({ key, type }, index) => (
                      <td key={index}>
                        {tableData.content.map(
                          (element: any, index: number) => (
                            <TableBody
                              key={index}
                              type={type}
                              index={index}
                              value={element[`${key}`]}
                            />
                          ),
                        )}
                      </td>
                    ))}
                    {((!!tableOptions.updateItem &&
                      !!tableOptions.updateItem.active) ||
                      (!!tableOptions.deleteItem &&
                        !!tableOptions.deleteItem.active)) && (
                      <TableDeleteUpdate
                        tableId={tableId}
                        tableData={tableData}
                        tableOptions={tableOptions}
                        showUpdateModal={showUpdateModal}
                        handleDeleteAlert={handleDeleteAlert}
                        fetching={state.tables[tableId].fetching}
                      ></TableDeleteUpdate>
                    )}
                  </tr>
                </tbody>
              </table>

              {tableOptions.searchOptions?.pagination?.show && (
                <div
                  className={`${
                    state.tables[tableId].fetching && 'animate-pulse'
                  }`}
                >
                  {!!state.tables[tableId] && (
                    <PaginationConf
                      state={state}
                      searchState={searchState}
                      tableId={tableId}
                      pageNumber={pageNumber}
                      goFirst={goFirst}
                      goBack={goBack}
                      goToSpecific={goToSpecific}
                      goNext={goNext}
                      goLast={goLast}
                      handleLimit={handleLimit}
                      fetching={state.tables[tableId].fetching}
                    />
                  )}
                </div>
              )}
              {updateModal}
              {createModal}
            </div>
          )}
        </>
      ) : (
        <div className="w-full text-center">
          <span className="text-sm text-gray-400 w-full">
            Error al cargar los datos de la tabla
          </span>
        </div>
      )}
    </div>
  )
}
