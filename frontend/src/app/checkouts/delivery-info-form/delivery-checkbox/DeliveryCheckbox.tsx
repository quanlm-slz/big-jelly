import styles from "./delivery-checkbox.module.scss";
import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import { deliveryMethods } from "@/data/data";
import { renderPrice } from "@/lib/functions";

const DeliveryCheckbox: React.FC<{ name: string }> = ({ name }) => {
  return (
    <RadioGroup name={name} className={styles.checkboxContainer}>
      {deliveryMethods.map((method) => (
        <Field key={method.id} className={styles.container}>
          <Radio value={method.id} className={`group ${styles.radio}`}>
            <span
              className={`invisible group-data-[checked]:visible ${styles.inner}`}
            />
          </Radio>
          <Label className={styles.label}>
            <span>{method.label}</span>
            <span>{renderPrice(method.price)}</span>
          </Label>
        </Field>
      ))}
    </RadioGroup>
  );
};

export default DeliveryCheckbox;
