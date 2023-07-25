import { FC, useRef } from "react";
import AdvItem from "../advItem/AdvItem";
import styles from './Advantages.module.scss';
import { reasons } from '../../mock/data';

const Advantages: FC = () => {
    const advantages = useRef(null);
    return (
        <section className={styles.advantages} id='advantage'>
            <h2 ref={advantages} className={styles.text}>Reasons to join</h2>
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
