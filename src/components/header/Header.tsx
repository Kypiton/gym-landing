import { FC } from 'react';
import styles from './Header.module.scss';
import smoothScroll from '../../tsFiles/scroll';

const Header: FC = () => {
    const handleSmoothScroll = (event: any, target: string) => {
        event.preventDefault();
        smoothScroll(target);
    }

    return (
        <header className={styles.navbar}>
            <div className={styles.logo}>
                <span className={styles.gym}>GYM</span><span className={styles.g24}>24</span>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li className={styles.navlist}><a href="/#" onClick={(e) => handleSmoothScroll(e, '#advantage')}>Advantages</a></li>
                    <li className={styles.navlist}><a href="/#" onClick={(e) => handleSmoothScroll(e, '#membership')}>Membership</a></li>
                    <li className={styles.navlist}><a href="/#" onClick={(e) => handleSmoothScroll(e, '#about')}>About</a></li>
                    <li className={styles.navlist}><a href="/#" onClick={(e) => handleSmoothScroll(e, '#trainer')}>Trainers</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
