import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import styles from "./product-display.module.scss";
import { filterTabs } from "@/data/constants";
import { Fragment } from "react";
import ProductPanel from "./ProductPanel/ProductPanel";
import { products } from "@/data/data";
import Cart from "../cart/Cart";

const ProductDisplay: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Chọn món ngay nào!</div>
      <TabGroup className={styles.tabGroup}>
        <TabList className={styles.tabList}>
          {filterTabs.map((filter) => (
            <Tab className={styles.tab} key={filter}>
              {filter}
            </Tab>
          ))}
        </TabList>
        <TabPanels className={styles.tabContainer}>
          {filterTabs.map((filter) => (
            <TabPanel as={Fragment} key={filter}>
              <ProductPanel products={products} />
            </TabPanel>
          ))}
          <Cart />
        </TabPanels>
      </TabGroup>
      <div className={styles.contact}>
        <div className={styles.message}>Đặt tại web hoặc liên hệ</div>
        <div className={styles.number}>0903 793 625</div>
      </div>
    </div>
  );
};

export default ProductDisplay;
