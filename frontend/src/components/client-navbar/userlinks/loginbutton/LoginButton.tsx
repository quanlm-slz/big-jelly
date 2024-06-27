"use client";
import { useState } from "react";
import styles from "./loginbutton.module.scss";
const LoginButton: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={styles.container} onClick={() => setOpen((prev) => !prev)}>
      <div className={`${styles.line} ${open && styles.active}`} />
      <div className={`${styles.line} ${open && styles.active}`} />
      <div className={`${styles.line} ${open && styles.active}`}/>
    </div>
  );
};

export default LoginButton;
