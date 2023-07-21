import { IMemberItem } from "../../types/memberItemType";
import styles from './MemberItem.module.scss';

const MemberItem = ({ header, dollars, info }: IMemberItem): JSX.Element => {
    return (
        <div className={styles.card}>
            <div className={styles.descr}>
                <p className={styles.pass}>{header}</p>
                <p className={styles.dollas}>$ {dollars}</p>
            </div>
            <div className={styles.line}></div>
            <div className={styles.member}>
                <ul>
                    {info.map((item, i) => {
                        return <li key={i} className={styles.info}><span>{item}</span></li>
                    })}
                </ul>
                <button type="button" className={styles.btn}>Buy</button>
            </div>
        </div>
    )
}

export default MemberItem;
