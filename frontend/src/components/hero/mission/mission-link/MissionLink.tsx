import Image from "next/image";
import styles from "./mission-link.module.scss";
import { bread } from "@/data/svg";
import Link from "next/link";
import { MissionLinkInterface } from "@/utils/types";
const MissionLink: React.FC<MissionLinkInterface> = ({ url, label, icon }) => {
  return (
    <Link className={styles.container} href={url}>
      <div className={styles.icon}>
        <Image src={icon} alt={label} fill />
      </div>
      <div className={styles.label}>
        <span>{label}</span>
      </div>
    </Link>
  );
};

export default MissionLink;
