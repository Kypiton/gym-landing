import styles from './AdvItem.module.scss';
import { IAdvItem } from '../../types/advItemType';

const AdvItem = ({ img, maintext, description }: IAdvItem): JSX.Element => {
    return (
        <div className={styles.item}>
            <div className={styles.icon}>
                <img src={img} alt={maintext} />
            </div>
            <div className={styles.text}>
                <p className={styles.maintext}>{maintext}</p>
                <span className={styles.description}>{description}</span>
            </div>
        </div>
    )
}

export default AdvItem;
