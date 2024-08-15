import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    singlePro: [],
    commitUser: [],
    sliderHeadHome: [],
}


const productsSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {
        setProducts(state, action) {
            state.products = action.payload
        },

        setSingleProduct(state, action) {
            state.singlePro = action.payload
        },

        setCommitUser(state, action) {
            state.commitUser = action.payload
        },


        setsliderHome(state, action) {
            state.sliderHeadHome = action.payload
        }
    }
})



export const productAction = productsSlice.actions;

export default productsSlice;