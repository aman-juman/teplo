import styles from "./ServicesScreen.module.scss";
import Image from "next/image";
import {MyButton} from "@/components";

import img1 from "./images/service1.jpg";
import {collection, getDocs} from "firebase/firestore";
import {database} from "@/lib/firbase";
import {useEffect, useState} from "react";
const ServicesScreen = () => {
    const [data, setData] = useState([]);
    useEffect(() =>{
        getData();
    },[]);
    const dbInstance = collection(database, "services");
    const getData = () => {
        getDocs(dbInstance).then(data => data.docs.map(item => setData(prev => [...prev, {...item.data(), id: item.id}])));
    }


    const content = data.map(({ title, description, downloadUrl }, i) => (
      <div key={i} className={styles.listItem}>
        <div className={styles.listItemTop}>
          <div className={styles.imgBlock}>
            <div className={styles.imgBlockCube}></div>
            <div className={styles.img}>
              {/*<Image alt={title} width={250} height={200} src={downloadUrl} />*/}
                <img src={downloadUrl} style={{width: "250px", height: "200px"}} alt=""/>
            </div>
          </div>
          <div className={styles.priceBlock}>
            <h5 className={styles.price}>Цена договорная</h5>
            <MyButton title="Заказать" />
          </div>
        </div>
        <div className={styles.listItemBottom}>
          <div className={styles.listItemTitleBlock}>
            <h5 className={styles.listItemTitle}>{title}</h5>
          </div>
          <div className={styles.listItemDescription} dangerouslySetInnerHTML={{ __html: description}} />
        </div>
      </div>
    ));

    return (
        <section>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.titleWrap}>
                        <h3 className={styles.blockTitle}>Услуги</h3>
                        <p className={styles.blockDescription}>которые мы оказываем</p>
                    </div>
                    <div className={styles.list}>
                        {content}
                        {/*<div className={styles.listItem}>*/}
                        {/*    <div className={styles.listItemTop}>*/}
                        {/*        <div className={styles.imgBlock}>*/}
                        {/*            <div className={styles.imgBlockCube}></div>*/}
                        {/*            <div className={styles.img}>*/}
                        {/*                <Image alt="" width={250} height={200} src={img1}/>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className={styles.priceBlock}>*/}
                        {/*            <h5 className={styles.price}>Цена договорная</h5>*/}
                        {/*            <MyButton title="Заказать"/>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className={styles.listItemBottom}>*/}
                        {/*        <div className={styles.listItemTitleBlock}>*/}
                        {/*            <h5 className={styles.listItemTitle}>Проектирование</h5>*/}
                        {/*        </div>*/}
                        {/*        <div className={styles.listItemDescription}>*/}
                        {/*            Любое современное здание будет безжизненным без обеспечения его инженерными*/}
                        {/*            системами.*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesScreen;
