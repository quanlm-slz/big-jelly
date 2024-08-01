import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import styles from './payment-checkbox.module.scss';
import { paymentMethods } from "@/data/data";
import Image from "next/image";

const PaymentCheckbox: React.FC<{name: string}> = ({ name }) => {
  return (
    <RadioGroup name={name} className={styles.container}>
      {
        paymentMethods.map((method) => (
          <Field key={method.id} className={styles.option}>
            <Radio value={method.id} className={`${styles.radio} group`}>
              <span className={`${styles.inner} invisible group-data-[checked]:visible`}/> 
            </Radio>
            <Label className={styles.labelGroup}>
              <div className={styles.icon}>
                <Image src={method.icon} alt={method.label} fill />
              </div>
              <div className={styles.label}>{method.label}</div>
            </Label>
          </Field>
        ))
      }
    </RadioGroup>
  )
}

export default PaymentCheckbox;
