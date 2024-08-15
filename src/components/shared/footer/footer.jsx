import React from 'react';
import styles from './styles/footer.module.css'
import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillYoutube, AiOutlineWhatsApp, AiOutlineTwitter } from 'react-icons/ai';


const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.div_footer}>

                    <div className={styles.links}>
                        <ul >
                            <li >
                                <Link to='/dd'>اتصل بنا</Link>
                            </li>
                            <li>
                                <Link to='/dd'>المدونة</Link>
                            </li>
                            <li>
                                <Link to='/dd'>الشروط والاحكام</Link>
                            </li>
                            <li>
                                <Link to='/dd'>نبذة عنا</Link>
                            </li>
                            <li>
                                <Link to='/Cart'>السلة</Link>
                            </li>
                            <li>
                                <Link to='/Products'>المنتجات</Link>
                            </li>
                            <li>
                                <Link to='/'>الرئيسية</Link>
                            </li>
                        </ul>
                    </div>



                    <div className={styles.icons_media}>
                        <ul>
                            <li>
                                <button className={styles.bg_w}><AiOutlineWhatsApp /></button>
                            </li>
                            <li>
                                <button className={styles.bg_y}><AiFillYoutube /></button>
                            </li>
                            <li>
                                <button className={styles.bg_f}><FaFacebookF /></button>
                            </li>
                            <li>
                                <button className={styles.bg_t}><AiOutlineTwitter /></button>
                            </li>
                        </ul>

                        <p>ابق علي تواصل</p>
                    </div>



                    <div className={styles.rights}>
                        <p>جميع حقوق النشر محفوظه لشركه سمارت كود</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer