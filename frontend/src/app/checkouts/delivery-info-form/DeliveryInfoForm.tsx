"use client";

import { useRouter } from "next/navigation";
import styles from "./delivery-info-form.module.scss";
import { cities, communes, districts } from "@/data/data";
import NoCityDelivery from "./no-city-delivery/NoCityDelivery";
import { dropdown } from "@/data/svg";
import Image from "next/image";
import { useRef } from "react";

const DeliveryInfoForm: React.FC = () => {
  const router = useRouter();
  const city = useRef<HTMLSelectElement>(null);
  const district = useRef<HTMLSelectElement>(null);
  const commune = useRef<HTMLSelectElement>(null);

  const addParams = (param: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (value != "-1") {
      searchParams.set(param, value);
      router.push(`${window.location.pathname}?${searchParams}`, {
        scroll: false,
      });
    } else {
      searchParams.delete(param);
      router.push(window.location.pathname, { scroll: false });
    }
  };
  return (
    <form className={styles.container}>
      <div className={styles.personalInfo}>
        <input type="text" placeholder="Họ và tên" className={styles.name} />
        <input type="text" placeholder="Email" className={styles.email} />
        <input
          type="text"
          placeholder="Số điện thoại"
          className={styles.phoneNumber}
        />
        <input type="text" placeholder="Địa chỉ" className={styles.address} />
        <div className={styles.dropdown}>
          <select
            ref={city}
            name="city"
            className={styles.input}
            onChange={(e) => addParams("city", e.currentTarget.value)}
          >
            {[{ id: -1, label: "Chọn tỉnh/thành" }, ...cities].map(
              ({ id, label }) => (
                <option key={id} value={id}>
                  {label}
                </option>
              ),
            )}
          </select>
          <div className={styles.icon}>
            <Image src={dropdown} alt="" fill />
          </div>
        </div>
        <div className={styles.dropdown}>
          <select
            name="district"
            ref={district}
            className={styles.input}
            onChange={(e) => addParams("district", e.currentTarget.value)}
          >
            {[{ id: -1, label: "Chọn quận/huyện" }, ...districts].map(
              ({ id, label }) => (
                <option key={id} value={id}>
                  {label}
                </option>
              ),
            )}
          </select>
          <div className={styles.icon}>
            <Image src={dropdown} alt="" fill />
          </div>
        </div>
        <div className={styles.dropdown}>
          <select
            name="commune"
            ref={commune}
            className={styles.input}
            onChange={(e) => addParams("commune", e.currentTarget.value)}
          >
            {[{ id: -1, label: "Chọn phường/xã" }, ...communes].map(
              ({ id, label }) => (
                <option key={id} value={id}>
                  {label}
                </option>
              ),
            )}
          </select>
          <div className={styles.icon}>
            <Image src={dropdown} alt="" fill />
          </div>
        </div>
      </div>
      <div className={styles.deliveryInfo}>
        <div className={styles.summary}>
          Big Belly giao hàng đến tất cả các quận/huyện của TP.HCM thông qua
          dịch vụ giao hàng GrabExpress.
        </div>
        <div className={styles.time}>
          Thời gian đặt hàng từ 6:30 - 21:00 với phí vận chuyển và thời gian sẽ
          phụ thuộc vào ứng dụng giao hàng.
        </div>
        <div className={styles.note}>
          (Qúy khách hàng vui lòng thanh toán phí vận chuyển cho shipper khi
          nhận hàng
        </div>
      </div>
      <NoCityDelivery />
    </form>
  );
};

export default DeliveryInfoForm;
