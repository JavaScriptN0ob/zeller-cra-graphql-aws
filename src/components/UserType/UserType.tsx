import { SetStateAction, Dispatch } from 'react';
import Header from '../Header';
import Radio from './components/Radio';

type UserTypeProps = {
  userType: string;
  setUserType: Dispatch<SetStateAction<string>>;
};

const UserType = ({ userType, setUserType }: UserTypeProps) => {
  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setUserType(value);
  };

  return (
    <>
      <Header>User Types</Header>
      <Radio
        name="Admin"
        value="ADMIN"
        checked={userType === 'ADMIN'}
        onChange={handleChange}
      />
      <Radio
        name="Manager"
        value="MANAGER"
        checked={userType === 'MANAGER'}
        onChange={handleChange}
      />
    </>
  );
};

export default UserType;
