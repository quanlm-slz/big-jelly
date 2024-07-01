import Link from "next/link";
import styles from "./client-footer.module.scss";
import Image from "next/image";
import { award } from "@/data/svg";

const ClientFooter: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerNav}>
        <div className={styles.info}>
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
        <div className={styles.support}>
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
        <div className={styles.guide}>
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
        <div className={styles.subscribe}>
          <div className={styles.title}>Đăng ký bản tin</div>
        </div>
      </div>
      <div className={styles.break} />
      <div className={styles.copyright}>
        <span>
          &copy; Bản quyền thuộc về <Link href="/">Big Belly</Link>
        </span>
      </div>
    </div>
  );
};

export default ClientFooter;
