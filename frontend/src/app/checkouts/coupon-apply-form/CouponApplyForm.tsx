"use client"

import styles from "./coupon-apply-form.module.scss";
import handler from "@/handlers/CouponFormHandler";

const CouponApplyForm: React.FC = () => {
  return (
    <form className={styles.container} onSubmit={handler}>
      <input type="text" placeholder="Mã giảm giá" name="code" className={styles.input} />
      <button className={styles.submit}>Sử dụng</button>
    </form>
  );
};

export default CouponApplyForm;
