import Link from "next/link";
import styles from "./navlink.module.scss";

const NavLinks: React.FC = () => {
  return (
    <div className={styles.links}>
      <Link href="/" className={styles.link}>Trang chủ</Link>
      <Link href="/products" className={styles.link}>Sản phẩm</Link>
      <Link href="/promotions" className={styles.link}>Thông tin ưu đãi</Link>
      <Link href="/news" className={styles.link}>Tin tức</Link>
      <Link href="/locations" className={styles.link}>Thông tin cửa hàng</Link>
      <Link href="/contacts" className={styles.link}>Thông tin liên hệ</Link>
    </div>
  );
};

export default NavLinks;
