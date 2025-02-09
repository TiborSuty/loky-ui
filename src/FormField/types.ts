import { FieldPathByValue, FieldValues } from "react-hook-form";
import { Nullish } from "../types/Nullish";
import { TextFieldProps } from "../TextFIeld/TextField";
import { SelectProps } from "../Select/Select";
import { SwitchProps } from "../Switch/Switch";
import { CheckboxProps } from "../Checkbox/Checkbox";

export type FormFieldType = "text" | "select" | "switch" | "checkbox";
/**
 * @deprecated
 * Using type assertion to allow input work with undesired value type is against style-of-code
 */
export type UnsafeFieldAssertionPath<
  T extends FieldValues,
  P,
> = FieldPathByValue<T, P | Nullish>;

type PropsWithTypedName<
  T,
  TFieldValues extends FieldValues,
  FieldType extends FormFieldType,
> = Partial<T> & {
  name: FieldPathByValue<TFieldValues, NameTypes[FieldType] | Nullish>;
};

type NameTypes = {
  integer: number;
  slider: number;
  switch: boolean;
  checkbox: boolean;
  dayMonth: object;
  email: string;
  apiDate: string;
  [key: string]: any;
};

export type ControlProps<
  TFieldValues extends FieldValues,
  FieldType extends FormFieldType,
> = {
  text: PropsWithTypedName<TextFieldProps, TFieldValues, FieldType>;
  select: PropsWithTypedName<SelectProps, TFieldValues, FieldType>;
  switch: PropsWithTypedName<SwitchProps, TFieldValues, FieldType>;
  checkbox: PropsWithTypedName<CheckboxProps, TFieldValues, FieldType>;
}[FieldType];
