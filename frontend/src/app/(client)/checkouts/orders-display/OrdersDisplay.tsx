"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import styles from "./orders-display.module.scss";
import { CartEntry } from "@/utils/types";
import Image from "next/image";
import { renderPrice } from "@/lib/functions";
import { useEffect } from "react";
import { initializeClientStates } from "@/lib/features/appSlice";
import { initializeCart } from "@/lib/features/cartSlice";

const OrdersDisplay: React.FC = () => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector((state) => state.cart.orders) as CartEntry[];

  useEffect(() => {
    dispatch(initializeClientStates());
    dispatch(initializeCart());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      {orders.map((order, index) => (
        <div className={styles.entry} key={index}>
          <div className={styles.img}>
            <Image src={order.product.image} alt={order.product.title} fill />
            <div className={styles.amount}>
              <span>{order.amount}</span>
            </div>
          </div>
          <div className={styles.textGroup}>
            <div className={styles.title}>{order.product.title}</div>
            <div className={styles.note}>{order.product.note}</div>
          </div>
          <div className={styles.price}>
            <span>{renderPrice(order.product.price * order.amount)}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrdersDisplay;
