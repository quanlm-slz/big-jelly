"use client";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { ControlledInput } from "../../_components";
import styles from "./login.module.scss";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { SignInFormInterface, signInFormSchema } from "@/utils/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUser } from "@/lib/features/userSlice";
import { useEffect } from "react";
import cookie from "@boiseitguru/cookie-cutter";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const method = useForm<SignInFormInterface>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(signInFormSchema),
  });
  const router = useRouter();
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.user.status);
  const error = useAppSelector((state) => state.user.error) as Record<any, any>;
  const token = useAppSelector((state) => state.user.token) as string;

  useEffect(() => {
    if (status === "loggedIn") {
      cookie.set("token", token);
      router.push("/");
    }
  }, [status, token, router]);

  const { handleSubmit } = method;
  const loginHandler: SubmitHandler<SignInFormInterface> = async (data) => {
    const body = {
      customer: {
        email: data.email,
        password: data.password,
      },
    };

    dispatch(loginUser(body));
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.text}>
          Đăng Nhập
          <br />
          __
        </div>
      </div>
      <FormProvider {...method}>
        <form className={styles.right} onSubmit={handleSubmit(loginHandler)}>
          <div className={styles.error}>{error.base}</div>
          <ControlledInput
            name="email"
            type="email"
            placeholder="Email"
            className={styles.input}
          />
          <ControlledInput
            name="password"
            placeholder="Password"
            type="password"
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
        </form>
      </FormProvider>
    </div>
  );
};

export default LoginPage;
