"use client";

import styles from "./sub-footer.module.scss";
import Image from "next/image";
import { facebook, instagram } from "@/data/svg";
import { FormEvent, FormEventHandler } from "react";
import { emailSubFormHanlder } from "@/handlers";

const SubFooter: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Đăng ký bản tin</div>
      <div className={styles.description}>
        Để cập nhật thông tin mới nhất từ Big Jelly!
      </div>
      <form className={styles.form} onSubmit={emailSubFormHanlder}>
        <input
          className={styles.input}
          type="text"
          placeholder="Nhập email của bạn ..."
        />
        <button className={styles.button}>Đăng ký &rarr;</button>
      </form>
      <div className={styles.icons}>
        <div className={styles.icon}>
          <Image src={facebook} alt="facebook" fill />
        </div>
        <div className={styles.icon}>
          <Image src={instagram} alt="instagram" fill />
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
