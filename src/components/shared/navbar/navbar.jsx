import React, { useState } from "react";
import styles from "./styles/navbar.module.css";
import { NavLink, Link } from "react-router-dom";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { LuSearch } from "react-icons/lu";
import { CgMenuRight } from "react-icons/cg";
import NavCart from "./cart/NavCart";
import User from "./user/User";



// ===== Redux ===== //
import { useSelector } from "react-redux";



import imgLogo from "../../../../public/images/logo.png";



const Navbar = () => {

  // ===>>  number quantity cart
  const totalQuantity = useSelector(state => state.cart.totalQuantity);



  const [isOpen, setIsOpen] = useState(false); /// ===>>  search
  const [isShow, setIsShow] = useState(false); /// ===>>  navCart
  const [isShowUser, setIsShowUser] = useState(false); /// ===>>  user
  const [isOpenToogle, setIsOpenToogle] = useState(false); /// ===>>  toggle nav

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
  const handlerToogleResponsive = () => {
    setIsOpenToogle((prev) => !prev);
  };



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
              <span>{totalQuantity}</span>
            </button>
            {isShow && (
              <NavCart
                show={isShow}
                setShow={setIsShow}
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
              <Link to="/">
                <img src={imgLogo} alt="" />
              </Link>
            </div>

            <div className={styles.toogle_responsiv}>
              <button onClick={handlerToogleResponsive}>
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
