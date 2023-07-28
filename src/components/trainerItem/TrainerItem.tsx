import styles from './TrainerItem.module.scss';
import { ITrainerType } from '../../types/trainerType';

const TrainerItem = ({ icons, image, name }: ITrainerType): JSX.Element => {
    return (
        <div className={styles.trainerCard}>
            <div>
                <img src={image} alt="" className={styles.trainer__img}/>
            </div>
            <p className={styles.trainer__name}>{name}</p>
            <div className={styles.social__networks}>
                {icons.map(icon => {
                    return <a key={icon} href="/#"><img src={icon} alt=""/></a>
                })}
            </div>
        </div>
    )
}

export default TrainerItem;
