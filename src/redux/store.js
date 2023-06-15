import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import userSlice from './slices/userSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userSlice,
    },
});
console.log('oncreate store: ', store.getState());

store.subscribe(() => {
    console.log('STORE CHANGE SUBCRIBE: ', store.getState());
});

export default store;
