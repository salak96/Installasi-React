import toolkit from  "@reduxjs/toolkit";
//diambil dari toolkit
const {configureStore,createAction,createReducer} = toolkit;

const addToCart = createAction('ADD_TO_CART');

//REDUCER redux-toolkit
const cardReducer = createReducer([],(builder) => {
    // addcase
    builder.addCase(addToCart,(state,action) => {
        state.push(action.payload);
    });
});

//REDUCER LOGIN redux-toolkit
const login = createAction('CREATE_SESSION');
const loginReducer = createReducer({status:false},(builder) => {
    // eslint-disable-next-line no-unused-vars
    builder.addCase(login,(state,action) => {
        state.status = true;
    });
});



//STORE
const store = configureStore({
    // reducer login & cart
    reducer: {
        login: loginReducer,
        cart: cardReducer,
    },
});
console.log('oncreate store: ', store.getState());


//subscribe
store.subscribe(() => {
    console.log('STORE CHANGE SUBCRIBE: ', store.getState());
});

//dispach data di input
store.dispatch(addToCart({id: 1,qty: 30}));
store.dispatch(addToCart({id: 2,qty: 10}));
store.dispatch(login());