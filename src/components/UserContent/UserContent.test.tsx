import { render, waitFor } from '@testing-library/react';
import UserContent from './UserContent';
import convertToSentenceCase from './components/UserCard/utils/convertToSentenceCase';
import Header from '../Header';
import UserCard from './components/UserCard';
import useFilteredUser from '../../hooks/useFilteredUser';
import mockFilteredUsers from '../../hooks/useFilteredUser/mockFilteredUsers.json';

jest.mock('./components/UserCard/utils/convertToSentenceCase', () => jest.fn());
jest.mock('../Header', () => jest.fn());
jest.mock('./components/UserCard', () => jest.fn());
jest.mock('../../hooks/useFilteredUser', () => jest.fn());

describe('<UserContent />', () => {
  const useType = 'ADMIN';
  const fetchUsers = jest.fn();

  beforeEach(() => {
    (convertToSentenceCase as jest.Mock).mockReturnValue('Admin');
    (useFilteredUser as jest.Mock).mockReturnValue({
      filteredUsers: mockFilteredUsers,
      fetchUsers,
    });
  });

  afterEach(() => {
    (convertToSentenceCase as jest.Mock).mockReset();
    (Header as jest.Mock).mockClear();
    (UserCard as jest.Mock).mockClear();
    (useFilteredUser as jest.Mock).mockReset();
  });

  it('should call useFilterUser hooks with user type', async () => {
    render(<UserContent userType={useType} />);

    await waitFor(() => {
      expect(useFilteredUser).toHaveBeenCalledWith(useType);
    });

    await waitFor(() => {
      expect(fetchUsers).toHaveBeenCalledTimes(1);
    });
  });

  it('should render <Header /> with converted user type', async () => {
    render(<UserContent userType={useType} />);

    await waitFor(() => {
      expect(Header).toHaveBeenCalledWith(
        {
          children: 'Admin Users',
        },
        expect.anything(),
      );
    });
  });

  it('should render <UserCard /> with filtered users', async () => {
    render(<UserContent userType={useType} />);

    await waitFor(() => {
      expect(UserCard).toHaveBeenCalledTimes(mockFilteredUsers.length);
    });
  });
});
