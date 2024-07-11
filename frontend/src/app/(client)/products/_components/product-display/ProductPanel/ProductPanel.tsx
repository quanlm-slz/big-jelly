import { DealLinkInterface } from "@/utils/types";
import styles from "./product-panel.module.scss";
import Image from "next/image";

const ProductPanel: React.FC<{ products: DealLinkInterface[] }> = ({
  products,
}) => {
  return (
    <div className={styles.container}>
      {products.map((product) => (
        <div className={styles.product} key={product.title}>
          <div className={styles.image}>
            <Image src={product.image} fill alt={product.title} />
          </div>
          <div className={styles.title}>{product.title}</div>
          <div className={styles.addToCart}>
            <div className={styles.price}>
              <span>{product.price}</span>
            </div>
            <div className={styles.discounted}></div>
            <div className={styles.button}>
              <button className={styles.button}>Đặt món</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductPanel;
