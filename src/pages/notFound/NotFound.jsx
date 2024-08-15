import React from 'react'
import styles from './styles/notfound.module.css';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <>
            <div className={styles.NotFound}>
                <img src="../../../public/images/13315300_5203299.jpg" alt="" />
            </div>

            <div className={styles.back_Home}>
                <Link to='/'>الرجوع الي الصفحه الرئيسية</Link>
            </div>

        </>
    )
}

export default NotFound