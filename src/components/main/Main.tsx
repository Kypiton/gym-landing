import { FC } from 'react'
import styles from './Main.module.scss';

const Main: FC = () => {
    return (
        <section className={styles.main}>
            <h1 className={styles.text}>Free trial session<br /> with a trainer</h1>
            <button type="button" className={styles.btn}>Detailed</button>
        </section>
    )
}

export default Main;
