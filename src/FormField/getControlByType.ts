import { FunctionComponent } from "react";
import { FormFieldType } from "./types";
import { TextField } from "../TextFIeld/TextField";
import { SelectField } from "../Select/Select";
import { Switch } from "../Switch/Switch";
import { Checkbox } from "../Checkbox/Checkbox";

export function getControlByType(type: FormFieldType) {
  return controls[type];
}

export const controls: { [key in FormFieldType]: FunctionComponent<any> } = {
  text: TextField,
  select: SelectField,
  switch: Switch,
  checkbox: Checkbox,
};
