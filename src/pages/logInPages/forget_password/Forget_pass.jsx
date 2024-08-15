import React, { useState } from "react";
import styles from "../signIn/styles/signIn.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Forget_pass = () => {
  document.title = "تسجيل دخول";
  const [email, setEmail] = useState("");
  const [accept, setAccept] = useState(false);

  const navigate = useNavigate();

  // === handle submit === //
  const handleSubmit = () => {
    let userData = { email };
    console.log(userData);

    setAccept(true);
    let checkData = true;
    setAccept(true);
    if (email === "") {
      checkData = false;
    } else checkData = true;
    if (checkData) {
      axios
        .get(`http://localhost:8000/user/1`)
        .then((res) => {
          toast.success("نم ارسال الرمز علي بريدك الالكتروني");
          navigate(`/Access_code`);
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
          <p>ادخل البريد الالكتروني لاسترجاع حسابك </p>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {email === "" && accept && (
              <p className={styles.errorMassing}>
                البريد الالكتروني مطلوب<span>!</span>
              </p>
            )}
          </form>

          <div className={styles.btn_Sign_and_forget_password}>
            <div className={styles.btn_Sign}>
              <Link to={"/SignIn"}>تسجيل الدخول</Link>
              <button onClick={handleSubmit}>ارسل الرمز</button>
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
};

export default Forget_pass;
