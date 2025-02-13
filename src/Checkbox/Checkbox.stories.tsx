import {StoryObj} from '@storybook/react';
import {Checkbox} from './Checkbox';
import {useState} from 'react';

const meta = {
  title: 'Checkbox',
  component: Checkbox,
  args: {
    label: 'Accept terms and conditions.',
    value: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return <Checkbox {...args} value={value} onChange={setValue} />;
  },
};

export const WithHelperText: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return <Checkbox helperText="Helper text" {...args} value={value} onChange={setValue} />;
  },
};

export const WithErrorText: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return <Checkbox errorMessage="Error message" {...args} value={value} onChange={setValue} />;
  },
};

export const Disabled: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return <Checkbox isDisabled {...args} value={value} onChange={setValue} />;
  },
};
