import { render, screen } from '@testing-library/react';
import UserPage from './UserPage';
import Divider from '../../components/Divider';
import UserType from '../../components/UserType';

jest.mock('../../components/Divider', () => jest.fn(() => 'Divider'));
jest.mock('../../components/UserType', () => jest.fn(() => 'UserType'));

describe('<UserPage />', () => {
  const userType = 'ADMIN';

  afterEach(() => {
    (Divider as unknown as jest.Mock).mockClear();
    (UserType as jest.Mock).mockClear();
  });

  it('should render <Divider />', () => {
    render(<UserPage />);

    expect(Divider).toHaveBeenCalledTimes(3);
    expect(Divider).toBeCalledWith({ margin: '0 0 30px 0' }, expect.anything());
    expect(Divider).toBeCalledWith({ margin: '30px 0' }, expect.anything());
    expect(Divider).toBeCalledWith({ margin: '30px 0 0 0' }, expect.anything());
  });

  it('should render <UserType />', () => {
    render(<UserPage />);

    expect(UserType).toHaveBeenCalledTimes(1);
    expect(UserType).toBeCalledWith(
      {
        userType,
        setUserType: expect.any(Function),
      },
      expect.anything(),
    );
  });

  it('should render UserContent', () => {
    render(<UserPage />);

    expect(screen.getByText('UserContent')).toBeInTheDocument();
  });
});
