import React from 'react';
import Card from './components/Card';
import { CardVariant } from './components/Card/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';

const users: IUser[] = [
  {
    id: 1,
    name: 'Leanne Graham',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      city: 'Gwenborough',
      zipcode: '92998-3874',
    },
  },
  {
    id: 2,
    name: 'Ervin Howell',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
    },
  },
];

const App = () => {
  return (
    <div>
      <Card variant={CardVariant.primary} height="200px" width="200px">
        <button>Кнопка</button>
        <p>Some children text</p>
      </Card>
      <UserList users={users} />
    </div>
  );
};

export default App;
