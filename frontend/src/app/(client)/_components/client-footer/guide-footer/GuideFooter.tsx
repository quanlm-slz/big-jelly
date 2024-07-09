import Link from "next/link";
import styles from "./guide-footer.module.scss";

const GuideFooter: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Hướng dẫn</div>
      <div className={styles.links}>
        <Link href="/" className={styles.link}>
          &rarr; Chính sách đổi trả
        </Link>
        <Link href="/" className={styles.link}>
          &rarr; Chính sách bảo mật
        </Link>
        <Link href="/" className={styles.link}>
          &rarr; Điều khoản dịch vụ
        </Link>
        <Link href="/" className={styles.link}>
          &rarr; Tìm kiếm
        </Link>
      </div>
    </div>
  );
};

export default GuideFooter;
