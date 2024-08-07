import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user/user.reducer";
import { modalReducer } from "./modal/modal.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer,
});

export default rootReducer;
