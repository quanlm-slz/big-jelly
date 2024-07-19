"use client";

import { Hero, HotDeals, HotNews, InfoCollectForm } from "./_components";
import styles from "./home.module.scss";
import { Slideshow } from "@/components";
import { useAppSelector } from "@/lib/hooks";

const HomePage: React.FC = () => {
  const firstVisit = useAppSelector((state) => state.app.firstVisit);
  return (
    <div className={styles.container}>
      <Slideshow withButton />
      <Hero />
      <HotDeals />
      <HotNews />
      {!firstVisit ? <InfoCollectForm /> : <></>}
    </div>
  );
};

export default HomePage;
