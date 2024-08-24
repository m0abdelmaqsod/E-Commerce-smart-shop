import React from 'react';
import styles from "../../../pages/cart/styles/cart.module.css"



// ===== Redux ===== //
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../redux/store/shopping-cart/cartSlice';




const CartItem = ({ item }) => {

    const { id, productName, imageUrl, price, totalPrice, quantity, color } = item;
    const dispatch = useDispatch();

    const incrementItem = () => {
        dispatch(cartActions.addItem({
            id,
            productName,
            imageUrl,
            price,
        }))
    }


    const decrementItem = () => {
        dispatch(cartActions.removeItem({
            id
        }))
    }


    const deleteItem = () => {
        dispatch(cartActions.deleteItem({
            id
        }))
    }


    return (
        <>
            <div className={styles.price}>
                <h6>جنيه {totalPrice}</h6>
            </div>

            <div className={styles.inc_or_dec_prod}>
                <button onClick={decrementItem}>-</button>
                <p>{quantity}</p>
                <button onClick={incrementItem}>+</button>
            </div>

            <div className={styles.price}>
                <h6>{price}ج.م</h6>
            </div>

            <div className={styles.infoPro}>

                <div className={styles.name_and_weight_and_color}>
                    <h3>{productName}</h3>
                    <p>{color} : اللون</p>
                    <p>الوزن : 2 كيلو</p>
                </div>

                <div className={styles.img_cart}>
                    <img src={imageUrl} alt="error in img" />
                </div>

            </div>

            <div className={styles.delete_cart}>
                <button onClick={deleteItem}>X</button>
            </div>

            <span className={styles.border_bottom}></span>

        </>
    )
}

export default CartItem