import { FC } from "react";
import MemberItem from "../memberItem/MemberItem";
import styles from './Membership.module.scss';
import { membership } from '../../mock/data';

const Membership: FC = () => {
    return (
        <section className={styles.membership} id='Membership'>
            <h2 className={styles.text}>Gym membership</h2>
            <div className={styles.cards}>
                {membership.map(item => {
                    return <MemberItem key={item.id} {...item}  />
                })}
            </div>
        </section>
    )
}

export default Membership;
