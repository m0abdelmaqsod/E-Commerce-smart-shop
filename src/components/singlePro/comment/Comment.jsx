import React, { useState, useEffect } from "react";
import { AiTwotoneStar } from "react-icons/ai";
import styles from "./styles/comment.module.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Comment = () => {
  const [data, setData] = useState([]);
  // === handle State comment === //
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setEvaluation] = useState("");
  const [title, setTitle] = useState("");
  const [accept, setAccept] = useState(false);
  const [watchPro, setWatchPro] = useState(4);
  const [viewCom, setViewCom] = useState(false);

  // === handle submit comment === //
  const handleSubmit = (e) => {
    e.preventDefault();
    let userData = { name, email, comment, title };
    let checkData = true;
    setAccept(true);
    if (name === "" || email === "" || comment === "" || title === "") {
      checkData = false;
    } else checkData = true;
    if (checkData) {
      axios
        .post("http://localhost:8000/comment", userData)
        .then((res) => {
          toast.success("تم تقييم المنتج بنجاح");
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/comment")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, [data]);

  let len = data.length;
  
  const watchProductsNum = watchPro === 4 ? data.slice(0, 4) : data;
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

          {/* === start of input from comment */}
          <input
            type="text"
            name="title"
            id="title"
            placeholder="عنوان التقييم"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {title === "" && accept && (
            <p className={styles.errorMassing}>
              عنوان التقييم مطلوب<span>!</span>
            </p>
          )}

          <textarea
            name="comment"
            id="comment"
            placeholder="اكتب تقييم هنا"
            value={comment}
            onChange={(e) => setEvaluation(e.target.value)}
          ></textarea>
          {comment === "" && accept && (
            <p className={styles.errorMassing}>
              التقييم مطلوب<span>!</span>
            </p>
          )}
          <div className={styles.name_email}>
            <input
              type="email"
              name="email"
              placeholder="بريدك الالكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="name"
              name="name"
              placeholder="اسمك"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* === div error Massing  name & email === */}
          <div className={styles.div_errorMassing}>
            {email === "" && accept && (
              <p className={styles.errorMassing}>
                البريد الالكتروني مطلوب<span>!</span>
              </p>
            )}
            {name === "" && accept && (
              <p className={styles.errorMassing}>
                اسم المستخدم مطلوب<span>!</span>
              </p>
            )}
          </div>
          <button className={styles.btn_addComment} onClick={handleSubmit}>
            اضف الان
          </button>
        </form>

        <div className={styles.comAll}>
          <h3> {len} تقييمات</h3>
          <div className={styles.comScroll}>
            {watchProductsNum.map((comm, index) => (
              <div key={index} className={styles.com}>
                <div className={styles.infoCom}>
                  <h3>{comm.title}</h3>
                  <p className={styles.desc_com}>{comm.comment} </p>

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
                    <p>{comm.name}</p>
                  </div>
                </div>
                <div className={styles.div_img}>
                  <img
                    src={require("../../../assets/images/home/singlePro/Ellipse 190.png")}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
          {data.length > 4 && (
            <div>
              <button
                className={
                  viewCom === false
                    ? styles.ViewMoreComments
                    : styles.ViewComments
                }
                onClick={() => {
                  setWatchPro(len);
                  setViewCom(true);
                }}
              >
                عرض مزيد من التعليقات
              </button>
              <button
                className={
                  viewCom === true
                    ? styles.ShowLessComments
                    : styles.ViewComments
                }
                onClick={() => {
                  setWatchPro(4);
                  setViewCom(false);
                }}
              >
                عرض تعليقات اقل
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Comment;
