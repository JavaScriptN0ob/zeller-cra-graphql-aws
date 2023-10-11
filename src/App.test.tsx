import { render, screen } from '@testing-library/react';
import App from './App';
import UserPage from './pages/UserPage';

jest.mock('./pages/UserPage', () => jest.fn(() => 'UserPage'));

describe('<App />', () => {
  afterEach(() => {
    (UserPage as jest.Mock).mockClear();
  });

  it('should render css div', () => {
    render(<App />);

    expect(screen.getByTestId('GLOBAL_CSS')).toBeInTheDocument();
  });

  it('should render <UserPage />', () => {
    render(<App />);

    expect(UserPage).toHaveBeenCalledTimes(1);
  });
});
