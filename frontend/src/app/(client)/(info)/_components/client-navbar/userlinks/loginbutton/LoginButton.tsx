"use client";
import { useState } from "react";
import styles from "./loginbutton.module.scss";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { logoutUser } from "@/lib/features/userSlice";
const LoginButton: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const userStatus = useAppSelector((state) => state.user.status);
  const token = useAppSelector((state) => state.user.token) as string;
  const dispatch = useAppDispatch();

  const logoutHandle = () => {
    setOpen(false);
    dispatch(logoutUser(token));
  }

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
          {userStatus === "loggedIn" ? (
            <MenuItem
              as={Link}
              href="/"
              className={styles.link}
              onClick={logoutHandle}
            >
              Đăng xuất
            </MenuItem>
          ) : (
            <>
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
            </>
          )}
        </MenuItems>
      )}
    </Menu>
  );
};

export default LoginButton;
