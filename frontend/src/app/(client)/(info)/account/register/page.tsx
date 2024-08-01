"use client";

import styles from "./register.module.scss";
import Link from "next/link";
import GenderRadio from "./_components/gender-radio/GenderRadio";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { ControlledInput } from "../../_components";
import { SignUpFormInteface, signUpFormSchema } from "@/utils/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { registerUser } from "@/lib/features/userSlice";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import cookie from "@boiseitguru/cookie-cutter";

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

  const { handleSubmit, setError } = methods;
  const dispatch = useAppDispatch();
  const router = useRouter();

  const status = useAppSelector((state) => state.user.status);
  const error = useAppSelector((state) => state.user.error) as Record<any, any>;
  const token = useAppSelector((state) => state.user.token) as string;

  useEffect(() => {
    switch (status) {
      case "error":
        Object.entries(error).map(([key, value]) => {
          setError(key, { type: "manual", message: value });
        });
        break;
      case "loggedIn":
        cookie.set("token", token, { path: "/" });
        router.push("/");
        break;
    }
  }, [error, status]);

  const onSubmit: SubmitHandler<SignUpFormInteface> = async (data) => {
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

    dispatch(registerUser(body));
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
          <button className={styles.submit} disabled={status === "loading"}>
            {status === "loading" ? (
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
