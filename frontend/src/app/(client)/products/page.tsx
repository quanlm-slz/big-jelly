import styles from "./products.module.scss";
import { ProductDisplay, SearchBar } from "./_components";
import { Slideshow } from "@/components";
import { getProducts } from "@/queries/productRequests";
import { ProductFilterInterface } from "@/utils/types";

const ProductsPage: React.FC<{ searchParams: ProductFilterInterface }> = async ({ searchParams }) => {
  const data = await getProducts(searchParams);
  const activeFilter = searchParams.filter;
  return (
    <div className={styles.container}>
      <Slideshow />
      <SearchBar />
      <ProductDisplay data={data} activeFilter={searchParams.filter || ''}/>
    </div>
  );
};

export default ProductsPage;
