import { intro } from "@/data/data";
import styles from "./intro.module.scss";
import MainButton from "@/components/main-button/MainButton";

const Intro: React.FC = () => {
  const { title, subtitle, content } = intro;
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>{title}</span>
      </div>

      <div className={styles.subtitle}>
        <span>{subtitle}</span>
      </div>
      <div className={styles.content}>
        <span>{content}</span>
      </div>
      <div className={styles.buttonGroup}>
        <MainButton url="/" buttonStyle={styles.button}>
          <span>Xem Chi Tiết</span>
        </MainButton>
      </div>
    </div>
  );
};

export default Intro;
