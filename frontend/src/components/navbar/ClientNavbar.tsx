import styles from "./client-navbar.module.css";
import NavLinks from "./navlinks/NavLink";
import UserLinks from "./userlinks/UserLinks";

const ClientNavbar: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.brand}>big jelly</div>
      <NavLinks />
      <UserLinks />
    </div>
  );
};

export default ClientNavbar;
