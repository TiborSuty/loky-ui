import React, {useId} from 'react';
import styles from './Checkbox.module.css';
import {Checkbox as RadiCheckbox} from '@radix-ui/themes';
import {Check} from 'lucide-react';
import {FormControlProps} from '../types/FormControlProps';
import {VStack} from '../VStack/VStack';
import {FormDescriptionMessage} from '../FormDescriptionMessage/FormDescriptionMessage';
import {FormErrorMessage} from '../FormErrorMessage/FormErrorMessage';
import {HStack} from '../HStack/HStack';
import {FormLabel} from '../FormLabel/FormLabel';

export type CheckboxProps = {} & FormControlProps<boolean>;

export const Checkbox = (props: CheckboxProps) => {
  const id = useId();

  const formItemId = `${id}-form-item`;
  const formDescriptionId = `${id}-form-item-description`;
  const formMessageId = `${id}-form-item-message`;
  const isInvalid = props.isInvalid ?? !!props.errorMessage;

  return (
    <VStack gap={1}>
      <HStack gap={2}>
        <RadiCheckbox
          id={formItemId}
          checked={props.value}
          onCheckedChange={props.onChange}
          disabled={props.isDisabled}
        />
        <FormLabel formItemId={formItemId} isInvalid={isInvalid} label={props.label} />
      </HStack>
      <FormDescriptionMessage
        formItemId={formDescriptionId}
        descriptionMessage={props.helperText}
      />
      <FormErrorMessage formItemId={formMessageId} errorMessage={props.errorMessage} />
    </VStack>
  );
};
