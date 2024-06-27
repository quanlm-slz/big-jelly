import { mission } from "@/data/data";
import styles from "./mission.module.scss";

const Mission: React.FC = () => {
  const { title, content } = mission;
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>{title}</span>
      </div>
      <div className={styles.content}>
        <span>{content}</span>
      </div>
    </div>
  );
};

export default Mission;
