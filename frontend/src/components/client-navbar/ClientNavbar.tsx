import Link from "next/link";
import styles from "./client-navbar.module.css";
import NavLinks from "./navlinks/NavLink";
import UserLinks from "./userlinks/UserLinks";

const ClientNavbar: React.FC = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.brand}>big jelly</Link>
      <NavLinks />
      <UserLinks />
    </div>
  );
};

export default ClientNavbar;
