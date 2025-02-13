import React, { ButtonHTMLAttributes } from "react";
import {
  Button as RadixButton,
  ButtonProps as RadixButtonProps,
  Spinner,
} from "@radix-ui/themes";

import styles from "./Button.module.css";
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
  defaultVariants: {
    variant: "primary",
  },
});

type CustomVariants = "primary" | "secondary" | "danger";
type RadixVariants = RadixButtonProps["variant"];

export interface ButtonProps {
  title: string;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
  size?: RadixButtonProps["size"];
  variant?: RadixVariants | CustomVariants;
  radius?: RadixButtonProps["radius"];
  isLoading?: RadixButtonProps["loading"];
  isDisabled?: boolean;
  form?: string;
  icon?: LucideIcon;
}

export const Button = (props: ButtonProps) => {
  return (
    <RadixButton
      className={button({ variant: props.variant as CustomVariants })}
      variant={props.variant as RadixVariants}
      size={props.size}
      radius={props.radius}
      form={props.form}
      disabled={props.isDisabled || props.isLoading}
      onClick={props.onClick}
    >
      {props.isLoading && <Spinner loading />}  
      {props.icon && <props.icon className="mr-2" />}
      {props.title}
    </RadixButton>
  );
};
