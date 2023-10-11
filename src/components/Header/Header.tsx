import styled from 'styled-components';

const StyledHeader = styled.div`
  font-size: 24px;
  font-weight: 900;
  margin-bottom: 40px;
`;

const Header = ({ children }: { children: string }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default Header;
