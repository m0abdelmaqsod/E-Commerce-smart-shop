import React from 'react'
import styles from './styles/user.module.css';
import { Link } from 'react-router-dom';
import { BiUserCircle, BiLogOut } from 'react-icons/bi';
import { TbLogout2 } from 'react-icons/tb';
import { HiOutlineTemplate } from 'react-icons/hi';
import axios from 'axios'





const User = ({ showUser, setShowUser }) => {


    return (
        <>
            <div className={setShowUser == false ? styles.user : styles.name}>


                {/* <div className={styles.user_signed_in}>

                    <div className={styles.div_user}>
                        <div className={styles.name_and_email}>
                            <h3>مرحبا احمد بلال</h3>
                            <p>Ahmedbelalofficical10@gmail.com</p>
                        </div>

                        <div className={styles.div_img}>
                            <img src={require('../../../../assets/images/home/user.png')} alt="" />
                        </div>
                        <span className={styles.border}></span>
                    </div>


                    <div className={styles.div_info}>
                        <Link to={''} onClick={()=>setShowUser(false)}>
                            <p>لوحه التحكم</p>
                            <p><HiOutlineTemplate /></p>
                        </Link>

                        <Link to={''} onClick={()=>setShowUser(false)}>
                            <p>تفاصيل الحساب</p>
                            <p><BiUserCircle /></p>
                        </Link>

                        <Link to={''} onClick={()=>setShowUser(false)}>
                            <p>تسجيل الخروج</p>
                            <p><TbLogout2 /></p>
                        </Link>
                    </div>
                </div> */}

                <div className={styles.visitor}>
                    <Link to={'/SignIn'} onClick={()=>setShowUser(false)}>
                        <p>تسجيل دخول</p>
                        <p><BiUserCircle /></p>
                    </Link>
                    <Link onClick={()=>setShowUser(false)} to={'/Create_account'}>
                        <p>تسجيل جديد</p>
                        <p><BiUserCircle /></p>
                    </Link>
                </div>
            </div >
        </>
    )
}

export default User