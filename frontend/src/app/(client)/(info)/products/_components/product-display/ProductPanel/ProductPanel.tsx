import { ProductInterface } from "@/utils/types";
import styles from "./product-panel.module.scss";
import Image from "next/image";
import { addToCart } from "@/lib/features/cartSlice";
import { renderPrice } from "@/lib/functions";
import { useAppDispatch } from "@/lib/hooks";

const ProductPanel: React.FC<{ products: ProductInterface[] }> = ({
  products,
}) => {
  const dispatch = useAppDispatch();

  const isPromoted = (product: ProductInterface) => {
    return product.promoted_price;
  };
  const handleOrder = (product: ProductInterface) => {
    dispatch(addToCart(product));
  };

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
                <span>{renderPrice(product.promoted_price || 0)}</span>
              </div>
            )}
            <div
              className={isPromoted(product) ? styles.original : styles.price}
            >
              <span>{renderPrice(product.price)}</span>
            </div>
            <div className={styles.button}>
              <button
                className={styles.button}
                onClick={() => handleOrder(product)}
              >
                Đặt món
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductPanel;
