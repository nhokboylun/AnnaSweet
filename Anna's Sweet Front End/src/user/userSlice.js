import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
    updateLoading(state, action) {
      state.loading = action.payload;
    },
    reset(state) {
      state.username = initialState.username;
      state.loading = initialState.loading;
    },
  },
});

export const { updateName, reset, updateLoading } = userSlice.actions;

export default userSlice.reducer;

export const getUsername = (state) => state.user.username;

export const getLoadingStatus = (state) => state.user.loading;
