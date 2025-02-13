import React from 'react';
import {Nullish} from '../types/Nullish';
import {Text} from '@radix-ui/themes';

type FormDescriptionProps = {
  formItemId: string;
  descriptionMessage?: string | Nullish;
};

export function FormDescriptionMessage(props: FormDescriptionProps) {
  if (!props.descriptionMessage) {
    return null;
  }

  return (
    <Text size="1" color="gray" id={props.formItemId}>
      {props.descriptionMessage}
    </Text>
  );
}
