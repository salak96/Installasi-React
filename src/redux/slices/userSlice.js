import {createSlice} from '@reduxjs/toolkit';


const userSlice = createSlice ({
    name:'user',
    initialState:{
        data:{
            username:'',
            addres:'',
            listUser:[],
        },
    },
    reducers:{
         setListUser :(state,action) =>{
            const username = action.payload.find((username))
            state.data.listUser = action.payload

         }
    }
})

export const { setListUser} = userSlice.actions;

export default userSlice.reducer;