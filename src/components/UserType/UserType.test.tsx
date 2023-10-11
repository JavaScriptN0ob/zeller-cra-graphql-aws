import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';
import UserType from './UserType';
import type { RadioProps } from './components/Radio/Radio';

jest.mock('../Header', () => jest.fn(() => 'Header'));
jest.mock('./components/Radio', () => {
  const Radio = ({ name, value, checked, onChange }: RadioProps) => (
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
    />
  );

  return Radio;
});

describe('<UserType />', () => {
  const userType = 'ADMIN';
  const setUserType = jest.fn();

  afterEach(() => {
    (Header as jest.Mock).mockClear();
  });

  it('should render <Header />>', () => {
    const header = 'User Types';
    render(<UserType userType={userType} setUserType={setUserType} />);

    expect(Header).toHaveBeenCalledTimes(1);
    expect(Header).toHaveBeenCalledWith(
      {
        children: header,
      },
      expect.anything(),
    );
  });

  it('should render <Radio />', () => {
    render(<UserType userType={userType} setUserType={setUserType} />);

    expect(screen.getAllByRole('radio')).toHaveLength(2);

    const adminRadio = screen.getAllByRole('radio')[0];
    const managerRadio = screen.getAllByRole('radio')[1];

    expect(adminRadio).toHaveAttribute('name', 'Admin');
    expect(adminRadio).toHaveAttribute('value', 'ADMIN');
    expect(adminRadio).toBeChecked();

    expect(managerRadio).toHaveAttribute('name', 'Manager');
    expect(managerRadio).not.toBeChecked();
  });

  it('should call setUserType when radio is clicked', () => {
    render(<UserType userType={userType} setUserType={setUserType} />);

    fireEvent.click(screen.getAllByRole('radio')[1], {
      target: { value: 'MANAGER' },
    });

    expect(setUserType).toHaveBeenCalledTimes(1);
    expect(setUserType).toHaveBeenCalledWith('MANAGER');
  });
});
