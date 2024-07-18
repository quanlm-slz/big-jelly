"use client";

import { RootState } from "@/lib/store";
import { Hero, HotDeals, HotNews, InfoCollectForm } from "./_components";
import styles from "./home.module.scss";
import { Slideshow } from "@/components";
import { useSelector } from "react-redux";

const HomePage: React.FC = () => {
  const firstVisit = useSelector<RootState>((state) => state.app.firstVisit);
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
