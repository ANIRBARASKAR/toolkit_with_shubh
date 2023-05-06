
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addUserAction = createAsyncThunk(
  "User/add",
  async (arg, { rejectWithValue, getState }) => {
    try {
      const data = await axios.post('http://localhost:3000/userData',arg);
      console.log("posted Data",data);

      return data;
    } catch (error) {
      return rejectWithValue(error.meassage);
    }
  }
);


export const getUserAction = createAsyncThunk(
  "User/get",
  async (arg, { rejectWithValue, getState }) => {
    try {
      const data = await axios.get('http://localhost:3000/userData');
      console.log("get Data",data);

      return data.data;
    } catch (error) {
      return rejectWithValue(error.meassage);
    }
  }
);
