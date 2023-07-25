import { FC } from 'react';
import About from '../about/About';
import Advantages from '../advantages/Advantages';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Main from '../main/Main';
import Membership from '../membership/Membership';
import Trainer from '../trainer/Trainer';
import styles from './App.module.scss';

const App: FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
      <Advantages />
      <Membership />
      <About />
      <Trainer />
      <Footer />
    </div>
  );
}

export default App;
