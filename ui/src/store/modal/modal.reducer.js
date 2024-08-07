import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal(state) {
      state.showModal = !state.showModal;
    },
  },
});

export const { toggleModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
