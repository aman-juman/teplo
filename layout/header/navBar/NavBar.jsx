import styles from "./NavBar.module.scss";
import Link from "next/link";

const dataBase = [
  {
    title: "Главная",
    slug: "/",
    href: "/",
  },
  {
    title: "О нас",
    slug: "about",
    href: "/about",
  },
  {
    title: "Наши услуги",
    slug: "services",
    href: "/services",
  },
  {
    title: "Проекты",
    slug: "portfolio",
    href: "/portfolio",
  },
  {
    title: "Оборудование",
    slug: "devices",
    href: "/devices",
  },
  {
    title: "Контакты",
    slug: "contacts",
    href: "/contacts",
  },
];
const NavBar = () => {
  const menu = dataBase.map(({ title, href }, i) => (
    <li key={i} className={styles.menuItem}>
      <Link href={href}>{title}</Link>
    </li>
  ));
  return <ul className={styles.nav}>{menu}</ul>;
};

export default NavBar;
