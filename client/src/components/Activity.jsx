import DetailActivity from "./DetailActivity";
import styles from "../styles/Activity.module.css";

const Activity = ({ id, name,difficulty, duration, season}) => {
    return (
        <div className={styles.container}>
            <section className={styles.activity}>
                <h2 className={styles.name} >{name}</h2>
                <h3 className={styles.value} >{difficulty}</h3>
                <h3 className={styles.value} >{duration}</h3>
                <h3 className={styles.value} >{season}</h3>
            </section>
            <section>
                <DetailActivity 
                id={id} 
                key={id} />
            </section>
        </div>
        
    )
}

export default Activity