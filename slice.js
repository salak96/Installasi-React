/* eslint-disable no-unused-vars */
import toolkit from  "@reduxjs/toolkit";

// eslint-disable-next-line no-unused-vars
const {configureStore,createSlice } = toolkit;

// eslint-disable-next-line no-unused-vars
const cartSlice = createSlice({
    //parameter
    name: 'cart',
    //nama state
    initialState: [],
    //reducer
    reducers: {
        addToCart: (state,action) => {
            state.push(action.payload);
        },
    },
});

const store = configureStore({
    // reducer login & cart
    reducer: {
        cart: cartSlice.reducer,
    },
    
});
console.log('oncreate store: ', store.getState());


//subscribe
store.subscribe(() => {
    console.log('STORE CHANGE SUBCRIBE: ', store.getState());
});

//dispatch data
store.dispatch(cartSlice.actions.addToCart({id: 1,qty: 30}));
store.dispatch(cartSlice.actions.addToCart({id: 2,qty: 10}));