import styles from "./hot-deals.module.scss";

const HotDeals: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleGroup}>
        <div className={styles.title}>
          <span>Món ngon Big Belly</span>
        </div>
        <div className={styles.subtitle}>
          <span>Sản Phẩm Bán Chạy</span>
        </div>
      </div>
      <div className={styles.dealGroup}>DealGroup</div>
    </div>
  );
};

export default HotDeals;
