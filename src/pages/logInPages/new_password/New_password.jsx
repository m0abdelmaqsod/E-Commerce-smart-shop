import React, { useState } from "react";
import styles from "../signIn/styles/signIn.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { CiLock } from "react-icons/ci";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";






const New_password = () => {
    document.title = "تسجيل دخول";
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [accept, setAccept] = useState(false);

    const navigate = useNavigate();

    // === handle submit === //
    const handleSubmit = async () => {
        let userData = { password, rePassword };
        let checkData = true;
        setAccept(true);
        console.log(userData);
        if (
            password.length < 8 ||
            rePassword !== password
        ) {
            checkData = false;
        } else checkData = true;
        if (checkData) {
            axios
                .get(`http://localhost:8000/user/1`)
                .then((res) => {
                    toast.success("تم تغيير كلمه المرور");
                    navigate(`/`);
                })
                .catch((error) => {
                    toast.error(error.message);
                });
        }
    };
    return (
        <>
            <section className={styles.signIn}>
                <div className={styles.div_form}>
                    <img src="../../../../public/images/Frame 9319.png" alt="" />


                    <h3> إعادة تعيين كلمة السر</h3>
                    <p>ادخل الرمز لاسترجاع حسابك </p>
                    <form action="">
                        <div>
                            <label htmlFor="password">
                                <CiLock />
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="كلمة المرور الجديدة"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {password.length < 8 && accept && (
                            <p className={styles.errorMassing}>
                                يجب أن تكون كلمة المرور أكثر من 8  ارقام / ويحتوي علي احرف كبيره وصغيره <span>!</span>
                            </p>
                        )}
                        <div>
                            <label htmlFor="rePassword">
                                <CiLock />
                            </label>
                            <input
                                type="password"
                                name="rePassword"
                                id="rePassword"
                                placeholder="اعادة كلمة المرور "
                                value={rePassword}
                                onChange={(e) => setRePassword(e.target.value)}
                            />
                        </div>
                        {rePassword !== password && accept && (
                            <p className={styles.errorMassing}>
                                كلمة المرور غير متطابقة<span>!</span>
                            </p>
                        )}
                    </form>

                    <div className={styles.btn_Sign_and_forget_password}>
                        <div className={styles.btn_Sign}>
                            <Link></Link>
                            <button onClick={handleSubmit}>تاكيد كلمة المرور</button>
                        </div>
                    </div>

                    {/* start of media*/}
                    <div className={styles.media}>
                        <p>: او سجل الدخول عبر</p>
                        <div className={styles.icons_media}>
                            <ul>
                                <li>
                                    <button className={styles.bg_l}>
                                        <BiLogoLinkedin />
                                    </button>
                                </li>
                                <li>
                                    <button className={styles.bg_p}>
                                        <FaPinterestP />
                                    </button>
                                </li>
                                <li>
                                    <button className={styles.bg_f}>
                                        <FaFacebookF />
                                    </button>
                                </li>
                                <li>
                                    <button className={styles.bg_t}>
                                        <AiOutlineTwitter />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.div_img}>
                    <img src="../../../../public/images/form.png" alt="" />
                    <div className={styles.btn_signAndCreate}>
                        <NavLink
                            className={({ isActive }) => (isActive ? styles.btnActive : "")}
                            to={"/SignIn"}
                        >
                            تسجيل الدخول{" "}
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => (isActive ? styles.btnActive : "")}
                            to={"/Create_account"}
                        >
                            انشاء حساب
                        </NavLink>
                    </div>
                </div>
            </section>
        </>
    );
}

export default New_password