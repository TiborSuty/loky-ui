import {
  ChangeEvent,
  ClipboardEventHandler,
  FocusEventHandler,
  KeyboardEventHandler,
} from "react";
import { Nullish } from "./Nullish";

export type FormControlProps<
  ValueType,
  ElementType = HTMLInputElement,
  RestParams extends unknown[] = [],
> = {
  value: ValueType;
  onChange?: (
    value: ValueType,
    event?: ChangeEvent<ElementType>,
    ...args: RestParams
  ) => void;
  onBlur?: FocusEventHandler<ElementType>;
  onFocus?: FocusEventHandler<ElementType>;
  onPaste?: ClipboardEventHandler<ElementType>;
  onKeyDown?: KeyboardEventHandler<ElementType>;
  name?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  label?: string | Nullish;
  tooltip?: string | Nullish;
  errorMessage?: string | Nullish;
  helperText?: string;
};
