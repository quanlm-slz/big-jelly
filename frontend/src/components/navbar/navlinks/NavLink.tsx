import styles from "./navlink.module.css";

const NavLinks: React.FC = () => {
  return (
    <div className={styles.links}>
      <div className={styles.link}>Trang chủ</div>
      <div className={styles.link}>Sản phẩm</div>
      <div className={styles.link}>Thông tin ưu đãi</div>
      <div className={styles.link}>Tin tức</div>
      <div className={styles.link}>Thông tin cửa hàng</div>
      <div className={styles.link}>Thông tin liên hệ</div>
    </div>
  );
};

export default NavLinks;
