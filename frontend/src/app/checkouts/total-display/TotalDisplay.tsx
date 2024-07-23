"use client";

import { useAppSelector } from "@/lib/hooks";
import styles from "./total-display.module.scss";
import { CartEntry } from "@/utils/types";
import { useMemo } from "react";
import { sumBy } from "lodash";
import { renderPrice } from "@/lib/functions";

const TotalDisplay: React.FC = () => {
  const orders = useAppSelector((state) => state.cart.orders) as CartEntry[];
  const total = useMemo(
    () => sumBy(orders, (order) => order.amount * order.product.price),
    [orders],
  );

  return (
    <>
      <div className={styles.container}>
        <div className={styles.entry}>
          <span className={styles.title}>Tạm tính</span>
          <span className={styles.amount}>{renderPrice(total)}</span>
        </div>
        <div className={styles.entry}>
          <span className={styles.title}>Phí vận chuyển</span>
          <span className={styles.amount}>Miễn phí</span>
        </div>
      </div>
      <div className={styles.total}>
        <span className={styles.title}>Tổng cộng</span>
        <span className={styles.currency}>VND</span>
        <span className={styles.amount}>{renderPrice(total)}</span>
      </div>
    </>
  );
};

export default TotalDisplay;
