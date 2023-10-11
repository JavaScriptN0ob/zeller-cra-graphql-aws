import styled from 'styled-components';
import { useState } from 'react';
import Divider from '../../components/Divider';
import UserType from '../../components/UserType';

const Container = styled.div`
  padding: 10px;
  max-width: 1000px;
  margin: auto;
`;

const UserPage = () => {
  const [userType, setUserType] = useState<string>('ADMIN');

  return (
    <Container>
      <Divider margin="0 0 30px 0" />
      <UserType userType={userType} setUserType={setUserType} />
      <Divider margin="30px 0" />
      UserContent
      <Divider margin="30px 0 0 0" />
    </Container>
  );
};

export default UserPage;
