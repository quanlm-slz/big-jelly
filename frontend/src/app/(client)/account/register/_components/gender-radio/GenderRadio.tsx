import { Field, Label, Radio, RadioGroup } from '@headlessui/react';
import styles from './gender-radio.module.scss';
import { genderOptions } from '@/data/constants';

const GenderRadio: React.FC = () => {
  return (
    <RadioGroup className={styles.container}>
      {
        genderOptions.map(({id, label}) => (
              <Field key={id} className={styles.field}>
              <Radio value={id} className={styles.radio} />
              <Label className={styles.label}>{label}</Label>
              </Field>
        ))
      }
    </RadioGroup>
  )
}

export default GenderRadio;
