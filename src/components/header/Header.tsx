import { FC } from 'react';
import styles from './Header.module.scss';
import smoothScroll from '../../tsFiles/scroll';
import { navNames } from '../../mock/data';

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
                    {navNames.map(navName => {
                        return <li 
                            className={styles.navlist}
                            onClick={(e) => handleSmoothScroll(e, `#${navName}`)}
                            key={navName}>{navName}</li>
                    })}
                </ul>
                <i className={styles.burger}></i>
            </nav>
        </header>
    )
}

export default Header;
