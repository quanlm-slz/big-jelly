"use client";

import { CarouselInterface, ProductInterface } from "@/utils/types";
import styles from "./link-deal.module.scss";
import Image from "next/image";
import { useState } from "react";
import { renderPrice } from "@/lib/functions";

const LinkDeal: React.FC<ProductInterface & CarouselInterface> = ({ title, image, price, carouselStyle }) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <div
      className={`${styles.container} ${hover && styles.hover} ${carouselStyle}`}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={styles.image}>
        <Image src={image} alt={title} fill />
      </div>

      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        <div className={`${styles.break} ${hover && styles.hover}`} />
        <div className={styles.price}>{renderPrice(price)}</div>
      </div>
    </div>
  );
};

export default LinkDeal;
