import Link from 'next/link';
import styles from './info-footer.module.scss'
import Image from 'next/image';
import { award } from '@/data/svg';

const InfoFooter: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Thông tin</div>
      <div className={styles.brand}>
        <span>big jelly</span>
      </div>
      <div className={styles.address}>
        CÔNG TY TNHH BIG BELLY
        <br />
        Số 20-20B Trần Cao Vân, phường Đa Kao, quận 1, TP.HCM
        <br />
        Giấy chứng nhận đăng ký kinh doan số 0316814767 do Sở
        <br />
        Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp lần đầu vào
        <br />
        ngày 19 tháng 04 năm 2021
        <br />
        ĐT: 0903 793 625
        <br />
        Email: support@bigbelly.vn
      </div>
      <Link href="/" className={styles.certificate}>
        <Image src={award} alt="certificate" fill />
      </Link>
    </div>
  );
};

export default InfoFooter;
