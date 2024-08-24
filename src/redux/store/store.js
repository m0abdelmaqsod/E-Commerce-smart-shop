import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products/porducts";
import cartSlice from "./shopping-cart/cartSlice";


const store = configureStore({
    reducer: {
        product: productsSlice.reducer,
        cart : cartSlice.reducer,
    }
})



export default store;