import React, { useState, useContext } from "react";
import styles from "../signIn/styles/signIn.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { CiLock, CiMail } from "react-icons/ci";
import { HiOutlineUser } from "react-icons/hi";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import AuthProvider from "../../../context/authContext";
// import auth from "../../../firebase";

const Create_account = () => {
  document.title = "انشاء حساب جديد";
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [accept, setAccept] = useState(false);

  const navigate = useNavigate();
  // const userNow = useContext(AuthProvider);

  // === handle submit === //
  const handleSubmit = async () => {
    let userData = { userName, email, password, rePassword };
    let checkData = true;
    setAccept(true);
    if (
      userName === "" ||
      email === "" ||
      password.length < 8 ||
      rePassword !== password
    ) {
      checkData = false;
    } else checkData = true;
    try {
      if (checkData) {
        let res = axios
          .post(`https://e-commerce-api-3br8.onrender.com/signup/`, userData)
          .then((res) => {
            if (res.message = "Done") {
              toast.success("تم تسجيل المستخدم بنجاح");
              navigate(`/SignIn`);
            }

          })
          .catch((error) => {
            toast.error(error.message);
          });
        // userNow.setCurrentUser("stored")

        // console.log(res);
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

          <h3>انشاء حساب </h3>
          <p>انشئ حساب مجاني و استمتع به</p>
          <form action="">
            <div>
              <label htmlFor="userName">
                <HiOutlineUser />
              </label>
              <input
                type="text"
                name="userName"
                id="userName"
                placeholder="الاسم"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            {userName === "" && accept && (
              <p className={styles.errorMassing}>
                اسم المستخدم مطلوب<span>!</span>
              </p>
            )}
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
                placeholder="كلمة المرور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {password.length < 8 && accept && (
              <p className={styles.errorMassing}>
                يجب أن تكون كلمة المرور أكثر من 8 ارقام /ويحتوي علي احرف كبيره وصغيره<span>!</span>
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
              <Link to='/Forget_pass'>هل نسيت كلمة المرور؟</Link>

              <button onClick={handleSubmit}>انشاء حساب </button>
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
          <img src="../../../../public/images/form2.png" alt="" />
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
};

export default Create_account;
