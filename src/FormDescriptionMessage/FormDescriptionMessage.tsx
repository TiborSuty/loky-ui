import React from "react";
import { Nullish } from "../types/Nullish";

type FormDescriptionProps = {
  formItemId: string;
  descriptionMessage?: string | Nullish;
};

export function FormDescriptionMessage(props: FormDescriptionProps) {
  if (!props.descriptionMessage) {
    return null;
  }

  return <p id={props.formItemId}>{props.descriptionMessage}</p>;
}
