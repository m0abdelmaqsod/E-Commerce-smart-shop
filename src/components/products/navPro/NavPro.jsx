import React from "react";
import styles from "./styles/NavPro.module.css";
import { HiOutlineSquares2X2 } from "react-icons/hi2";

const NavPro = ({
  setWatchPro,
  watchPro,
  isActive,
  setIsActive,
  setSortItem,
}) => {
  const onChangeHandler = (e) => {
    setSortItem(e.target.value);
    // console.log(typeof setSortItem);
    // console.log((setSortItem = e.target.value));
  };

  // console.log();

  // === handler Active Big And Small === //
  const handlerActiveBig = () => {
    setIsActive(true);
  };
  const handlerActiveSmall = () => {
    setIsActive(false);
  };

  return (
    <>
      <div className={styles.navPro}>
        <div className={styles.filter_price}>
          <form>
            <select onChange={onChangeHandler} name="filterPrice" id="filterPrice">
              <option value="default">إفتراضي</option>
              <option value="low">الأقل سعر</option>
              <option value="high">الأعلي سعر</option>
            </select>
            <label htmlFor="filterPrice">ترتيب حسب</label>
          </form>
        </div>

        <div className={styles.filter_number}>
          <div className={styles.div_filNum}>

            <button
              onClick={() => setWatchPro(30)} className={watchPro == 30 ? styles.active : ""}>
              30
            </button>

            <button onClick={() => setWatchPro(24)} className={watchPro == 24 ? styles.active : ""}>
              24
            </button>

            <button onClick={() => setWatchPro(18)} className={watchPro == 18 ? styles.active : ""}>
              18
            </button>

            <button onClick={() => setWatchPro(12)} className={watchPro == 12 ? styles.active : ""}>
              12
            </button>

            <button onClick={() => setWatchPro(9)} className={watchPro == 9 ? styles.active : ""}>
              9
            </button>
          </div>
          <h6>مشاهدة</h6>
        </div>

        <div className={styles.filter_all_div}>
          <button onClick={handlerActiveSmall} className={isActive == true ? styles.icon_filBig : styles.btnActiveIcon}>
            <span></span>
            <span></span>
          </button>
          <button onClick={handlerActiveBig} className={isActive == false ? styles.icon_filSmall : styles.btnActiveIcon} >
            <HiOutlineSquares2X2 />
          </button>
          <h6>عرض</h6>
        </div>
      </div>
    </>
  );
};

export default NavPro;
