import Link from "next/link";
import styles from "./client-footer.module.scss";
import InfoFooter from "./info-footer/InfoFooter";
import SupportFooter from "./support-footer/SupportFooter";
import GuideFooter from "./guide-footer/GuideFooter";
import SubFooter from "./sub-footer/SubFooter";

const ClientFooter: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerNav}>
        <InfoFooter />
        <SupportFooter />
        <GuideFooter />
        <SubFooter />
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
