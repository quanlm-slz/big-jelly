import Image from "next/image";
import styles from "./cart.module.scss";
import { basketSvg } from "@/data/svg";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { CartEntry } from "@/utils/types";
import { useMemo, useRef, useState } from "react";
import { sumBy } from "lodash";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Entry from "./entry/Entry";
import { useRouter } from "next/navigation";

const Cart: React.FC = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const btnRef = useRef<HTMLButtonElement>(null);
    const router = useRouter();

  const handleHover = () => {
    !isOpen && btnRef!.current!.click();
    setIsOpen(true);
  };
  const handleLeave = () => {
    isOpen && btnRef!.current!.click();
    setIsOpen(false);
  };
  const handleNavigate = () => {
    btnRef!.current!.click();
    router.push('/products', { scroll: false })
  }

  const orders = useSelector<RootState>(
    (state) => state.cart.orders,
  ) as CartEntry[];
  const totalOrders = useMemo(
    () => sumBy(orders, (order) => order.amount),
    [orders],
  );

  return (
    <Popover className={styles.container}>
      <div className={styles.btnGroup}>
        <PopoverButton className={styles.basket} ref={btnRef}>
          <Image className={styles.icon} src={basketSvg} alt="cart" fill />
          <span>{totalOrders}</span>
        </PopoverButton>
        <div
          className={styles.cover}
          onMouseOver={handleHover}
          onMouseLeave={handleLeave}
          onClick={handleNavigate}
        />
      </div>
      <PopoverPanel anchor="bottom end" className={styles.cartPanel}>
        <div className={styles.summary}>
          <span>Hiện đang có {totalOrders} sản phẩm trong giỏ hàng.</span>
        </div>
        {orders.map((order, index) => (
          <Entry entry={order} key={index} />
        ))}
        <div className={styles.btnGroup}>
          <button className={styles.cartBtn}>
            <span>Giỏ hàng</span>
          </button>
          <button className={styles.payBtn}>
            <span>Thanh toán</span>
          </button>
        </div>
      </PopoverPanel>
    </Popover>
  );
};

export default Cart;
