import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activePlaylist: null,
  activeSong: null,
  searchTerm: "",
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setActivePlaylist(state, action) {
      state.activePlaylist = action.payload;
    },
    setActiveSong(state, action) {
      state.activeSong = action.payload;
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const playerActions = playerSlice.actions;
export default playerSlice.reducer;
