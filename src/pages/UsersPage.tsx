import React, { FC, useEffect, useState } from 'react';
import { IUser } from '../types/types';
import List from '../components/List';
import UserItem from '../components/UserItem/UserItem';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const UsersPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const history = useHistory();

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <List
      items={users}
      renderItem={(user: IUser) => (
        <UserItem
          onClick={(userParam) => history.push('/users/' + userParam.id)}
          user={user}
          key={user.id}
        />
      )}
    />
  );
};

export default UsersPage;
