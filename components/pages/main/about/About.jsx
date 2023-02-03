import styles from "./About.module.scss";
import Image from "next/image";
import img from "./about.jpg";
import Icon1 from "./icons/icon1.svg";
import Icon2 from "./icons/icon2.svg";
import Icon3 from "./icons/icon3.svg";
import { MyButton } from "@/components";
import Link from "next/link";

const dataBase = {
  title: "О нас",
  subTitle: "О нашей компании",
  description:
    "Начиная с 2015 года и активно работает на рынке Казахстана в области инженерных систем отопления, вентиляции, кондиционирования, охлаждения, водоснабжения и канализации, автоматизации и диспетчеризации. ",
  list: [
    {
      title: "СМР 1",
      description: "категорий",
      icon: <Icon1 />,
    },
    {
      title: "Высококлассифированные",
      description: "специалисты",
      icon: <Icon2 />,
    },
    {
      title: "10 лет",
      description: "на рынке",
      icon: <Icon3 />,
    },
  ],
};
const About = () => {
  const data = dataBase;
  const list = data.list.map((item, i) => {
    const { title, description, icon } = item;
    return (
      <div key={i} className={styles.listItem}>
        {icon}
        <div className={styles.listItemContent}>
          <div className={styles.listItemTitle}>{title}</div>
          <div className={styles.listItemDescription}>{description}</div>
        </div>
      </div>
    );
  });
  return (
    <section>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.imgBlock}>
            <Image src={img} />
            <div className={styles.imgBlockBottom}>
              <div className={styles.experience}>
                <h5 className={styles.experienceYear}>10</h5>
                <p className={styles.experienceText}>ГОДА ОПЫТА</p>
              </div>
            </div>
          </div>
          <div className={styles.contentBlock}>
            <div className={styles.top}>
              <div className={styles.listWrap}>
                <div className={styles.list}>{list}</div>
              </div>
            </div>
            <div className={styles.center}>
              <div className={styles.centerBg}></div>
              <div className={styles.centerContent}>
                <h5 className={styles.centerSubTitle}>{data.subTitle}</h5>
                <h3 className={styles.centerTitle}>{data.title}</h3>
              </div>
            </div>
            <div className={styles.bottom}>
              <p className={styles.description}>{data.description}</p>
              <Link href={`https://wa.me/77024343191?text=Меня%20интересует%20`}>
                <MyButton title="подробнее" uppercase={true} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
