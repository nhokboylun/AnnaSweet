import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMenu } from "../api/fetchApi";

export const fetchMenus = createAsyncThunk(
  "menu/fetchMenus",
  async function () {
    const menu = await getMenu();
    return { menu };
  },
);

const initialState = {
  menu: [],
  status: "idle",
  error: null,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  //For thunks
  extraReducers: (builder) =>
    builder
      .addCase(fetchMenus.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMenus.fulfilled, (state, action) => {
        state.menu = action.payload.menu;
        state.status = "idle";
      })
      .addCase(fetchMenus.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      }),
});

export default menuSlice.reducer;
