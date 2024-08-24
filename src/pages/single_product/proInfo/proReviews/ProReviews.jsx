import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from '../../styles/singlePro.module.css';
import { AiTwotoneStar } from "react-icons/ai";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// ===== Redux ===== //
import { dataComments } from "../../../../redux/store/products/apiPro";
import { useDispatch, useSelector } from "react-redux";



import imgUser from "../../../../../public/images/singlePro/Ellipse 190.png";




const ProReviews = () => {


    const dispatch = useDispatch()
    const { commitUser } = useSelector(state => state.product);

    const data = [...commitUser]


    // === handle State comment === //
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setEvaluation] = useState("");
    const [title, setTitle] = useState("");
    const [accept, setAccept] = useState(false);


    
    // === handle falter comment_length_all === //
    const [comLength, setComLength] = useState(4);
    const [comLen, setComLen] = useState(false);

    const comment_length = data.slice(0, comLength)


    // === handle submit comment === //
    const handleSubmit = async (e) => {
        e.preventDefault();
        let userData = { name, email, comment, title };
        // console.log(userData);
        let checkData = true;
        setAccept(true);

        if (comment === "" || title === "") {
            checkData = false;
        } else checkData = true;

        try {
            if (checkData) {
                let res = axios.post("http://localhost:8000/comments", userData)
                    .then((res) => toast.success('تم تقييم المنتج'))
                    .catch((error) => toast.error(error.message));
            }
        } catch (error) {
            console.log(error);
        }
    };

    // === handle fetch comments === //
    useEffect(() => {
        dispatch(dataComments())
    }, [])


    return (
        <>
            <div className={styles.comment}>
                <form action="">
                    <h3>اضف تقييم</h3>
                    <div className={styles.evaluation}>
                        <div className={styles.assess}>
                            <button className={styles.star}>
                                <AiTwotoneStar />
                            </button>
                            <button>
                                <AiTwotoneStar />
                            </button>
                            <button>
                                <AiTwotoneStar />
                            </button>
                            <button>
                                <AiTwotoneStar />
                            </button>
                            <button>
                                <AiTwotoneStar />
                            </button>
                        </div>
                        <h6>تقييمك</h6>
                    </div>

                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="عنوان التقييم"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                    {
                        title === "" && accept && (
                            <p className={styles.errorMassing}>
                                ادخل عنوان التقييم <span>!</span>
                            </p>
                        )
                    }

                    <textarea
                        name="comment"
                        id="comment"
                        placeholder="اكتب تقييم هنا"
                        value={comment}
                        onChange={(e) => setEvaluation(e.target.value)}
                    ></textarea>

                    {
                        comment === "" && accept && (
                            <p className={styles.errorMassing}>
                                ادخل نص التقييم <span>!</span>
                            </p>
                        )
                    }

                    <div className={styles.name_email}>
                        <input
                            type="email"
                            name="email"
                            placeholder="بريدك الالكتروني"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {
                            email === "" && accept && (
                                <p className={styles.errorMassing}>
                                    ادخل بريدك الالكتروني <span>!</span>
                                </p>
                            )
                        }

                        <input
                            type="name"
                            name="name"
                            placeholder="اسمك"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {
                            name === "" && accept && (
                                <p className={styles.errorMassing}>
                                    ادخل اسمك <span>!</span>
                                </p>
                            )
                        }
                    </div>

                    <button
                        className={styles.btn_addComment}
                        onClick={handleSubmit}
                    >
                        اضف الان
                    </button>
                </form>

                <div className={styles.comAll}>
                    <h3> {data.length} التقييمات</h3>

                    {
                        comment_length.map((com, index) => (
                            <div key={index} className={styles.com}>
                                <div className={styles.infoCom}>
                                    <h3>{com.title}</h3>
                                    <p className={styles.desc_com}>
                                        {com.comment}
                                    </p>

                                    <div className={styles.assess}>
                                        <button className={styles.star}>
                                            <AiTwotoneStar />
                                        </button>
                                        <button>
                                            <AiTwotoneStar />
                                        </button>
                                        <button>
                                            <AiTwotoneStar />
                                        </button>
                                        <button>
                                            <AiTwotoneStar />
                                        </button>
                                        <button>
                                            <AiTwotoneStar />
                                        </button>
                                    </div>

                                    <div className={styles.name_dt}>
                                        <p>9 اغسطس, 2022 </p>
                                        <p>احمد بلال</p>
                                    </div>
                                </div>
                                <div className={styles.div_img}>
                                    <img
                                        src={imgUser}
                                        alt=""
                                    />
                                </div>
                            </div>
                        ))
                    }

                    <div className={styles.comment_length_all}>
                        {
                            data.length <= 4 ? "" : comLen === false
                                ? <p onClick={() => {
                                    setComLen(true)
                                    setComLength(data.length)
                                }}>عرض جميع التقييمات</p>

                                : <p onClick={() => {
                                    setComLen(false)
                                    setComLength(4)
                                }}>عرض تقييمات اقل</p>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProReviews