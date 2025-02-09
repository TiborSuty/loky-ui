import React from "react";
import {
  Button as RadixButton,
  ButtonProps as RadixButtonProps,
} from "@radix-ui/themes";

import styles from "./button.module.css";
import { cva } from "class-variance-authority";
import { LucideIcon } from "lucide-react";

const button = cva(styles.button, {
  variants: {
    variant: {
      danger: styles["Button-danger"],
      primary: styles["Button-primary"],
      secondary: styles["Button-secondary"],
    },
  },
});

export interface ButtonProps {
  size?: RadixButtonProps["size"];
  variant?: RadixButtonProps["variant"] | "primary" | "secondary" | "danger";
  radius?: RadixButtonProps["radius"];
  isLoading?: RadixButtonProps["loading"];
  form?: string;
  icon?: LucideIcon;
  title: string;
}

/** Primary UI component for user interaction */
export const Button = (props: ButtonProps) => {
  return (
    <RadixButton
      variant={props.variant}
      size={props.size}
      radius={props.radius}
      loading={props.isLoading}
      form={props.form}
      className={button({ variant: props.variant })}
    >
      {props.icon && <props.icon className="mr-2" />}
      {props.title}
    </RadixButton>
  );
};
