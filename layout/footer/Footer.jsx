import styles from "./Footer.module.scss";
// import Logo from "../../public/logo.svg";
import Icon1 from "./icons/google.svg";
import Icon2 from "./icons/whatsapp.svg";
import Icon3 from "./icons/telegram.svg";
import Icon4 from "./icons/instagram1.svg";
import Link from "next/link";


const Footer = () => {
    return (
        <footer id="contacts" className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.left}>
                        <div className={styles.desc}>
                            <h6>Наш адрес:</h6>
                            <p>г.Шымкент, БЦ "Зангар" офис 109</p>
                        </div>
                        <div className={styles.desc}>
                            <h6>Телефоны:</h6>
                            <p>+7 (702) 434-31-91</p>
                        </div>
                    </div>
                    <div className={styles.center}>
                        <Link href="/">
                        LOGO
                        {/*<Logo/>*/}
                        </Link>
                    </div>

                    <div className={styles.right}>
                        <a style={{
                            cursor: "pointer",
                            color: "#0FB8EE",
                            fontSize: "14px",
                            textDecoration: "underline",
                            fontWeight: "bold"
                        }} href="https://wa.me/77064107828?text=Я%20хочу%20Заказать%20сайт">Разработка сайта</a>
                        <p>Наши социальные сети</p>
                        <div className={styles.socials}>
                            <a href="https://goo.gl/maps/v2aDLhLmb8uf8N9DA"> <Icon1/></a>
                            <a href="https://wa.me/77024343191?text=Меня%20интересует"><Icon2/></a>
                            <a href="https://wa.me/77024343191?text=Меня%20интересует"><Icon3/></a>
                            <a href=""> <Icon4/></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
