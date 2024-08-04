"use client";
import { useState } from "react";
import styles from "./loginbutton.module.scss";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Link from "next/link";
const LoginButton: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Menu>
      <MenuButton
        className={styles.container}
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className={`${styles.line} ${open && styles.active}`} />
        <div className={`${styles.line} ${open && styles.active}`} />
        <div className={`${styles.line} ${open && styles.active}`} />
      </MenuButton>
      {open && (
        <MenuItems
          anchor="bottom end"
          className={styles.panel}
          modal={false}
          static={true}
        >
          <MenuItem
            as={Link}
            href="/account/register"
            className={styles.link}
            onClick={() => setOpen(false)}
          >
            Đăng ký
          </MenuItem>
          <MenuItem
            as={Link}
            href="/account/login"
            className={styles.link}
            onClick={() => setOpen(false)}
          >
            Đăng nhập
          </MenuItem>
        </MenuItems>
      )}
    </Menu>
  );
};

export default LoginButton;
