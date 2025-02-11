import { TextField } from "@radix-ui/themes"
import { VStack } from "../VStack/VStack"
import { FormLabel } from "../FormLabel/FormLabel"
import { useId } from "react";
import { FormDescriptionMessage } from "../FormDescriptionMessage/FormDescriptionMessage";
import { FormErrorMessage } from "../FormErrorMessage/FormErrorMessage";
import { FormControlProps } from "../types/FormControlProps";


export type TextInputProps = {} & FormControlProps<string | null>;

export const TextInput = (props: TextInputProps) => {
    const id = useId();

    const formItemId = `${id}-form-item`;
    const formDescriptionId = `${id}-form-item-description`;
    const formMessageId = `${id}-form-item-message`;
    const isInvalid = props.isInvalid ?? !!props.errorMessage;

    return (
        <VStack>
             <FormLabel
            formItemId={formItemId}
            isInvalid={isInvalid}
            label={props.label}
          />
            <TextField.Root placeholder="Search the docs…">
                <TextField.Slot>
                    
                </TextField.Slot>
             </TextField.Root>
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