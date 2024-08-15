import React, { useState } from "react";
import styles from "./styles/coupon.module.css";

const Coupon = () => {
  const [coupon, setCoupon] = useState();
  const [commentCoupon, setCommentCoupon] = useState();

  const handelCoupon = (e) => {
    e.preventDefault();
    let couponData = { coupon };
    console.log(couponData);
  };

  const handelPaying = (e) => {
    e.preventDefault();
    let payingData = { coupon, commentCoupon };
    console.log(payingData);
  };

  return (
    <>
      <div className={styles.coupon}>
        <h3>الكوبون</h3>
        <p>. ادخل رمز الكوبون الخاص بك ازا كان لديك واحدا</p>
        <form>
          <button className={styles.btnCoupon} onClick={handelCoupon}>
            تاكيد الكوبون
          </button>
          <input
            type="text"
            name="coupon"
            placeholder="رمز الكوبون"
            onChange={(e) => setCoupon(e.target.value)}
          />
        </form>
        <h3>ملحوظة</h3>
        <p> ... اضف ملحوظة للبائع</p>

        <form>
          <textarea
            name=""
            id=""
            placeholder="... اكتب ملحوظة هنا"
            onChange={(e) => setCommentCoupon(e.target.value)}
          ></textarea>
        </form>
        <div className={styles.tootleAll}>
          <h6>ج.م 6000 </h6>
          <h6>المجموع الفرعي</h6>
        </div>

        <div className={styles.tootleAll}>
          <h6>6000 ج.م</h6>
          <h6>المجموع الاجمالي</h6>
        </div>

        <p className={styles.inf}>الشحن والضرائب محسوبه عند الدفع</p>

        <div className={styles.btn_update_paying}>
          <button onClick={handelPaying}>الدفع</button>
          <button>تحديث السلة</button>
        </div>
      </div>
    </>
  );
};

export default Coupon;
