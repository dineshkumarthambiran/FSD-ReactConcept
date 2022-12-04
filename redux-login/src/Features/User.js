import { createSlice } from '@reduxjs/toolkit'



const userSlice = createSlice({
  name: 'user',
  initialState:{
    value:{
        Name:'asasa',
        Age:2,
        Company:''

    }
  },
  reducers: {
    login:
        (state,action)=>
        state.value=action.payload
    
  }
});

export const {login} = userSlice.actions 
export default userSlice.reducer




