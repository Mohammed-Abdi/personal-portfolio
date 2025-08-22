import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface NavLink {
  label: string;
  link: string;
  isActive: boolean;
}

interface SettingsState {
  navLinks: NavLink[];
}

const initialState: SettingsState = {
  navLinks: [
    { label: "Work", link: "#work", isActive: true },
    { label: "Info", link: "#info", isActive: false },
  ],
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setActive: (state, action: PayloadAction<string>) => {
      state.navLinks.forEach((navLink) => {
        navLink.isActive = navLink.link === action.payload;
      });
    },
  },
});

export const { setActive } = settingsSlice.actions;
export default settingsSlice.reducer;
