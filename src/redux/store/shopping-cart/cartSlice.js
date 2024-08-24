import { createSlice } from "@reduxjs/toolkit";


const item = localStorage.getItem('cartItem') !== null ? JSON.parse(localStorage.getItem('cartItem')) : [];
const totalQuantity = localStorage.getItem('totalQuantity') !== null ? JSON.parse(localStorage.getItem('totalQuantity')) : 0;
const totalAmount = localStorage.getItem('totalAmount') !== null ? JSON.parse(localStorage.getItem('totalAmount')) : 0;





const initialState = {
    cartItem: item,
    totalQuantity: totalQuantity,
    totalAmount: totalAmount,
}





const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {

        // ========= add item ========== //
        addItem(state, action) {
            const newItem = action.payload;

            const existingItem = state.cartItem.find(item => item.id === newItem.id);
            state.totalQuantity++;

            if (!existingItem) {
                state.cartItem.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    imageUrl: newItem.imageUrl,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                })
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(existingItem.price);
            }

            state.totalAmount = state.cartItem.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0);




            localStorage.setItem('cartItem', JSON.stringify(state.cartItem.map(item => item)));
            localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
            localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));

        },




        // ========= remove item ========== //
        removeItem(state, action) {
            const id = action.payload;
            const existingItem = state.cartItem.find((item) => item.id === id.id);

            state.totalQuantity--;


            if (existingItem.quantity === 1) {
                state.cartItem = state.cartItem.filter((item) => item.id !== id.id)
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = Number(existingItem.totalPrice) - Number(existingItem.price);
            }
            state.totalAmount = state.cartItem.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0);


            localStorage.setItem('cartItem', JSON.stringify(state.cartItem.map(item => item)))
            localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
            localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
        },



        // ========= delete item ========== //
        deleteItem(state, action) {
            const id = action.payload;
            const existingItem = state.cartItem.find((item) => item.id === id.id);

            if (existingItem) {
                state.cartItem = state.cartItem.filter((item) => item.id !== id.id);
                state.totalQuantity = state.totalQuantity - existingItem.quantity;
            }

            state.totalAmount = state.cartItem.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0);


            localStorage.setItem('cartItem', JSON.stringify(state.cartItem.map(item => item)))
            localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
            localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
        }





    }
})


export const cartActions = cartSlice.actions;


export default cartSlice;









