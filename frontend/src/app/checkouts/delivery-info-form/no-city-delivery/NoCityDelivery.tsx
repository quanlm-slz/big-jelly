import Image from "next/image";
import styles from "./no-city-delivery.module.scss";
import { shipping } from "@/data/svg";

const NoCityDelivery: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Image src={shipping} alt="shipping" fill />
      </div>
      <div className={styles.notice}>
        Vui lòng chọn tình/thành để có danh sách phương thức vận chuyển.
      </div>
    </div>
  );
};

export default NoCityDelivery;
