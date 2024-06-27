import Image from 'next/image';
import styles from './home.module.scss'
import Link from 'next/link';
import Hero from '@/components/hero/Hero';
import { mainSlideshow } from '@/data/image';
import MainButton from '@/components/main-button/MainButton';

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
    </div>
  );
};

export default HomePage;
