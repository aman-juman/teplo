import styles from "./Header.module.scss";
import Link from "next/link";
import LocationIcon from "./icons/location.svg";
import PriceListIcon from "./icons/priceList.svg";
import EmailIcon from "./icons/email.svg";
import PhoneIcon from "./icons/phone.svg";
import NavBar from "@/layout/header/navBar/NavBar";
import {MyButton} from "@/components";

const dataBase = [
    {
        icon: <LocationIcon/>,
        title: 'г. Шымкент, БЦ “Зангар”',
        description: 'Адрес офиса:',
        href: 'https://goo.gl/maps/Y7h5QiSQBRynMBUg8'
    },
    {
        icon: <PriceListIcon/>,
        title: 'Прайс лист',
        description: 'Скачать',
        href: '#'
    },
    {
        icon: <EmailIcon/>,
        title: 'info@site.kz',
        description: 'Напишите на почту',
        href: 'mailto:info@site.kz'
    },
    {
        icon: <PhoneIcon/>,
        title: '+7 (702) 434-31-91',
        description: 'Звоните с 9:00 до 18:00',
        href: 'tel:+77024343191'
    },
]
const Header = () => {
    const links = dataBase.map((item, i) => <Item key={i} item={item} i={i}/>)
  return (
    <header className={`container ${styles.header}`}>
        <div className={styles.topBar}>
            <div className={styles.logo}>LOGO</div>
            <div className={styles.links}>
                {links}
            </div>
        </div>
        <nav className={styles.navBar}>
            <NavBar />
            <MyButton title="заказать звонок" background="primary" uppercase={true} size="lg"/>
        </nav>
    </header>
  );
};

const Item = ({item, i}) =>{
    const {icon, title, description, href} = item;
    return(
        <Link href={href}>
            <div className={styles.linkItem}>
                <div style={i ===0 ? {background:"none", marginRight: "0"} :null} className={styles.icon}>
                    {icon}
                </div>
                <div className={styles.text}>
                    <span className={styles.description}>{description}</span>
                    <span className={styles.title}>{title}</span>
                </div>
            </div>
        </Link>
    )
}

export default Header;
