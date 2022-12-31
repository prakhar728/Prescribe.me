import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  address:"0x0",
  signer:""
}

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    updateAddress:(state,action)=>{
        state.address=action.payload
    }
    ,
    updateSigner: (state,action) => {
      state.signer = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateAddress, updateSigner} = walletSlice.actions

export default walletSlice.reducer