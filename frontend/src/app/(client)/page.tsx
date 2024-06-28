import Image from 'next/image';
import styles from './home.module.scss'
import Hero from '@/components/hero/Hero';
import { mainSlideshow } from '@/data/image';
import MainButton from '@/components/main-button/MainButton';
import HotDeals from '@/components/hot-deal/HotDeals';

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.slideshow}>
        <Image src={mainSlideshow} alt="slideshow" fill />
        <MainButton url="/products" buttonStyle={styles.slideShowButton}>
          <span>Xem chi tiết</span>
        </MainButton>
      </div>
      <Hero />
      <HotDeals />
    </div>
  );
};

export default HomePage;
