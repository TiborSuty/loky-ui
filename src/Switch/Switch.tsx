import React, { useId } from "react";
import * as RadixSwitch from "@radix-ui/react-switch";
import styles from "./switch.module.css";
import { VStack } from "../VStack/VStack";
import { FormDescriptionMessage } from "../FormDescriptionMessage/FormDescriptionMessage";
import { FormErrorMessage } from "../FormErrorMessage/FormErrorMessage";
import { FormControlProps } from "../types/FormControlProps";
import { FormLabel } from "../FormLabel/FormLabel";

export type SwitchProps = {} & FormControlProps<boolean>;

export const Switch = (props: SwitchProps) => {
  const id = useId();

  const formItemId = `${id}-form-item`;
  const formDescriptionId = `${id}-form-item-description`;
  const formMessageId = `${id}-form-item-message`;
  const isInvalid = props.isInvalid ?? !!props.errorMessage;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.checked);
    props.onChange(event.target.checked);
  };

  return (
    <VStack>
      <div style={{ display: "flex", alignItems: "center" }}>
        <FormLabel
          formItemId={formItemId}
          isInvalid={isInvalid}
          label={props.label}
        />
        <RadixSwitch.Root
          className={styles.Root}
          id={formItemId}
          disabled={props.isDisabled}
          onChange={handleChange}
        >
          <RadixSwitch.Thumb className={styles.Thumb} />
        </RadixSwitch.Root>
      </div>
      <FormDescriptionMessage
        formItemId={formItemId}
        descriptionMessage={props.helperText}
      />
      <FormErrorMessage
        formItemId={formItemId}
        errorMessage={props.errorMessage}
      />
    </VStack>
  );
};
