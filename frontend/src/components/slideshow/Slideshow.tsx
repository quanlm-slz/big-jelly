import { mainSlideshow } from "@/data/image";
import styles from "./slideshow.module.scss";
import Image from "next/image";
import MainButton from "../main-button/MainButton";

const Slideshow: React.FC<{ withButton?: boolean }> = ({ withButton = false }) => {
  return (
    <div className={styles.container}>
      <Image src={mainSlideshow} alt="slideshow" fill />
      {withButton && (
        <MainButton url="/products" buttonStyle={styles.slideShowButton}>
          <span>Xem chi tiết</span>
        </MainButton>
      )}
    </div>
  );
};

export default Slideshow;
