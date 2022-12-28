import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api/exampleTable";

interface iTableOptions {
  tableId: number;
  searchOptions: any;
}

export const getData = createAsyncThunk(
  "/",

  async (tableOptions: iTableOptions, { rejectWithValue }) => {
    try {
      const response = await API.get("", {
        params: { searchOptions: tableOptions.searchOptions },
      });
      let customResponse = {
        data: response.data.data,
        tableId: tableOptions.tableId,
        searchOptions: tableOptions.searchOptions,
      };

      return customResponse;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const postData = createAsyncThunk(
  "/",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await API.post("", data);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const putData = createAsyncThunk(
  "/",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await API.put("", data);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteData = createAsyncThunk(
  "/",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await API.put("", data);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);
