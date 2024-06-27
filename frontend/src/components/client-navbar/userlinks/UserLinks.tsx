import { searchSvg, cartSvg } from "@/data/svg";
import Image from "next/image";
import styles from "./userlinks.module.css";
import LoginButton from "./loginbutton/LoginButton";

const UserLinks: React.FC = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.icon}
        src={searchSvg}
        alt="search"
        width="20"
        height="20"
      />
      <Image
        className={styles.icon}
        src={cartSvg}
        alt="cart"
        width="20"
        height="20"
      />
      <LoginButton />
    </div>
  );
};

export default UserLinks;
