import { ourStory1, ourStory2 } from '@/data/image';
import styles from './hero.module.scss';
import Image from 'next/image';
import Intro from './intro/Intro';

const Hero: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <Image className={styles.image} src={ourStory1} alt="our-story-1" fill />
      </div>
      <Intro />
      <div className={styles.mission}></div>
      <div>
        <Image className={styles.image} src={ourStory2} alt="our-story-2" fill />
      </div>
    </div>
  )
}

export default Hero
