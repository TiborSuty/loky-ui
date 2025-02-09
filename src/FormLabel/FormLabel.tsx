import React from "react";
import * as RadixLabel from "@radix-ui/react-label";
import styles from "./label.module.css";

export type LabelProps = {};

export const Label = (props: LabelProps) => {
  return (
    <RadixLabel.Root className={styles.label} htmlFor="firstName">
      First name
    </RadixLabel.Root>
  );
};
