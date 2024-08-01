"use client";
import Image from "next/image";
import styles from "./news-link.module.scss";
import { HotNewsInterface } from "@/utils/types";
import Link from "next/link";
import { useState } from "react";

const NewsLink: React.FC<HotNewsInterface> = ({ image, title, date }) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      className={styles.container}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={styles.image}>
        <Image src={image} alt={title} fill className={`${hover && styles.hover}`}/>
      </div>
      <div className={styles.titleGroup}>
        <div className={styles.date}>{date}</div>
        <div className={styles.title}>{title}</div>
        <Link href="/" className={styles.link}>
          Xem thêm &rarr;
        </Link>
      </div>
    </div>
  );
};

export default NewsLink;
