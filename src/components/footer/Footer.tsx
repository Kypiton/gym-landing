import { FC } from 'react'
import styles from './Footer.module.scss';
import { icons } from '../../mock/data';

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__first}>
                <div className={styles.gymIcon}>
                    <span className={styles.gym}>GYM</span><span className={styles.g24}>24</span>
                </div>
                <p className={styles.gymText}>Build strength and confidence at our gym with state-of-the-art equipment, personalized training, and a motivating community</p>
            </div>
            <div className={styles.footer__second}>
                <p className={styles.topText}>Address</p>
                <p>
                Republic of Belarus
                <br/>
                Minsk city
                <br/>
                Dzerzhinsky Avenue 15
                </p>
            </div>
            <div className={styles.footer__third}>
                <p className={styles.topText}>Contact</p>
                <div className={styles.contacts}>
                    <div className={styles.phone}>
                        <img src={process.env.PUBLIC_URL + '/assets/images/icon_call.svg'} alt="call"/>
                        <a className={styles.footer__contacts} href="tel:+375(44)-777-24-12">+375(44)-777-24-12</a>
                    </div>
                    <div className={styles.email}>
                        <img src={process.env.PUBLIC_URL + '/assets/images/icon_email.svg'} alt="call"/>
                        <a className={styles.footer__contacts} href="mailto:gym24@gmail.com">gym24@gmail.com</a>
                    </div>
                </div>
                <div className={styles.social__networks}>
                    {icons.map(icon => {
                        return (
                            <div key={icon}>
                                <img src={icon} alt="instagram_icon"/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </footer>
    )
}

export default Footer;
