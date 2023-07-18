import { FC } from 'react';
import Advantages from '../advantages/Advantages';
import Header from '../header/Header';
import Main from '../main/Main';
import styles from './App.module.scss';

const App: FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
      <Advantages />
    </div>
  );
}

export default App;
