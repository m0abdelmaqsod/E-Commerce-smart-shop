import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products/porducts";


const store = configureStore({
    reducer: {
        product: productsSlice.reducer
    }
})



export default store;