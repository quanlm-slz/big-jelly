import { searchSvg } from "@/data/svg";
import Image from "next/image";
import styles from "./userlinks.module.scss";
import LoginButton from "./loginbutton/LoginButton";
import Cart from "./cart/Cart";

const UserLinks: React.FC = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.icon}
        src={searchSvg}
        alt="search"
        width="24"
        height="24"
      />
      <Cart />
      <LoginButton />
    </div>
  );
};

export default UserLinks;
