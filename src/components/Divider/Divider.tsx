import styled from 'styled-components';

type DividerProps = {
  margin?: string;
};

const Divider = styled.hr<DividerProps>`
  border: none;
  height: 2px;
  background-color: #f3f5f9;
  margin: ${(props) => props.margin};
  width: 100%;
`;

export default Divider;
