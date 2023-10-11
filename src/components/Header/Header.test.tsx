import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('<Header />', () => {
  it('should render <Header />', () => {
    const header = 'Header';

    render(<Header>{header}</Header>);

    expect(screen.getByText(header)).toBeInTheDocument();
  });
});
