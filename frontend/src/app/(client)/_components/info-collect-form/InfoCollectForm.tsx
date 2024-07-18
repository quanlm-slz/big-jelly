"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Input,
} from "@headlessui/react";
import { FormEvent, FormEventHandler, useEffect, useState } from "react";
import styles from "./info-collect-form.module.scss";
import Image from "next/image";
import { closeButton } from "@/data/svg";
import { emailSubFormHanlder } from "@/handlers";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store";
import { setVisited } from "@/lib/features/appSlice";

const InfoCollectForm = () => {
  const [open, setOpen] = useState(true);
  const [hoverSubmit, setHoverSubmit] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  
  const handleExit = () => {
    setOpen(false);
    dispatch(setVisited());
  }

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogBackdrop className={styles.backdrop} />
      <div className={styles.container}>
        <DialogPanel className={styles.panel}>
          <div className={styles.closeButton} onClick={handleExit}>
            <Image src={closeButton} alt="close" fill />
          </div>
          <div className={styles.formContainer}>
            <div className={styles.formTitle}>Đăng kí nhận thông tin</div>
            <div className={styles.formDescription}>
              Big belly sẽ gửi các thông tin mới nhất đến bạn:
              <ul>
                <li>Sản phẩm mới</li>
                <li>Ưu đãi hấp dẫn</li>
                <li>Cách thưởng thức, chế biến Big belly tại nhà</li>
              </ul>
            </div>
            <form className={styles.formGroup} onSubmit={emailSubFormHanlder}>
              <Input
                className={styles.input}
                name="email"
                placeholder="Nhập email của bạn"
              />
              <button
                className={styles.button}
                type="submit"
                onMouseOver={() => setHoverSubmit(true)}
                onMouseLeave={() => setHoverSubmit(false)}
              >
                <div className={`${styles.bg}`} />
                <div
                  className={`${styles.bgHover} ${hoverSubmit && styles.hover}`}
                />
                <div
                  className={`${styles.text} ${hoverSubmit && styles.hover}`}
                >
                  <span>Đăng kí</span>
                </div>
              </button>
            </form>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default InfoCollectForm;
