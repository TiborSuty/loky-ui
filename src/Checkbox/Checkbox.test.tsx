import {render} from '@testing-library/react';
import {Checkbox} from './Checkbox';
import '@testing-library/jest-dom';
import {useState} from 'react';

const CheckboxTestWrapper = () => {
  const [value, setValue] = useState(false);
  return <Checkbox label="Checkbox label" value={value} onChange={setValue} />;
};

describe('Checkbox', () => {
  it('renders with default props', () => {
    const {getByText} = render(<CheckboxTestWrapper />);

    expect(getByText('Checkbox label')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = vi.fn();

    const {getByText, rerender} = render(
      <Checkbox label="Checkbox label" value={false} onChange={handleClick} />
    );

    getByText('Checkbox label').click();

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toBeCalledWith(true);

    getByText('Checkbox label').click();

    expect(handleClick).toHaveBeenCalledTimes(2);
    expect(handleClick).toBeCalledWith(true);

    rerender(<Checkbox label="Checkbox label" value={true} onChange={handleClick} />);

    getByText('Checkbox label').click();

    expect(handleClick).toHaveBeenCalledTimes(3);
    expect(handleClick).toBeCalledWith(false);
  });
});
