"use client";

import { DealLinkInterface } from "@/utils/types";
import styles from "./hot-link.module.scss";
import Image from "next/image";
import { useState } from "react";

const HotLink: React.FC<DealLinkInterface> = ({ title, price, image }) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      className={styles.container}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={styles.image}>
        <Image src={image} alt={title} fill />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        <div className={`${styles.midBreak} ${hover && styles.hover}`} />
        <div className={styles.link}>{price}</div>
      </div>
    </div>
  );
};

export default HotLink;
