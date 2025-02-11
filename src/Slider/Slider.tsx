import { useId } from "react";
import { FormLabel } from "../FormLabel/FormLabel";
import { VStack } from "../VStack/VStack";
import { Slider as RadixSlider } from "@radix-ui/themes";
import { FormControlProps } from "../types/FormControlProps";
import { FormDescriptionMessage } from "../FormDescriptionMessage/FormDescriptionMessage";
import { FormErrorMessage } from "../FormErrorMessage/FormErrorMessage";


export type SliderProps = {} & FormControlProps<number[] | null>;

export const Slider = (props: SliderProps) => {
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
            <RadixSlider value={[50]} onValueChange={props.onChange} />
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