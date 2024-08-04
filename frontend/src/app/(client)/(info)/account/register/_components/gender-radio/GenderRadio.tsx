import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import styles from "./gender-radio.module.scss";
import { genderOptions } from "@/data/constants";
import { Controller, useFormContext } from "react-hook-form";

const GenderRadio: React.FC = () => {
  const { control } = useFormContext();
  return (
    <Controller
      name="gender"
      control={control}
      render={({ field }) => (
        <RadioGroup className={styles.container} {...field}>
          {genderOptions.map(({ id, label }) => (
            <Field key={id} className={styles.field}>
              <Radio value={id} className={`${styles.radio} group`}>
                <span
                  className={`${styles.inner} invisible group-data-[checked]:visible`}
                />
              </Radio>
              <Label className={styles.label}>{label}</Label>
            </Field>
          ))}
        </RadioGroup>
      )}
    />
  );
};

export default GenderRadio;
