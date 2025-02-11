import { ChangeEventHandler, useId } from "react";
import { FormLabel } from "../FormLabel/FormLabel"
import { VStack } from "../VStack/VStack"
import { FormControlProps } from "../types/FormControlProps";
import { TextArea } from "@radix-ui/themes";
import { FormErrorMessage } from "../FormErrorMessage/FormErrorMessage";
import { FormDescriptionMessage } from "../FormDescriptionMessage/FormDescriptionMessage";



export type TextareaProps = {
    placeholder?: string;
} & FormControlProps<string | null>;

export const Textarea = (props: TextareaProps) => {
    const id = useId();

    const formItemId = `${id}-form-item`;
    const formDescriptionId = `${id}-form-item-description`;
    const formMessageId = `${id}-form-item-message`;
    const isInvalid = props.isInvalid ?? !!props.errorMessage;

    const onChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        props.onChange?.(event.target.value);
    }


    return (
        <VStack>
            <FormLabel
            formItemId={formItemId}
            isInvalid={isInvalid}
            label={props.label}
          />
          <TextArea value={props.value ?? undefined} onChange={onChange} placeholder={props.placeholder} />
          <FormDescriptionMessage
        formItemId={formItemId}
        descriptionMessage={props.errorMessage}
      />
      <FormErrorMessage
        formItemId={formItemId}
        errorMessage={props.errorMessage}
        />
        </VStack>
    )
}