import React from "react";
import { Nullish } from "../types/Nullish";

type FormErrorProps = {
  formItemId: string;
  errorMessage?: string | Nullish;
};

export function FormErrorMessage(props: FormErrorProps) {
  if (!props.errorMessage) {
    return null;
  }

  return <p id={props.formItemId}>{props.errorMessage}</p>;
}
