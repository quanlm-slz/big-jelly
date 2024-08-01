"use client";
import { Fragment, useState } from "react";
import styles from "./loginbutton.module.scss";
import {
  CloseButton,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import Link from "next/link";
const LoginButton: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Popover as={Fragment}>
      <PopoverButton
        className={styles.container}
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className={`${styles.line} ${open && styles.active}`} />
        <div className={`${styles.line} ${open && styles.active}`} />
        <div className={`${styles.line} ${open && styles.active}`} />
      </PopoverButton>
      <PopoverPanel anchor="bottom end" className={styles.panel}>
        <CloseButton as={Link} href="/account/register" className={styles.link}>
          Đăng ký
        </CloseButton>
        <CloseButton as={Link} href="/" className={styles.link}>
          Đăng nhập
        </CloseButton>
      </PopoverPanel>
    </Popover>
  );
};

export default LoginButton;
