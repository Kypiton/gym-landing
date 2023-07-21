import { FC } from "react";
import AdvItem from "../advItem/AdvItem";
import styles from './Advantages.module.scss';
import { reasons } from '../../mock/data';

const Advantages: FC = () => {
    return (
        <section className={styles.advantages}>
            <h2 className={styles.text}>Reasons to join</h2>
            <div className={styles.reasons}>
                <ul>
                    {reasons.map(item => {
                        return (
                            <li key={item.id}>
                                <AdvItem
                                    {...item}
                                />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Advantages;
