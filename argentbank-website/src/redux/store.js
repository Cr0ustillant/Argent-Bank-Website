import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./reducers/reducer"

const store = configureStore({
  reducer: {
    USER: userSlice.reducer,
  },
});
export default store