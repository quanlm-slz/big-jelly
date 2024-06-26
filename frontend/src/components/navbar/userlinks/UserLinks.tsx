import { searchSvg, cartSvg } from "@/data/svg";
import Image from "next/image";
import styles from "./userlinks.module.css";

const UserLinks: React.FC = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.icon}
        src={searchSvg}
        alt="search"
        width="30"
        height="30"
      />
      <Image
        className={styles.icon}
        src={cartSvg}
        alt="cart"
        width="30"
        height="30"
      />
    </div>
  );
};

export default UserLinks;
