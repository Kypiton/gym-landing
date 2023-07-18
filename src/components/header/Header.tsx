import { FC } from 'react';
import styles from './Header.module.scss';

const Header: FC = () => {
    return (
        <header className={styles.navbar}>
            <div className={styles.logo}>
                <span className={styles.gym}>GYM</span><span className={styles.g24}>24</span>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li className={styles.navlist}><a href="/#">Advantages</a></li>
                    <li className={styles.navlist}><a href="/#">Membership</a></li>
                    <li className={styles.navlist}><a href="/#">About</a></li>
                    <li className={styles.navlist}><a href="/#">Trainers</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
