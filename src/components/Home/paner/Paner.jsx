import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/paner.module.css'



import imgPanner1 from "../../../../public/images/paner (2) 1.png";
import imgPanner2 from "../../../../public/images/paner(1) 1.png";



const Paner = () => {
    return (
        <>
            <div className={styles.paner}>
                <div className={styles.all_paner}>

                    <div className={styles.dev_paner1}>
                        <div className={styles.desc}>
                            <p>خصم كبير</p>
                            <h3>فساتين بناتي</h3>
                            <div className={styles.lin}>
                                <Link to='/Products'>تسوق الان</Link>
                            </div>
                        </div>

                        <div className={styles.img_paner}>
                            <img src={imgPanner1} alt="" />
                        </div>
                    </div>




                    <div className={styles.dev_paner2}>
                        <div className={styles.desc}>
                            <h3>ملابس الاطفال</h3>
                            <p>%خصم 50</p>
                            <div className={styles.lin}>
                                <Link to='/Products'>تسوق الان</Link>
                            </div>
                        </div>

                        <div className={styles.img_paner}>
                            <img src={imgPanner2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Paner