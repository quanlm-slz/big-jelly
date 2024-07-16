import { DealLinkInterface } from "@/utils/types";
import styles from "./product-panel.module.scss";
import Image from "next/image";

const ProductPanel: React.FC<{ products: DealLinkInterface[] }> = ({
  products,
}) => {
  const isPromoted = (product: DealLinkInterface) => {
    return product.promoted_price
  }
  return (
    <div className={styles.container}>
      {products.map((product, index) => (
        <div className={styles.product} key={index}>
          <div className={styles.image}>
            <Image src={product.image} fill alt={product.title} />
          </div>
          <div className={styles.title}>{product.title}</div>
          <div className={styles.addToCart}>
            {isPromoted(product) && (
              <div className={styles.price}>
                <span>{product.promoted_price}</span>
              </div>
            )}
            <div className={isPromoted(product) ? styles.original : styles.price}>
              <span>{product.price}</span>
            </div>
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
