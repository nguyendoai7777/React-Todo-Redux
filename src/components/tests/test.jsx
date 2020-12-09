import React, { useState } from 'react';

export default function Test() {
  const [list, setList] = useState([
    {
      title: 'Go Out',
      id: 1,
      completed: false,
    },
    {
      title: 'Go Watch Movie',
      id: 2,
      completed: false,
    },
    {
      title: 'Go Drinking',
      id: 3,
      completed: false,
    },
    {
      title: 'Go Playing',
      id: 4,
      completed: false,
    },
  ]);

  const checkItem = (e) => {
    setList(
      list.map((item) => {
        if (item.id === e.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const deleteHandler = (item) => {
    console.log('delete: ', item);
    setList(list.filter(el => el.id !== item.id))
  }

  return (
    <div className='container m-auto'>
      {list.map((item) => (
        <div className='d-flex align-items-center' key={item.id}>
          <p className={`w-25 ${item.completed ? 'done' : ''}`}>{item.title}</p>
          <div className='btn btn-outline-primary ml-2' onClick={() => checkItem(item)}>
            Toggle
          </div>
          <div className='btn btn-outline-danger ml-2' onClick={() => deleteHandler(item)}>
            Delete
          </div>
        </div>
      ))}
    </div>
  );
}
