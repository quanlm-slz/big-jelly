"use client";

import { AppDispatch, RootState } from "@/lib/store";
import { Hero, HotDeals, HotNews, InfoCollectForm } from "./_components";
import styles from "./home.module.scss";
import { Slideshow } from "@/components";
import { useDispatch, useSelector } from "react-redux";
import { getVisited } from "@/lib/features/appSlice";
import { useEffect } from "react";

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const firstVisit = useSelector<RootState>((state) => state.app.firstVisit);

  useEffect(() => {
    dispatch(getVisited(window.localStorage.getItem("visited")));
  }, []);


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
