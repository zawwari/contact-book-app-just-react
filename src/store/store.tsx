import { configureStore } from "@reduxjs/toolkit";
import ContactCardReducer from './slices/ContactCardSlice';
const store = configureStore({
  reducer: {
    contact: ContactCardReducer,
  }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;