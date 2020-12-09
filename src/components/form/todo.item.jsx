import React from "react";
const TodoItem = ({text, todo, todos, setTodos}) => {
  const deleteHandler = () => {
    setTodos(todos.filter(el => el.id !== todo.id))
  }
  const completeHandler = () => {
    setTodos(todos.map(item => {
      if (item.id === todo.id) {
        return { ...item, complete: !item.complete}
      }
      console.log(item);
      return item;
    }))
  }
  return (
    <li className={`row no-gutters alert alert-${todo.complete? 'secondary' : 'success'}`} style={{transition: '.3s'}}>
      <div className="col-md-9" style={{color: todo.complete? 'grey': '', textDecoration: todo.complete? 'line-through': ''}}>{text} </div>
      <i className={` ml-auto mr-4 mdx ${todo.complete ? 'md-not-check' : 'md-tick-check'}`}/>
      <div className={`btn ${todo.complete? 'btn-secondary' : ' btn-success '} col-md-1`} onClick={completeHandler}>{todo.complete? 'Not Done' : 'Done'}</div>
      <div className="btn btn-danger col-md-1 ml-2" onClick={deleteHandler}>Del</div>
    </li>
  );
}

export default TodoItem;
