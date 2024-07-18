import { CartEntry } from "@/utils/types";
import styles from "./entry.module.scss";
import Image from "next/image";
import { renderPrice } from "@/lib/functions";
import { closeButton } from "@/data/svg";

const Entry: React.FC<{ entry: CartEntry }> = ({ entry }) => {
  const { product, amount } = entry;
  const totalPrice = amount * product.price;

  const handleRemove = () => {};
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={product.image} alt={product.title} fill />
      </div>
      <div className={styles.info}>
        <div className={styles.product}>{product.title}</div>
        <div className={styles.note}></div>
        <div className={styles.price}>Giá: {renderPrice(totalPrice)}</div>
        <div className={styles.amount}>Số lượng: {amount}</div>
      </div>
      <div className={styles.closeButton} onClick={handleRemove}>
        <Image src={closeButton} alt="close" fill />
      </div>
    </div>
  );
};

export default Entry;
