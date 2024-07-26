"use client";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@headlessui/react";
import { InputHTMLAttributes } from "react";
import styles from './controlled-input.module.scss';

const ControlledInput: React.FC<
  InputHTMLAttributes<HTMLInputElement> & { name: string }
> = ({ name, type="text", ...props }) => {
  const { control, formState: { errors } } = useFormContext();
  const inputError = errors[name]?.message as string
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className={styles.container}>
          <Input type={type} {...props} {...field} />
          { inputError && <p className={styles.error}>{inputError}</p> }
        </div>
      )}
    />
  );
};

export default ControlledInput;
