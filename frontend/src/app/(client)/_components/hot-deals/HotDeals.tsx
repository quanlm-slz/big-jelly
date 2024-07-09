'use client';

import { hotDeals } from "@/data/data";
import styles from "./hot-deals.module.scss";
import LinkDeal from "./link-deal/LinkDeal";
import { useState } from "react";

const HotDeals: React.FC = () => {
  const [carouselPos, setCarouselPos] = useState<number>(0);
  const [rotating, setRotating] = useState<boolean>(false);

  const carouselInfo = [hotDeals.at(-1), ...hotDeals, hotDeals.at(0)];
  const carouselCount = carouselInfo.length;
  const rotateForward = () => {
    if (rotating) return;
    setCarouselPos(prev => (prev + 1) % carouselCount);

    setRotating(true);
    setTimeout(() => setRotating(false), 500);
  }
  const rotateBackward = () => {
    if (rotating) return;
    setCarouselPos(prev => (prev - 1 + carouselCount) % carouselCount);

    setRotating(true);
    setTimeout(() => setRotating(false), 500);
  }
  return (
    <div className={styles.container}>
      <div className={styles.titleGroup}>
        <div className={styles.title}>
          <span>Món ngon Big Belly</span>
        </div>
        <div className={styles.subtitle}>
          <span>Sản Phẩm Bán Chạy</span>
        </div>
      </div>
      <div className={styles.sliderGroup}>
        <div className={styles.slider} onClick={rotateBackward}>
          <span>&lt;</span>
        </div>
        <div className={styles.slider} onClick={rotateForward}>
          <span>&gt;</span>
        </div>
      </div>
      <div className={styles.dealGroup}>
        {carouselInfo.map((hotLink, index) => (
          hotLink && <LinkDeal key={index} {...hotLink} carouselStyle={styles[`position${(index + carouselPos) % carouselCount}`]}/>
        ))}
      </div>
    </div>
  );
};

export default HotDeals;
