import React from "react";
import TodoItem from "./todo.item";
const TodoList = ({todos, setTodos}) => {

  return (
    <ul>
      {todos.map(item => <TodoItem text={item.text} key={item.id} todos={todos} setTodos={setTodos}  todo={item} />)}
    </ul>
  );
}

export default TodoList;
