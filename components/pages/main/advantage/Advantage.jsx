import styles from "./Advantage.module.scss";
import {MyButton} from "@/components";
import Link from "next/link";

import Icon1 from "./icons/icon01.svg";
import Icon2 from "./icons/icon2.svg";
import Icon3 from "./icons/icon03.svg";
import Icon4 from "./icons/icon4.svg";

const dataBase = [
    {
        title: "24/7",
        description: "СЛУЖБА ПОДДЕРЖКИ",
        icon: <Icon1 />
    },
    {
        title: "ОПЫТНЫЕ",
        description: "И НЕЗАВИСИМЫЕ СОТРУДНИКИ",
        icon: <Icon2 />
    },
    {
        title: "ДОСТУПНАЯ",
        description: "ЦЕНОВАЯ ПОЛИТИКА",
        icon: <Icon3 />
    },
    {
        title: "КОМПЛЕКСНАЯ",
        description: "ЗАЩИТА В ЛЮБЫХ СИТУАЦИЯХ",
        icon: <Icon4 />
    }
]
const Advantage = () => {
    const list = dataBase.map(({title, description, icon}, i) => (
        <div
            className={styles.listItem}
            key={i}>
            <div className={styles.icon}>{icon}</div>
            <div className={styles.listItemContent}>
                <span className={styles.listItemTitle}>{title}</span>
                <span className={styles.listItemDescription}>{description}</span>
            </div>
        </div>
    ))
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.top}>
                        <div className={styles.titleWrap}>
                            <p className={styles.subTitle}>НАМ МОЖНО ДОВЕРЯТЬ</p>
                            <h5 className={styles.title}>НАШИ ПРЕИМУЩЕСТВА</h5>
                        </div>
                        <div className={styles.list}>
                            {list}
                        </div>

                    </div>
                    <div className={styles.bottom}>
                        <Link href="/">
                            <MyButton
                            title="Скачать прайс-лист"
                            background="primary"
                            round={true}
                            size="lg"
                            uppercase={true}
                        />
                        </Link>
                        <div className={styles.bottomDescription}>
                            При переходе по кнопке Вы сможете узнать больше о всех наших услугах
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advantage;
