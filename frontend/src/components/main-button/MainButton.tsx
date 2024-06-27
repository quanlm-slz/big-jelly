import { MainButtonInterface } from "@/utils/types";
import Link from "next/link";
import styles from "./main-button.module.scss";
import { PropsWithChildren } from "react";

const MainButton: React.FC<PropsWithChildren<MainButtonInterface>> = ({ url, buttonStyle, children }) => {
  return (
    <Link href={url} className={`${styles.button} ${buttonStyle}`}>
      {children}
    </Link>
  );
};

export default MainButton;
