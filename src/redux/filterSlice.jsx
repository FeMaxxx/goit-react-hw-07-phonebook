const { createSlice } = require("@reduxjs/toolkit");

export const filterSlice = createSlice({
  name: "filret",
  initialState: {
    filter: "",
  },
  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filterContacts } = filterSlice.actions;
