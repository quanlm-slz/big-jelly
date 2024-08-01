import { CartEntry } from "@/utils/types";
import styles from "./entry.module.scss";
import { renderPrice } from "@/lib/functions";
import Image from "next/image";
import { minusCircle, plusCircle } from "@/data/svg";
import { useAppDispatch } from "@/lib/hooks";
import { addToCart, removeFromCart } from "@/lib/features/cartSlice";

const Entry: React.FC<{ entry: CartEntry }> = ({ entry }) => {
  const totalPrice = entry.product.price * entry.amount;
  const dispatch = useAppDispatch();
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.titleGroup}>
          <div className={styles.title}>
            <span>{entry.product.title}</span>
          </div>
          <div className={styles.note}>
            <span>{entry.product.note || ""}</span>
          </div>
        </div>
        <div className={styles.price}>
          <span>{renderPrice(totalPrice)}</span>
        </div>
      </div>
      <div className={styles.quantityGroup}>
        <button
          type="button"
          className={styles.button}
          onClick={() => dispatch(addToCart(entry.product))}
        >
          <Image src={plusCircle} alt="+" fill />
        </button>
        <div className={styles.quantity}>
          <span>{entry.amount}</span>
        </div>
        <button
          type="button"
          className={styles.button}
          onClick={() => dispatch(removeFromCart(entry.product))}
        >
          <Image src={minusCircle} alt="-" fill />
        </button>
      </div>
    </div>
  );
};

export default Entry;
