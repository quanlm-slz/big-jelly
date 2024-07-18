"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import styles from "./product-display.module.scss";
import { filterTabs } from "@/data/constants";
import ProductPanel from "./ProductPanel/ProductPanel";
import Cart from "../cart/Cart";
import { ProductInterface } from "@/utils/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ExpandButton from "./ExpandButton/ExpandButton";

const ProductDisplay: React.FC<{
  data: ProductInterface[];
  activeFilter: string;
}> = ({ data, activeFilter }) => {
  const router = useRouter();
  const [displayRows, setDisplayRows] = useState(3);
  const totalDisplay = displayRows * 4;

  const activeFilterIndex =
    activeFilter
      ? filterTabs.findIndex(({ value }) => value == activeFilter)
      : 0;

  const appendFilter = (filter: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    filter ? searchParams.set("filter", filter) : searchParams.delete("filter");

    router.push(`${window.location.pathname}?${searchParams}`, {
      scroll: false,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Chọn món ngay nào!</div>
      <TabGroup className={styles.tabGroup} selectedIndex={activeFilterIndex}>
        <TabList className={styles.tabList}>
          {filterTabs.map(({ label, value }) => (
            <Tab
              className={styles.tab}
              key={label}
              onClick={() => appendFilter(value)}
            >
              {label}
            </Tab>
          ))}
        </TabList>
        <TabPanels className={styles.tabContainer}>
          <div className={styles.productsContainer}>
            <ProductPanel products={data.slice(0, totalDisplay)} />
            { totalDisplay < data.length && <ExpandButton handleClick={ ()=> setDisplayRows(prev => prev + 3) }/> }
          </div>
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
