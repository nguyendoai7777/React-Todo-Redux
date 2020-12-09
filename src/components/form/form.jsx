import React, { useState } from "react";

const DForm = ({ inputText, setInputText, todos, setTodos }) => {
  let [key, setKey] = useState(0)
  const inputHandler = (e) => {
    setInputText(e.target.value);
  }

  const submitHandler = (e) => {
    setKey(key+1);
    e.preventDefault();
    setTodos([...todos, { text: inputText, completed: false, id: key }])
    console.log('do anythings ', key, todos)
    setInputText('');
  }

  return (
    <form className="form-group mt-5" >
      <div className="row no-gutters justify-content-between" >
        <input type="text" className="form-control col-md-10" value={inputText} onChange={inputHandler} autoFocus />
        <button className="btn btn-outline-primary col-md-1" type="submit" onClick={submitHandler} >add</button>
      </div>
    </form>
  );
}

export default DForm;
