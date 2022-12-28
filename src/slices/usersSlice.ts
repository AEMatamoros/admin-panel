import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface iTablesState {
  [tableId: number]: {
    searchOptions?: any;
    content?: any;
    totalElements?: number;
    totalPages?: number;
    loading: boolean;
    error: any;
    fetching: boolean;
  };
  toUpdateregister: any;
}

const initialState: iTablesState = {
  toUpdateregister: {},
};

export interface iNewTable {
  tableId: number;
  searchOptions: any;
}
export interface iRemoveTable {
  tableId: number;
}
// Test
import {
  getData,
  postData,
  putData,
  deleteData,
} from "../services/users.service";

export const TablesReducer = createSlice({
  name: "TablesReducer",
  initialState,
  reducers: {
    setToUpdateRegister: (state, action: PayloadAction<any>) => {
      state.toUpdateregister = action.payload;
    },
    addTable: (state, action: PayloadAction<iNewTable>) => {
      state[action.payload.tableId] = {
        searchOptions: action.payload.searchOptions,
        loading: false,
        error: false,
        fetching: false,
      };
    },
    removeTable: (state, action: PayloadAction<iRemoveTable>) => {
      delete state[action.payload.tableId];
    },
  },
  extraReducers: {
    // extraReducers handles asynchronous requests, which is our main focus.
    [`${getData.pending}`]: (state: iTablesState, action) => {
      if (!!state[action.meta.arg.tableId]) {
        state[action.meta.arg.tableId] = {
          ...state[action.meta.arg.tableId],
          loading: false,
          error: false,
          fetching: true,
        };
      } else {
        state[action.meta.arg.tableId] = {
          searchOptions: action.meta.arg.searchOptions,
          loading: true,
          error: false,
          fetching: true,
        };
      }
    },
    [`${getData.fulfilled}`]: (state: iTablesState, action) => {
      state[action.payload.tableId] = {
        searchOptions: action.payload.searchOptions,
        content: action.payload.data,
        totalElements: action.payload.data.totalElements,
        totalPages: action.payload.data.totalPages,
        loading: false,
        error: false,
        fetching: false,
      };
    },
    [`${getData.rejected}`]: (state: iTablesState, action) => {
      state[action.meta.arg.tableId] = {
        loading: false,
        error: true,
        fetching: false,
      };
    },
  },
});

export const { setToUpdateRegister, addTable, removeTable } =
  TablesReducer.actions;

export default TablesReducer.reducer;
