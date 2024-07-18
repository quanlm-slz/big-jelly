"use client";
import Link from "next/link";
import styles from "./client-navbar.module.scss";
import NavLinks from "./navlinks/NavLink";
import UserLinks from "./userlinks/UserLinks";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store";
import { initializeClientStates } from "@/lib/features/appSlice";
import { initializeCart } from "@/lib/features/cartSlice";

const ClientNavbar: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(initializeClientStates());
    dispatch(initializeCart());
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={scrollY < 100 ? styles.container : styles.stickyContainer}>
      <Link href="/" className={styles.brand}>
        big jelly
      </Link>
      <NavLinks />
      <UserLinks />
    </div>
  );
};

export default ClientNavbar;
