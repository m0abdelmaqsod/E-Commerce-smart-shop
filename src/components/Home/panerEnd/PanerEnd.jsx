import React from 'react';
import styles from './styles/panerEnd.module.css'



import img1 from "../../../../public/images/panerEndHome/Frame 112.png";
import img2 from "../../../../public/images/panerEndHome/Frame 110.png";
import img3 from "../../../../public/images/panerEndHome/Frame 111.png";




const PanerEnd = () => {
    return (
        <>
            <div className={styles.panerEnd}>

                <div className={styles.div_paner}>
                    <img src={img1} alt="error in img" />
                    <div className={styles.desc}>
                        <h3>مع اجمل صيحات الموضه والفاشون</h3>
                        <p>اطلاله فريده مع افضل تشكيله ملابس شبابي</p>
                    </div>
                </div>


                <div className={styles.div_paner}>
                    <div className={styles.desc_center}>
                        <h3>أشتري الي يخليك شيك</h3>
                        <p>مع احدث واجمل ملابس الشباب الحديثه</p>
                    </div>
                    <img src={img2} alt="error in img" />
                </div>


                <div className={styles.div_paner}>
                    <img src={img3} alt="error in img" />
                    <div className={styles.desc}>
                        <h3>استمتعي باجواء مبهره في الخروجات</h3>
                        <p>مع باقه اجمل الملابس الكاجوال البناتي المودرن</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PanerEnd