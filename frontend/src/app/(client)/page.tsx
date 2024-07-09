import { Hero, HotDeals, HotNews, InfoCollectForm } from './_components';
import styles from './home.module.scss'
import { Slideshow } from '@/components';

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Slideshow withButton/>
      <Hero />
      <HotDeals />
      <HotNews />
      <InfoCollectForm />
    </div>
  );
};

export default HomePage;
