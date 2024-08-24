import axios from "axios";
import { user } from "../../../../data";
import { slider1 } from "../../../../data";
import { Product } from "../../../../data";
import { comments } from "../../../../data";
import { productAction } from "./porducts";




// ==== fetch products ==== //
export const fetchProducts = () => {
    return async (dispatch) => {
        try {
            // const response = await axios.get("http://localhost:8000/Product")
            dispatch(productAction.setProducts(Product));

        } catch (error) {
            console.log(error);

        }
    }
}




// ==== get product by id ==== //
export const singleProduct = (proId) => {
    return async (dispatch) => {
        try {
            // const response = await axios.get(`http://localhost:8000/Product/${proId}`)
            const single = Product.find(pro => pro.id === proId)
            dispatch(productAction.setSingleProduct(single));

        } catch (error) {
            console.log(error);

        }
    }
}





// ====  get data reviews ==== //
export const dataComments = () => {
    return async (dispatch) => {
        try {
            // const response = await axios.get("http://localhost:8000/comments")
            dispatch(productAction.setCommitUser(comments));

        } catch (error) {
            console.log(error);

        }
    }
}


// ====  get data slider1 Home ==== //
export const sliderHome = () => {
    return async (dispatch) => {
        try {
            // const response = await axios.get("http://localhost:8000/slider1");
            dispatch(productAction.setsliderHome(slider1));

        } catch (error) {
            console.log(error);

        }
    }
}



