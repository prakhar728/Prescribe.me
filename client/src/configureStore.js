import { configureStore } from '@reduxjs/toolkit';
import walletReducer from "./Redux/WalletSlice";
import VisitReducer from "./Redux/Visits";
export const store = configureStore({
  reducer: {
    wallet:walletReducer,
    visit:VisitReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false
    })
  }
})