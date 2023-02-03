import styles from "./ServicesScreen.module.scss";
import Image from "next/image";
import {MyButton} from "@/components";

import img1 from "./images/service1.jpg";
const ServicesScreen = () => {
    return (
        <section>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.titleWrap}>
                        <h3 className={styles.blockTitle}>Услуги</h3>
                        <p className={styles.blockDescription}>которые мы оказываем</p>
                    </div>
                    <div className={styles.list}>
                        <div className={styles.listItem}>
                            <div className={styles.listItemTop}>
                                <div className={styles.imgBlock}>
                                    <div className={styles.imgBlockCube}></div>
                                    <div className={styles.img}>
                                        <Image alt="" width={250} height={200} src={img1}/>
                                    </div>
                                </div>
                                <div className={styles.priceBlock}>
                                    <h5 className={styles.price}>Цена договорная</h5>
                                    <MyButton title="Заказать"/>
                                </div>
                            </div>
                            <div className={styles.listItemBottom}>
                                <div className={styles.listItemTitleBlock}>
                                    <h5 className={styles.listItemTitle}>Проектирование</h5>
                                </div>
                                <div className={styles.listItemDescription}>
                                    Любое современное здание будет безжизненным без обеспечения его инженерными
                                    системами.
                                </div>
                            </div>
                        </div>
                        <div className={styles.listItem}>
                            <div className={styles.listItemTop}>
                                <div className={styles.imgBlock}>
                                    <div className={styles.imgBlockCube}></div>
                                    <div className={styles.img}>
                                        <Image alt="" width={250} height={200} src={img1}/>
                                    </div>
                                </div>
                                <div className={styles.priceBlock}>
                                    <h5 className={styles.price}>Цена договорная</h5>
                                    <MyButton title="Заказать"/>
                                </div>
                            </div>
                            <div className={styles.listItemBottom}>
                                <div className={styles.listItemTitleBlock}>
                                    <h5 className={styles.listItemTitle}>Проектирование</h5>
                                </div>
                                <div className={styles.listItemDescription}>
                                    Любое современное здание будет безжизненным без обеспечения его инженерными
                                    системами.
                                </div>
                            </div>
                        </div>
                        <div className={styles.listItem}>
                            <div className={styles.listItemTop}>
                                <div className={styles.imgBlock}>
                                    <div className={styles.imgBlockCube}></div>
                                    <div className={styles.img}>
                                        <Image alt="" width={250} height={200} src={img1}/>
                                    </div>
                                </div>
                                <div className={styles.priceBlock}>
                                    <h5 className={styles.price}>Цена договорная</h5>
                                    <MyButton title="Заказать"/>
                                </div>
                            </div>
                            <div className={styles.listItemBottom}>
                                <div className={styles.listItemTitleBlock}>
                                    <h5 className={styles.listItemTitle}>Проектирование</h5>
                                </div>
                                <div className={styles.listItemDescription}>
                                    Любое современное здание будет безжизненным без обеспечения его инженерными
                                    системами.
                                </div>
                            </div>
                        </div>
                        <div className={styles.listItem}>
                            <div className={styles.listItemTop}>
                                <div className={styles.imgBlock}>
                                    <div className={styles.imgBlockCube}></div>
                                    <div className={styles.img}>
                                        <Image alt="" width={250} height={200} src={img1}/>
                                    </div>
                                </div>
                                <div className={styles.priceBlock}>
                                    <h5 className={styles.price}>Цена договорная</h5>
                                    <MyButton title="Заказать"/>
                                </div>
                            </div>
                            <div className={styles.listItemBottom}>
                                <div className={styles.listItemTitleBlock}>
                                    <h5 className={styles.listItemTitle}>Проектирование</h5>
                                </div>
                                <div className={styles.listItemDescription}>
                                    Любое современное здание будет безжизненным без обеспечения его инженерными
                                    системами.
                                </div>
                            </div>
                        </div>
                        <div className={styles.listItem}>
                            <div className={styles.listItemTop}>
                                <div className={styles.imgBlock}>
                                    <div className={styles.imgBlockCube}></div>
                                    <div className={styles.img}>
                                        <Image alt="" width={250} height={200} src={img1}/>
                                    </div>
                                </div>
                                <div className={styles.priceBlock}>
                                    <h5 className={styles.price}>Цена договорная</h5>
                                    <MyButton title="Заказать"/>
                                </div>
                            </div>
                            <div className={styles.listItemBottom}>
                                <div className={styles.listItemTitleBlock}>
                                    <h5 className={styles.listItemTitle}>Проектирование</h5>
                                </div>
                                <div className={styles.listItemDescription}>
                                    Любое современное здание будет безжизненным без обеспечения его инженерными
                                    системами.
                                </div>
                            </div>
                        </div>
                        <div className={styles.listItem}>
                            <div className={styles.listItemTop}>
                                <div className={styles.imgBlock}>
                                    <div className={styles.imgBlockCube}></div>
                                    <div className={styles.img}>
                                        <Image alt="" width={250} height={200} src={img1}/>
                                    </div>
                                </div>
                                <div className={styles.priceBlock}>
                                    <h5 className={styles.price}>Цена договорная</h5>
                                    <MyButton title="Заказать"/>
                                </div>
                            </div>
                            <div className={styles.listItemBottom}>
                                <div className={styles.listItemTitleBlock}>
                                    <h5 className={styles.listItemTitle}>Проектирование</h5>
                                </div>
                                <div className={styles.listItemDescription}>
                                    Любое современное здание будет безжизненным без обеспечения его инженерными
                                    системами.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesScreen;
