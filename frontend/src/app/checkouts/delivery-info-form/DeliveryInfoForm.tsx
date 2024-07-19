"use client";

import { useRouter } from "next/navigation";
import styles from "./delivery-info-form.module.scss";
import { cities, communes, districts } from "@/data/data";

const DeliveryInfoForm: React.FC = () => {
  const router = useRouter();
  const addParams = (param: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (value != '-1') {
      searchParams.set(param, value);
      router.push(`${window.location.pathname}?${searchParams}`, { scroll: false });
    } else {
      searchParams.delete(param);
      router.push(window.location.pathname, { scroll: false })
    }
  };
  return (
    <form className={styles.container}>
      <input type="text" placeholder="Họ và tên" className={styles.name} />
      <input type="text" placeholder="Email" className={styles.email} />
      <input
        type="text"
        placeholder="Số điện thoại"
        className={styles.phoneNumber}
      />
      <input type="text" placeholder="Địa chỉ" className={styles.address} />
      <select name="city" className={styles.dropdown} onChange={(e) => addParams('city', e.currentTarget.value)}>
        {[{ id: -1, label: "Chọn tỉnh/thành" }, ...cities].map(
          ({ id, label }) => (
            <option
              key={id}
              value={id}
            >
              {label}
            </option>
          ),
        )}
      </select>
      <select name="district" className={styles.dropdown} onChange={(e) => addParams('district', e.currentTarget.value)}>
        {[{ id: -1, label: "Chọn quận/huyện" }, ...districts].map(
          ({ id, label }) => (
            <option key={id} value={id}>
              {label}
            </option>
          ),
        )}
      </select>
      <select name="commune" className={styles.dropdown} onChange={(e) => addParams('commune', e.currentTarget.value)}>
        {[{ id: -1, label: "Chọn phường/xã" }, ...communes].map(
          ({ id, label }) => (
            <option key={id} value={id}>
              {label}
            </option>
          ),
        )}
      </select>
    </form>
  );
};

export default DeliveryInfoForm;
