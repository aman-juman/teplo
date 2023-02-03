import styles from "./SliderBottomCardScreen.module.scss";
import Icon1 from "./icon1.svg";
import Icon2 from "./icon2.svg";

const dataBase = [
    {
        title: "По всему Казахстану",
        description: "Поный комплекс СМР по Инженерным сетям",
        icon: <Icon1/>
    },
    {
        title: "Собственное производство",
        description: "Успешно запущено более 100 модульных установок",
        icon: <Icon2 />
    }
]
const SliderBottomCardScreen = () => {
    const data = dataBase;
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.wrap}>
                    <div className={styles.content}>
                        {
                            data.map((item, i) => (
                                <Card key={i} item={item} />
                            ))
                        }
                    </div>
                </div>

            </div>
        </section>
    );
};

const Card = ({item}) => {
    const { icon, title, description } = item;
    return(
        <div className={styles.card}>
            <div className={styles.icon}>
                {icon}
            </div>
            <div className={styles.cardContent}>
                <p className={styles.cardContentDescription}>{description}</p>
                <h5 className={styles.cardContentTitle}>{title}</h5>
            </div>
        </div>
    )
}
export default SliderBottomCardScreen;
