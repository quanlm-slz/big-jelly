import { mission, missionLinks } from "@/data/data";
import styles from "./mission.module.scss";
import MissionLink from "./mission-link/MissionLink";
import MainButton from "@/components/main-button/MainButton";

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
      <div className={styles.links}>
        {missionLinks.map((link, id) => (
          <MissionLink key={id} {...link} />
        ))}
      </div>
      <div className={styles.buttonGroup}>
        <MainButton url="/" buttonStyle={styles.button}>
          <span>Đặt Giao Ngay</span>
        </MainButton>
      </div>
    </div>
  );
};

export default Mission;
