import Link from "next/link";
import styles from "./checkouts.module.scss";
import DeliveryInfoForm from "./delivery-info-form/DeliveryInfoForm";
import OrdersDisplay from "./orders-display/OrdersDisplay";
import CouponApplyForm from "./coupon-apply-form/CouponApplyForm";
import TotalDisplay from "./total-display/TotalDisplay";
import { Suspense } from "react";

const Checkouts: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.info}>
          <div className={styles.brand}>Big Belly</div>
          <div className={styles.steps}>
            <div className={styles.cart}>
              <Link href="/products">Giỏ hàng</Link>
            </div>
            <div className={styles.seperator}>&gt;</div>
            <div className={styles.data}>Thông tin giao hàng</div>
          </div>
          <div className={styles.title}>Thông tin giao hàng</div>
          <div className={styles.login}>
            Bạn đã có tài khoản? <Link href="/">Đăng nhập</Link>
          </div>
          <Suspense>
            <DeliveryInfoForm />
          </Suspense>
        </div>
        <div className={styles.footer}>Powered by Haravan</div>
      </div>
      <div className={styles.summary}>
        <OrdersDisplay />
        <CouponApplyForm />
        <TotalDisplay />
      </div>
    </div>
  );
};

export default Checkouts;
