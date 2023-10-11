import { useEffect } from 'react';
import convertToSentenceCase from './components/UserCard/utils/convertToSentenceCase';
import Header from '../Header';
import UserCard from './components/UserCard';
import useFilteredUser from '../../hooks/useFilteredUser';

type UserContentType = {
  userType: string;
};

const UserContent = ({ userType }: UserContentType) => {
  const { filteredUsers, fetchUsers } = useFilteredUser(userType);
  const header = `${convertToSentenceCase(userType)} Users`;

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <>
      <Header>{header}</Header>
      {filteredUsers &&
        filteredUsers.map((user) => (
          <UserCard key={user.id.toString()} user={user} />
        ))}
    </>
  );
};

export default UserContent;
