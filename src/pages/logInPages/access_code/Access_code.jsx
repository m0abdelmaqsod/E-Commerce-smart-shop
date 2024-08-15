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

const Access_code = () => {
  document.title = "تسجيل دخول";
  const [text, setText] = useState("");
  const [accept, setAccept] = useState(false);

  const navigate = useNavigate();

  // === handle submit === //
  const handleSubmit = () => {
    let userData = { text };
    console.log(userData);

    setAccept(true);
    let checkData = true;
    setAccept(true);
    if (text.length !== 6) {
      checkData = false;
    } else checkData = true;
    if (checkData) {
      axios
        .get(`http://localhost:8000/user/1`)
        .then((res) => {
          toast.success("تم تاكيد الرمز ادخل كلمه مرور جديدة");
          navigate(`/New_password`);
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
              <label htmlFor="text">
                <CiMail />
              </label>
              <input
                type="text"
                name="text"
                id="text"
                placeholder="ادخل الرمز المكون من 6 ارقام"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            {text.length !== 6 && accept && (
              <p className={styles.errorMassing}>
                يجب ان يكون الرمز مكون من 6 ارقام<span>!</span>
              </p>
            )}
          </form>

          <div className={styles.btn_Sign_and_forget_password}>
            <div className={styles.btn_Sign}>
              <Link to={"/Forget_pass"}>ادخل البريد الالكتروني مره اخري ؟</Link>
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

export default Access_code;
