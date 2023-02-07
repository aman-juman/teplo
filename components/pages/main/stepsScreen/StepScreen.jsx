import styles from "./StepScreen.module.scss";
import Step1Icon from "./icons/step1.svg";
import Step2Icon from "./icons/step2.svg";
import Step3Icon from "./icons/step3.svg";
import Step4Icon from "./icons/step4.svg";
import { MyButton } from "@/components";

const data = [
  {
    title: "Заявка",
    description:
      "Вы оставляете заявку у Нас на сайте, либо же связываетесь любым удобным для Вас способом",
    icon: <Step1Icon />,
  },
  {
    title: "Расчет стоимости",
    description: "Мы составляем договор и производим предварительный расчет",
    icon: <Step2Icon />,
  },
  {
    title: "Проведение",
    description: "Мы производим все оговоренные по контракту работы",
    icon: <Step3Icon />,
  },
  {
    title: "Оплата услуг",
    description: "Вы производите оплату по договору любым удобным способом",
    icon: <Step4Icon />,
  },
];
const StepScreen = () => {
  const list = data.map(({ icon, title, description }, i) => {
    return (
      <div key={i} className={styles.listItem}>
        <div className={styles.top}>
          <div className={styles.icon}>{icon}</div>
          <div className={styles.arrowsWrap}>
            <div className={styles.arrows}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className={styles.center}>
          <h5 className={styles.title}>
            <span>{`0${i + 1}.`}</span>
            {title}
          </h5>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.arrows}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    );
  });
  return (
    <section>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.titleWrap}>
            <h3 className={styles.blockTitle}>Этапы работ</h3>
            <p className={styles.blockDescription}>
              <span className={styles.blue}>4</span>ВЕРНЫХ шага к{" "}
              <span className={styles.blue}>достижению цели</span>
            </p>
          </div>
          <div className={styles.list}>{list}</div>
          <div className={styles.button}>
            <MyButton
                title="Получить консультацию бесплатно"
                background="secondary"
                round={true}
                size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Step = ({ item }) => {
  const { icon, title, description } = item;
};

export default StepScreen;
