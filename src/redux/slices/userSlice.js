import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: {
            Address: '',
            City: '',
            ZipCode: '',
            Phone: '',
            listUser: [],
        },
    },
    reducers: {
        setListUser: (state, action) => {
            state.data.listUser = action.payload;
        },
    },
});

export const { setListUser } = userSlice.actions;

export default userSlice.reducer;
