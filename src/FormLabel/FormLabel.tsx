import React from 'react';
import * as RadixLabel from '@radix-ui/react-label';
import styles from './formLabel.module.css';
import {Nullish} from '../types/Nullish';

type FormLabel = {
  formItemId: string;
  label?: string | Nullish;
  isInvalid: boolean;
};

export const FormLabel = (props: FormLabel) => {
  return (
    <RadixLabel.Root
      className={styles.label}
      htmlFor={props.formItemId}
      data-invalid={props.isInvalid}
    >
      {props.label}
    </RadixLabel.Root>
  );
};
