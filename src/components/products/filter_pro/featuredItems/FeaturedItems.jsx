import React from 'react';
import styles from './styles/featuredItems.module.css';
import { Link } from 'react-router-dom';




const FeaturedItems = ({ product }) => {
    const { id, productName, price, imageUrl } = product;


    const name = productName.length >= 12 ? "..." + productName.substr(0, 12) : productName;


    return (
        <>
            <div className={styles.name_price}>
                <Link to={`/SinglePro/${id}`}>
                    {name}
                </Link>
                <p>{price} ج.م</p>
            </div>

            <div className={styles.div_img}>
                <Link to={`/SinglePro/${id}`}>
                    <img src={imageUrl} alt="" />
                </Link>
            </div>
        </>
    )
}

export default FeaturedItems