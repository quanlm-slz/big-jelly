"use client";

import styles from "./register.module.scss";
import Link from "next/link";
import GenderRadio from "./_components/gender-radio/GenderRadio";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { ControlledInput } from "../../_components";
import { SignUpFormInteface, signUpFormSchema } from "@/utils/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/hooks";
import { loggedInWithToken } from "@/lib/features/userSlice";

const RegisterPage: React.FC = () => {
  const methods = useForm<SignUpFormInteface>({
    defaultValues: {
      firstname: "",
      lastname: "",
      birthday: "",
      gender: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(signUpFormSchema),
  });
  const [loading, setLoading] = useState(false);
  const { handleSubmit, setError } = methods;
  const router = useRouter();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<SignUpFormInteface> = (data) => {
    const body = {
      customer: {
        email: data.email,
        password: data.password,
        profile_attributes: {
          firstname: data.firstname,
          lastname: data.lastname,
          birthday: data.birthday,
          gender: data.gender,
        },
      },
    };

    setLoading(true);
    fetch("/api/user/sign_up", {
      method: "post",
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data: Record<any, any>) => {
        if (data.status == "error") {
          const message = data.message as Record<string, string>;
          Object.entries(message).map(([key, value]) => {
            setError(key, { message: value });
          });
        } else {
          dispatch(loggedInWithToken(data.data.token));
          setLoading(false);
          router.push("/");
        }
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        Tạo tài khoản
        <br />
        __
      </div>
      <FormProvider {...methods}>
        <form className={styles.right} onSubmit={handleSubmit(onSubmit)}>
          <ControlledInput
            name="lastname"
            placeholder="Họ"
            className={styles.input}
          />
          <ControlledInput
            name="firstname"
            placeholder="Tên"
            className={styles.input}
          />
          <GenderRadio />
          <ControlledInput
            type="date"
            name="birthday"
            className={styles.input}
          />
          <ControlledInput
            name="email"
            placeholder="Email"
            className={styles.input}
          />
          <ControlledInput
            type="password"
            name="password"
            placeholder="Mật khẩu"
            className={styles.input}
          />
          <div className={styles.note}>
            This site is protected by reCAPTCHA and the Google{" "}
            <a>Privacy Policy</a>
            and <a>Terms of Service</a> apply.
          </div>
          <button className={styles.submit} disabled={loading}>
            {loading ? (
              <span className={`loader ${styles.loader}`} />
            ) : (
              <span>Đăng Ký</span>
            )}
          </button>
          <Link href="/" className={styles.link}>
            &larr; <span>Quay lại trang chủ</span>
          </Link>
        </form>
      </FormProvider>
    </div>
  );
};

export default RegisterPage;
