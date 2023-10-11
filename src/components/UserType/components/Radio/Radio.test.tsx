import 'jest-styled-components';
import { render, screen, fireEvent } from '@testing-library/react';
import Radio from './Radio';

describe('<Radio />', () => {
  const name = 'Admin';
  const value = 'ADMIN';
  const onChange = jest.fn();

  it('should render radio input, label, container and correct color', () => {
    const checked = false;
    const { rerender } = render(
      <Radio name={name} value={value} checked={checked} onChange={onChange} />,
    );

    const RadioContainer = screen.getByTestId('RADIO_CONTAINER');
    const RadioInput = screen.getByRole('radio');

    expect(RadioContainer).toHaveStyleRule('background-color', '#ffffff');

    expect(RadioInput).not.toBeChecked();
    expect(RadioInput).toHaveAttribute('id', name);
    expect(RadioInput).toHaveAttribute('name', name);
    expect(RadioInput).toHaveAttribute('value', value);
    expect(RadioInput).toHaveAttribute('type', 'radio');

    fireEvent.click(RadioInput);

    expect(onChange).toHaveBeenCalledTimes(1);

    rerender(<Radio name={name} value={value} checked onChange={onChange} />);

    expect(RadioContainer).toHaveStyleRule('background-color', '#e8f2fb');
    expect(RadioInput).toBeChecked();
  });
});
