import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { useModal, useToUpdate } from "./index";
import { removeTable } from "../slices/tableGenericSlice";

export default function useTable({ tableOptions, data, tableId }: any) {
  // Handle Delete
  let handleDeleteAlert = (id: string) => {
    tableOptions.deleteItem?.deleteAlert(id);
  };

  //Handle Update
  let { handleRegisterToUpdate } = useToUpdate();
  let { modal: updateModal, handleModalShow: handleUpdateModalShow } = useModal(
    {
      modalHeader: "Edit Element",
      modalBody: tableOptions.updateItem?.updateForm || (
        <h6>No se selecciono un formulario</h6>
      ),
    }
  );
  let showUpdateModal = (element: any) => {
    handleRegisterToUpdate(element);
    handleUpdateModalShow();
  };

  //Handle Create
  let { modal: createModal, handleModalShow: handleCreateModalShow } = useModal(
    {
      modalHeader: "Create Element",
      modalBody: tableOptions.createItem?.createForm || (
        <h6>No se selecciono un formulario</h6>
      ),
    }
  );
  let showCreateModal = () => {
    handleCreateModalShow();
  };

  //Search Options
  interface iSearchOptions {
    limit: number;
    offset: number;
    search: string | null;
    sortOrder: "asc" | "desc";
    sortField: string;
  }
  const [searchState, setSearchState] = useState<iSearchOptions>({
    limit: tableOptions.searchOptions.pagination.limit,
    offset: tableOptions.searchOptions?.pagination?.offset,
    search: tableOptions.searchOptions?.searchWord?.word,
    sortOrder: tableOptions.searchOptions?.order?.sortOrder,
    sortField: tableOptions.searchOptions?.order?.sortField,
  });
  let handleSearchWord = (e: any) => {
    setSearchState((oldSearchState: iSearchOptions) => ({
      ...oldSearchState,
      search: e.target.value,
    }));
  };

  let resetSearch = () => {
    setSearchState((oldSearchState: iSearchOptions) => ({
      ...oldSearchState,
      search: "",
    }));
    dispatch(
      data.dispatchAction({
        tableId,
        searchOptions: { ...searchState, search: null },
      })
    );
  };

  let handleSearchAction = () => {
    dispatch(
      data.dispatchAction({
        tableId,
        searchOptions: { ...searchState },
      })
    );
  };

  // Table State Management
  const dispatch = useDispatch<AppDispatch>();

  const [tableData, settableData] = useState<any>({ content: [] });

  const state: any = useSelector((state) => state);

  const handleLimit = (e: any) => {
    setSearchState((oldSearchState: iSearchOptions) => ({
      ...oldSearchState,
      limit: parseInt(e.target.value),
      offset: 0,
    }));
    setpageNumber(1);
  };
  const [pageNumber, setpageNumber] = useState(1);

  const goFirst = () => {
    setpageNumber(1);
    setSearchState((oldSearchState: iSearchOptions) => ({
      ...oldSearchState,
      offset: 0,
    }));
  };

  const goBack = () => {
    setpageNumber(pageNumber - 1);
    setSearchState((oldSearchState: iSearchOptions) => ({
      ...oldSearchState,
      offset: (pageNumber - 1) * oldSearchState.limit - oldSearchState.limit,
    }));
  };

  const goNext = () => {
    setpageNumber(pageNumber + 1);
    setSearchState((oldSearchState: iSearchOptions) => ({
      ...oldSearchState,
      offset: (pageNumber + 1) * oldSearchState.limit - oldSearchState.limit,
    }));
  };

  const goLast = () => {
    setpageNumber(state.tables[tableId].totalPages);
    setSearchState((oldSearchState: iSearchOptions) => ({
      ...oldSearchState,
      offset:
        state.tables[tableId].totalPages * oldSearchState.limit -
        oldSearchState.limit,
    }));
  };

  const goToSpecific = (currentPageNumber: number) => {
    setpageNumber(currentPageNumber);
    setSearchState((oldSearchState: iSearchOptions) => ({
      ...oldSearchState,
      offset: currentPageNumber * oldSearchState.limit - oldSearchState.limit,
    }));
  };

  const Orderhandler = (sortField: string) => {
    setSearchState((oldSearchState: iSearchOptions) => ({
      ...oldSearchState,
      sortField: sortField,
      sortOrder:
        oldSearchState.sortField === sortField
          ? oldSearchState.sortOrder === "asc"
            ? "desc"
            : "asc"
          : "asc",
    }));
  };
  return {
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
  };
}
