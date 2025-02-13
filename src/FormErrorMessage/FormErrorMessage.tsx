import React from 'react';
import {Nullish} from '../types/Nullish';
import {Text} from '@radix-ui/themes';

type FormErrorProps = {
  formItemId: string;
  errorMessage?: string | Nullish;
};

export function FormErrorMessage(props: FormErrorProps) {
  if (!props.errorMessage) {
    return null;
  }

  return (
    <Text size="1" color="crimson" id={props.formItemId}>
      {props.errorMessage}
    </Text>
  );
}
