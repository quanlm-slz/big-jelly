import styles from "./products.module.scss";
import { ProductDisplay, SearchBar } from "./_components";
import { Slideshow } from "@/components";

const ProductsPage: React.FC = () => {
  return (
      <div className={styles.container}>
        <Slideshow />
        <SearchBar />
        <ProductDisplay />
      </div>
  );
};

export default ProductsPage;
