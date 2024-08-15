import React, { useState, useEffect } from "react";
import styles from "./styles/navbar.module.css";
import { NavLink } from "react-router-dom";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { LuSearch } from "react-icons/lu";
import { CgMenuRight } from "react-icons/cg";
import NavCart from "./cart/NavCart";
import User from "./user/User";
import axios from "axios";








const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); /// ===>>  search
  const [isShow, setIsShow] = useState(false); /// ===>>  navCart
  const [isShowUser, setIsShowUser] = useState(false); /// ===>>  user
  const [isOpenToogle, setIsOpenToogle] = useState(false); /// ===>>  toggle nav
  const [namCar, setNamCar] = useState(0); /// ===>>  nam cerate cart
  // console.log(setNamCar);

  // handler Open And Close Menue search
  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };

  // handler Open And Close Menue User
  const handlerOpenAndCloseMenueUser = () => {
    setIsShowUser((prev) => !prev);
  };

  // handler Toogle Responsiv
  const handlerToogleResponsiv = () => {
    setIsOpenToogle((prev) => !prev);
  };

  // const [data, setData] = useState(); /// ===>>  user
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/cart")
  //     .then((res) => setData(res.data))
  //     .catch((error) => console.log(error));
  // }, []);

  // const totalPro = data.length;
  // console.log(totalPro);

  // const result = axios.get("http://localhost:8000/cart")
  // console.log(result.data);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.nav}>
          <div className={styles.icons_nav}>
            <button
              onClick={() => setIsShow(true)}
              className={styles.namber_cart}
            >
              <FiShoppingCart />
              <span>{namCar}</span>
            </button>
            {isShow && (
              <NavCart
                show={isShow}
                setShow={setIsShow}
                setNamCar={setNamCar}
              />
            )}

            <button>
              <FiHeart />
            </button>

            <button onClick={() => handlerOpenAndCloseMenueUser()}>
              <BiUser />
            </button>

            {isShowUser && (
              <User showUser={isShowUser} setShowUser={setIsShowUser} />
            )}

            <button onClick={() => open()}>
              <LuSearch />
            </button>
          </div>

          <div className={styles.pages_and_logo}>
            <ul
              className={
                isOpenToogle == false
                  ? styles.link_pages
                  : styles.close_link_pages
              }
            >
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.activeNav : ""
                  }
                  onClick={() => setIsOpenToogle(false)}
                  to="/dd"
                >
                  اتصل بنا
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.activeNav : ""
                  }
                  onClick={() => setIsOpenToogle(false)}
                  to="/dd"
                >
                  المدونة
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.activeNav : ""
                  }
                  onClick={() => setIsOpenToogle(false)}
                  to="/dd"
                >
                  الشروط والاحكام
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.activeNav : ""
                  }
                  onClick={() => setIsOpenToogle(false)}
                  to="/dd"
                >
                  نبذة عنا
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.activeNav : ""
                  }
                  onClick={() => setIsOpenToogle(false)}
                  to="/Cart"
                >
                  السلة
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.activeNav : ""
                  }
                  onClick={() => setIsOpenToogle(false)}
                  to="/Products"
                >
                  المنتجات
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.activeNav : ""
                  }
                  onClick={() => setIsOpenToogle(false)}
                  to="/"
                >
                  الرئيسية
                </NavLink>
              </li>
            </ul>

            <div className={styles.logo}>
              <img
                src="../../../../public/images/logo.png"
                alt=""
              />
            </div>

            <div className={styles.toogle_responsiv}>
              <button onClick={handlerToogleResponsiv}>
                <CgMenuRight />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* start of search */}
      <div className={isOpen == false ? styles.search : styles.closeSearch}>
        <button onClick={close}>X</button>
        <div className={styles.que_and_form}>
          <p>عن ماذا تبحث ؟</p>
          <form>
            <label htmlFor="">
              <LuSearch />
            </label>
            <input type="search" placeholder=".....اكتب كلمة للبحث" />
          </form>
        </div>
      </div>
      {/* end of search */}
    </>
  );
};

export default Navbar;
