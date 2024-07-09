import Link from "next/link";
import styles from "./navlink.module.scss";
import { usePathname } from "next/navigation";
import { navlinks } from "@/data/constants";

const NavLinks: React.FC = () => {
  const pathname = usePathname();
  return (
    <div className={styles.links}>
      { navlinks.map(({url, title}) => (
        <Link key={title} href={url} className={`${styles.link} ${pathname===url && 'text-primary'}`}>{title}</Link>
      ))}
    </div>
  );
};

export default NavLinks;
