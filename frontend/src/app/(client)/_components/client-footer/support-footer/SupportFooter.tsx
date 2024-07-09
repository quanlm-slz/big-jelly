import Link from 'next/link';
import styles from './support-footer.module.scss'

const SupportFooter: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Hỗ trợ</div>
      <div className={styles.links}>
        <Link href="/" className={styles.link}>
          &rarr; Đặt hàng ngay
        </Link>
        <Link href="/" className={styles.link}>
          &rarr; Thông tin giao hàng
        </Link>
      </div>
    </div>
  );
};

export default SupportFooter;
