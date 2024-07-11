import Image from "next/image";
import styles from "./cart.module.scss";
import { cartSvg } from "@/data/svg";

const Cart: React.FC = () => {
  return (
    <form className={styles.container}>
      <div className={styles.titleGroup}>
        <div className={styles.title}>Giỏ hàng</div>
        <div className={styles.icon}>
          <Image src={cartSvg} fill alt="shoping cart" />
        </div>
      </div>
      <div className={styles.orderList}>
        <div className={styles.noOrder}>Bạn chưa chọn món nào</div>
      </div>
      <div className={styles.totalGroup}>
        <div className={styles.title}>Tổng cộng</div>
        <div className={styles.total}>10.000đ</div>
      </div>
      <div className={styles.receiver}>
        <div className={styles.title}>Người nhận hàng là người khác?</div>
        <input type="checkbox" className={styles.checkbox} />
      </div>
      <textarea className={styles.note} placeholder="Ghi chú" rows={3} />
      <div className={styles.button}>
        <button type="submit">Đã ngưng nhận hàng hôm nay</button>
      </div>
    </form>
  );
};

export default Cart;
