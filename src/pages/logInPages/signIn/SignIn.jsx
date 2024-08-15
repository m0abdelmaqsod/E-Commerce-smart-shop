import React, { useState, useContext } from "react";
import styles from "../signIn/styles/signIn.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { CiLock, CiMail } from "react-icons/ci";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import AuthProvider from "../../../context/authContext";
// import auth from "../../../firebase";






const SignIn = () => {

    // document.title = "انشاء حساب جديد";
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [accept, setAccept] = useState(false);

    const navigate = useNavigate();
    // const userNow = useContext(AuthProvider);

    // === handle submit === //
    const handleSubmit = async () => {
        let userData = {  password, email};
        let checkData = true;
        setAccept(true);
        if (
            email === "" ||
            password.length < 8
        ) {
            checkData = false;
        } else checkData = true;
        try {
            if (checkData) {
                let res = axios
                    .post(`https://e-commerce-api-3br8.onrender.com/login/`, userData)
                    .then((res) => {
                        if (res.message = "Done") {
                            toast.success("تم تسجيل المستخدم بنجاح");
                            navigate(`/`);
                        }
                    })
                    .catch((error) => {
                        toast.error(error.message);
                    });
                // userNow.setCurrentUser("stored")

                console.log(res);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <section className={styles.signIn}>
                <div className={styles.div_form}>
                    <img src="../../../../public/images/Frame 9319.png" alt="" />

                    <h3>تسجيل الدخول </h3>
                    <p>تسجيل الدخول للمتابعة في موقعنا</p>
                    <form action="">
                        <div>
                            <label htmlFor="email">
                                <CiMail />
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="البريد الالكتروني"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        {email === "" && accept && (
                            <p className={styles.errorMassing}>
                                البريد الالكتروني مطلوب<span>!</span>
                            </p>
                        )}
                        <div>
                            <label htmlFor="password">
                                <CiLock />
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="كلمة البريد"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {password.length < 8 && accept && (
                            <p className={styles.errorMassing}>
                                يجب أن تكون كلمة المرور أكثر من 8  ارقام / ويحتوي علي احرف كبيره وصغيره <span>!</span>
                            </p>
                        )}
                    </form>

                    <div className={styles.btn_Sign_and_forget_password}>
                        <div className={styles.btn_Sign}>
                            <Link to='/Forget_pass'>هل نسيت كلمة المرور؟</Link>

                            <button onClick={handleSubmit}>تسجيل الدخول </button>
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



                {/* start of div_img */}
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

export default SignIn