import { configureStore } from '@reduxjs/toolkit';
import walletReducer from "./Redux/WalletSlice";
export const store = configureStore({
  reducer: {
    wallet:walletReducer
  },
})