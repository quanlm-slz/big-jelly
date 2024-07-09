import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import styles from "./product-display.module.scss";
import { filterTabs } from "@/data/constants";
import { hotDeals } from "@/data/data";
import { Fragment } from "react";
import ProductPanel from "./ProductPanel/ProductPanel";

const ProductDisplay: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Chọn món ngay nào!</div>
      <TabGroup className={styles.tabGroup}>
        <TabList className={styles.tabList}>
          {filterTabs.map((filter) => (
            <Tab className={styles.tab}>{filter}</Tab>
          ))}
        </TabList>
        <TabPanels className={styles.tabContainer}>
          <TabPanel as={Fragment}><ProductPanel /></TabPanel>
          <div className={styles.cart} />
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default ProductDisplay;