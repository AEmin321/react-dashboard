import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  userId: "63701cc1f032390a34000324",
};

const themeSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode(state) {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = themeSlice.actions;
export default themeSlice.reducer;
