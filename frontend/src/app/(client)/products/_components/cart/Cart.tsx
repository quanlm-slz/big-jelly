"use client";

import Image from "next/image";
import styles from "./cart.module.scss";
import { cartSvg } from "@/data/svg";
import { useAppSelector } from "@/lib/hooks";
import { CartEntry } from "@/utils/types";
import Entry from "./entry/Entry";
import { useRouter } from "next/navigation";

const Cart: React.FC = () => {
  const router = useRouter();
  const cart = useAppSelector((state) => state.cart.orders) as CartEntry[];
  return (
    <div className={styles.container}>
      <div className={styles.titleGroup}>
        <div className={styles.title}>Giỏ hàng</div>
        <div className={styles.icon}>
          <Image src={cartSvg} fill alt="shoping cart" />
        </div>
      </div>
      <div className={styles.orderList}>
        {cart.length <= 0 ? (
          <div className={styles.noOrder}>Bạn chưa chọn món nào</div>
        ) : (
          cart.map((entry, index) => <Entry key={index} entry={entry} />)
        )}
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
        <button type="button" onClick={() => router.push("/checkouts")}>
          Thanh toán
        </button>
      </div>
    </div>
  );
};

export default Cart;
