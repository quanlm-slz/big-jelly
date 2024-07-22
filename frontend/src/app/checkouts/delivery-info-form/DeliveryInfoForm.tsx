"use client";

import { useRouter, useSearchParams } from "next/navigation";
import styles from "./delivery-info-form.module.scss";
import { cities, communes, districts } from "@/data/data";
import NoCityDelivery from "./no-city-delivery/NoCityDelivery";
import { dropdown } from "@/data/svg";
import Image from "next/image";
import { FormEvent, useEffect, useRef, useState } from "react";
import DeliveryCheckbox from "./delivery-checkbox/DeliveryCheckbox";
import PaymentCheckbox from "./payment-checkbox/PaymentCheckbox";
import Link from "next/link";

const DeliveryInfoForm: React.FC = () => {
  const router = useRouter();
  const params = useSearchParams();
  const city = useRef<HTMLSelectElement>(null);
  const district = useRef<HTMLSelectElement>(null);
  const commune = useRef<HTMLSelectElement>(null);
  const [disabledDelivery, setDisableDelivery] = useState<Boolean>(true);

  useEffect(() => {
    const disabled =
      Number(city?.current?.value) == -1 ||
      Number(district?.current?.value) == -1;
    setDisableDelivery(disabled);
  }, [city?.current?.value, district?.current?.value]);

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

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    console.log(formData.get("paymentMethod"));
  };
  return (
    <form className={styles.container} onSubmit={submitHandler}>
      <div className={styles.personalInfo}>
        <input
          type="text"
          name="name"
          placeholder="Họ và tên"
          className={styles.name}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          className={styles.email}
        />
        <input
          type="text"
          name="phone"
          placeholder="Số điện thoại"
          className={styles.phoneNumber}
        />
        <input type="text" placeholder="Địa chỉ" className={styles.address} />
        <div className={styles.dropdown}>
          <select
            ref={city}
            name="city"
            className={styles.input}
            defaultValue={params.get("city") || "-1"}
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
            defaultValue={params.get("district") || "-1"}
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
            defaultValue={params.get("commune") || "-1"}
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
          (Quý khách hàng vui lòng thanh toán phí vận chuyển cho shipper khi
          nhận hàng)
        </div>
        {disabledDelivery ? (
          <NoCityDelivery />
        ) : (
          <DeliveryCheckbox name="deliveryMethod" />
        )}
      </div>
      <div className={styles.paymentInfo}>
        <div className={styles.title}>Phương thức thanh toán</div>
        <PaymentCheckbox name="paymentMethod" />
      </div>
      <div className={styles.buttonGroup}>
        <Link href="/products" className={styles.link}>
          Giỏ hàng
        </Link>
        <button className={styles.submit}>Hoàn tất đơn hàng</button>
      </div>
    </form>
  );
};

export default DeliveryInfoForm;
