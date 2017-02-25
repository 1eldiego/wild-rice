import React from 'react';
import List from './List';
import './styles.less';

const todos = [
  {
    id: 'todo1',
    name: 'Comprar adornos navideños',
    done: false,
  },
  {
    id: 'todo2',
    name: 'Sacar la basura',
    done: true,
  },
];

const Todo = () => <List todos={todos} />;

export default Todo;
