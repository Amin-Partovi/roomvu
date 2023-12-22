import { createSlice } from "@reduxjs/toolkit";

export const ThemeToggleSlice = createSlice({
  name: "theme-toggle",
  initialState: {
    value: false,
  },
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggle: toggleTheme } = ThemeToggleSlice.actions;

export default ThemeToggleSlice.reducer;
