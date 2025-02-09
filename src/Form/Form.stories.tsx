import { StoryObj } from "@storybook/react";
import { Form } from "./Form";
import { VStack } from "../VStack/VStack";
import React from "react";
import { FormField } from "../FormField/FormField";
import { FormSubmitHandler } from "./types";
import { action } from "@storybook/addon-actions";
import { FormButton } from "../FormButton/FormButton";

const meta = {
  title: "Form",
  component: Form,
};

export default meta;
type Story = StoryObj<typeof meta>;

type FormSchema = {
  firstName: string;
  lastName: string;
  test: string;
  isChecked: boolean;
  isChecked2: boolean;
};

export const Test: Story = {
  args: {},
  render: () => {
    const onSubmit: FormSubmitHandler<FormSchema> = async (values) => {
      await action("onSubmit")(values);
    };

    return (
      <Form<FormSchema> onSubmit={onSubmit}>
        {(control) => (
          <VStack gap={4}>
            <FormField
              control={control}
              type="text"
              name="firstName"
              label="First Name"
            />
            <FormField
              control={control}
              type="text"
              name="lastName"
              label="Last Name"
            />
            <FormField
              control={control}
              type="select"
              name="test"
              label="Test"
              options={[
                { value: "1", label: "Option 1" },
                { value: "2", label: "Option 2" },
                { value: "3", label: "Option 3" },
              ]}
            />
            <FormField
              control={control}
              type="switch"
              name="isChecked"
              label="isChecked"
            />
            <FormField
              control={control}
              type="checkbox"
              name="isChecked2"
              label="isChecked2"
            />
            <FormButton type="submit" title="Send" control={control} />
          </VStack>
        )}
      </Form>
    );
  },
};
