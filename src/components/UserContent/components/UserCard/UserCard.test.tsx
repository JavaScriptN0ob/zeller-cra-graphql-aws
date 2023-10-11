import { render, screen } from '@testing-library/react';
import convertToSentenceCase from './utils/convertToSentenceCase';
import UserCard from './UserCard';

jest.mock('./utils/convertToSentenceCase', () => jest.fn());

describe('<UserCard />', () => {
  const user = {
    email: 'test@email.com',
    id: 'test-id',
    name: 'Test Name',
    role: 'ADMIN' as const,
  };
  const convertedRole = 'Admin';

  beforeEach(() => {
    (convertToSentenceCase as jest.Mock).mockReturnValue(convertedRole);
  });

  afterEach(() => {
    (convertToSentenceCase as jest.Mock).mockClear();
  });

  it('should render avatar with cap=cased first letter letter of user name', () => {
    render(<UserCard user={user} />);

    expect(screen.getByText('T')).toBeInTheDocument();
  });

  it('should render user name and role', () => {
    render(<UserCard user={user} />);

    expect(screen.getByText(user.name)).toBeInTheDocument();

    expect(convertToSentenceCase).toHaveBeenCalledWith(user.role);
    expect(screen.getByText(convertedRole)).toBeInTheDocument();
  });
});
