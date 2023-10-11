import styled from 'styled-components';
import type { UserType } from '../../../../hooks/useFilteredUser/useFilteredUsers';
import convertToSentenceCase from './utils/convertToSentenceCase';

const Container = styled.div`
  margin: 30px 0;
  display: flex;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 6px;
  background-color: #e8f2fb;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1378d1;
`;

const DetailContainer = styled.div`
  margin-left: 20px;
  font-weight: normal;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Name = styled.div`
  font-size: 18px;
`;

const Role = styled.div`
  color: #797876;
  font-size: 14px;
`;

const UserCard = ({ user }: { user: UserType }) => {
  const initial = user.name.charAt(0);
  const caseConvertedRole = convertToSentenceCase(user.role);

  return (
    <Container>
      <Avatar>{initial}</Avatar>
      <DetailContainer>
        <Name>{user.name}</Name>
        <Role>{caseConvertedRole}</Role>
      </DetailContainer>
    </Container>
  );
};

export default UserCard;
