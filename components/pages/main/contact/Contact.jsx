import styles from "./Contact.module.scss";
import {MyButton} from "@/components";
import Map from "@/components/map/Map";

import LocationIcon from "./icons/location.svg";
import PhoneIcon from "./icons/phone.svg";
import EmailIcon from "./icons/email.svg";
import Link from "next/link";

const dataBase = [
    {
        label: "АДРЕС",
        title: "г. Шымкент БЦ “ЗАНГАР” офис 109",
        icon: <LocationIcon />,
        href: "https://goo.gl/maps/v2aDLhLmb8uf8N9DA"
    },
    {
        label: "ТЕЛЕФОН",
        title: "+7 (702) 434-31-91",
        icon: <PhoneIcon />,
        href: "tel:+77024343191"
    },
    {
        label: "эл. почта",
        title: "info@site.kz",
        icon: <EmailIcon />,
        href: "mailto:info@site.kz"
    }
]
const ContactScreen = () => {
    const list = dataBase.map(({label, title, href, icon}, i) => (
        <div key={i} className={styles.listItem}>
                <div className={styles.label}>{label}</div>
                <div>
                    <Link href={href}>
                        <div className={styles.block}>
                            <div className={styles.icon}>{icon}</div>
                            <div className={styles.title}>{title}</div>
                        </div>
                    </Link>
                </div>
        </div>
    ))
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.titleWrap}>
                        <h3 className={styles.blockTitle}>Контакты</h3>
                        <p className={styles.blockDescription}>адрес и телефон</p>
                    </div>
                    <div className={styles.descriptionWrap}>
                        <div className={styles.list}>
                            {list}
                            <div className={styles.btn}>
                                <MyButton
                                    title="Оставить заявку"
                                    background="secondary"
                                    round={true}
                                    uppercase={true}
                                    size="lg" />
                            </div>
                        </div>
                        <div className={styles.mapWrap}>
                            <Map />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactScreen;
