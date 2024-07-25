"use client";

import { Input } from "@headlessui/react";
import styles from "./register.module.scss";
import Link from "next/link";
import GenderRadio from "./_components/gender-radio/GenderRadio";
import { SubmitHandler, useForm } from "react-hook-form";

type Input = {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  birthday: string;
};

const Register: React.FC = () => {
  const { register, handleSubmit } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = (data) => {
    const body = {
      customer: {
        email: data.email,
        password: data.password,
        profile_attributes: {
          firstname: data.firstname,
          lastname: data.lastname,
          birthday: data.birthday,
          gender: "male",
        },
      },
    };

    fetch("/api/user/sign_up", {
      method: "post",
      body: JSON.stringify(body),
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        Tạo tài khoản
        <br />
        __
      </div>
      <form className={styles.right} onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Họ"
          className={styles.input}
          {...register("lastname")}
        />
        <Input
          type="text"
          placeholder="Tên"
          className={styles.input}
          {...register("firstname")}
        />
        <GenderRadio />
        <Input
          type="date"
          placeholder="mm/dd/yy"
          className={styles.input}
          {...register("birthday")}
        />
        <Input
          type="text"
          placeholder="Email"
          className={styles.input}
          {...register("email")}
        />
        <Input
          type="password"
          placeholder="Mật khẩu"
          className={styles.input}
          {...register("password")}
        />
        <div className={styles.note}>
          This site is protected by reCAPTCHA and the Google{" "}
          <a>Privacy Policy</a>
          and <a>Terms of Service</a> apply.
        </div>
        <button className={styles.submit}>Đăng Ký</button>
        <Link href="/" className={styles.link}>
          &larr; <span>Quay lại trang chủ</span>
        </Link>
      </form>
    </div>
  );
};

export default Register;
