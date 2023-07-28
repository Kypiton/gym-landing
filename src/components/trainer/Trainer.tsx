import { FC } from 'react'
import styles from './Trainer.module.scss';
import { trainers } from '../../mock/data';
import TrainerItem from '../trainerItem/TrainerItem';

const Trainer: FC = () => {
    return (
        <section className={styles.trainer} id='Trainers'>
            <h2 className={styles.text}>Trainers staff</h2>
            <div className={styles.cards}>
                {trainers.map(trainer => {
                    return <TrainerItem key={trainer.id} {...trainer} />
                })}
            </div>
        </section>
    )
}

export default Trainer;
