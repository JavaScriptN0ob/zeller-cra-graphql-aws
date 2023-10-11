import 'jest-styled-components';
import { render, screen } from '@testing-library/react';
import Divider from './Divider';

describe('<Divider />', () => {
  const margin = '30px 0px';

  it('should render <Divider />', () => {
    render(<Divider margin={margin} />);

    expect(screen.getByRole('separator')).toBeInTheDocument();
    expect(screen.getByRole('separator')).toHaveStyleRule('margin', margin);
  });
});
