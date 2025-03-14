import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { ReactNode, useCallback, useId, useMemo } from "react";
import {
  DefaultValues,
  FieldValues,
  FormProvider,
  Path,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
  UseFormReset,
  UseFormReturn,
  ValidationMode,
} from "react-hook-form";
import { FormControl, FormSubmitHandler, ValidationErrors } from "./types";
import { Nullish } from "../types/Nullish";
import { ZodSchema } from "zod";

export interface FormProps<TFieldValues extends FieldValues = FieldValues> {
  /**
   * @example
   * <Form>
   *  {(control) => (
   *    <FormField control={control} name="title" type="text" />
   *  )}
   * </Form>
   */
  children: (
    control: FormControl<TFieldValues>,
    formApi: UseFormReturn<TFieldValues>,
  ) => ReactNode;
  defaultValues?: DefaultValues<TFieldValues> | Nullish;
  values?: TFieldValues | Nullish;
  schema?: ZodSchema;
  mode?: keyof ValidationMode;
  /**
   * @about onSubmit function has to be async and typed as FormSubmitHandler<YourFormValues>
   * @example
   * const onSubmit: FormSubmitHandler<LoginFormValues> = async (values) => {
   *   await loginToApp(...)
   * };
   */
  onSubmit?: FormSubmitHandler<TFieldValues>;
  onInvalidSubmit?: SubmitErrorHandler<TFieldValues>;
  onChange?: (
    values: TFieldValues,
    setErrors: (errors: ValidationErrors | null) => void,
    reset: UseFormReset<TFieldValues>,
    formApi: UseFormReturn<TFieldValues>,
  ) => void;
  isFullHeight?: boolean;
}

export function Form<TFieldValues extends FieldValues = FieldValues>(
  props: FormProps<TFieldValues>,
) {
  const formId = useId();
  const onChangeHandler = props.onChange;

  const formApi = useForm<TFieldValues>({
    mode: props.mode ?? "onSubmit",
    resolver: props.schema ? zodResolver(props.schema) : undefined,
    defaultValues: props.defaultValues ?? undefined,
    values: props.values ?? undefined,
  });

  function setErrors(validationErrors: ValidationErrors | null) {
    validationErrors?.forEach((error) => {
      formApi.setError(error.name as Path<TFieldValues>, {
        message: error.message,
      });
    });
  }

  const onSubmit: SubmitHandler<TFieldValues> = async (values) => {
    await props.onSubmit?.(values, setErrors, formApi.reset);
  };

  const onInvalidSubmit: SubmitErrorHandler<TFieldValues> = async (
    errors,
    event,
  ) => {
    await props.onInvalidSubmit?.(errors, event);
  };

  const onChange = useCallback(() => {
    onChangeHandler?.(formApi.getValues(), setErrors, formApi.reset, formApi);
  }, [formApi, onChangeHandler]);

  const control = useMemo(
    () => Object.assign(formApi.control, { formId, onChange }),
    [formApi.control, formId, onChange],
  );

  return (
    <FormProvider {...formApi}>
      <form
        // @ts-ignore
        css={props.isFullHeight ? { height: "100%" } : undefined}
        onSubmitCapture={(event) => {
          if (
            event.target instanceof HTMLElement &&
            event.target.getAttribute("id") === formId
          ) {
            formApi.handleSubmit(onSubmit, onInvalidSubmit)(event);
          }
        }}
        id={formId}
      >
        {props.children(control, formApi)}
      </form>
    </FormProvider>
  );
}
