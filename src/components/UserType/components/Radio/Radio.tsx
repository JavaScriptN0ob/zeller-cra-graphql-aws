import styled from 'styled-components';

export type RadioProps = {
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: any) => void;
};

type RadioContainerProps = {
  selected: boolean;
};

const RadioContainer = styled.div<RadioContainerProps>`
  background-color: ${(props) => (props.selected ? '#e8f2fb' : '#ffffff')};
  border-radius: 8px;
  height: 50px;
  font-size: 18px;
  font-weight: normal;
  line-height: 50px;
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const StyledLabel = styled.label`
  margin-left: 10px;
`;

const StyledRadioInput = styled.input`
  margin-left: 20px;
  transform: scale(1.5);
`;

const Radio = ({ name, value, checked, onChange }: RadioProps) => {
  return (
    <RadioContainer data-testid="RADIO_CONTAINER" selected={checked}>
      <StyledRadioInput
        type="radio"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <StyledLabel htmlFor={name}>{name}</StyledLabel>
    </RadioContainer>
  );
};

export default Radio;
