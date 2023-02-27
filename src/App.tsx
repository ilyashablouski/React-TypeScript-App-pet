import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import { CardVariant } from './components/Card/Card';
import UserList from './components/UserList';
import { ITodo, IUser } from './types/types';
import axios from 'axios';
import { List } from './components/List/List';
import UserItem from './components/UserList/UserItem';
import TodoItem from './components/TodoItem';

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchUsers();
    fetchTodos();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  }

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
      setTodos(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <>
      <Card variant={CardVariant.primary} height="200px" width="200px">
        <button>Кнопка</button>
        <p>Some children text</p>
      </Card>
      <List items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id} />} />
      <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />} />
    </>
  );
};

export default App;
