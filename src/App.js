import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import DForm from './components/form/form';
import TodoList from './components/form/todo.list';
import MyForm from './components/my-form/myForm';
import Test from './components/tests/test';
import Clock from './layouts/Clock/clock';
import Clock2 from './layouts/Clock/clock2';
import MagicBox from './layouts/MagicBox/magicBox';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import {useSelector} from "react-redux";

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [sb, setSb] = useState(true);
  const swithVal = useSelector(state => state.switchMode.mode);
  


  const handleMyForm = (formValues) => {
    console.log('formValues', formValues);
    let newValues = [...todos];
    let newTodos = {
      ...formValues,
    };
    newValues.push(newTodos);
    setInputText(newValues);
  };
  return (
    <Router>
      <Navbar />
      {swithVal? 'true' : 'false'}
      <div className='App container'>
        <DForm
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
        />
        <TodoList todos={todos} setTodos={setTodos} />
        <br />
        <br />
        <MyForm onSubmit={handleMyForm} />
      </div>
      <div className='btn btn-outline-primary'>
        <Link to='/clock'>Go Clock</Link>
      </div>
      <div className='btn btn-outline-primary'>
        <Link to='/test'>Go Test</Link>
      </div>
      <div
        className='btn btn-outline-primary'
        onClick={() => {
          setSb(false);
        }}
      >
        Hide Clock
      </div>
      <Clock />
      <br />
      {sb && <Clock2 />}

      <MagicBox />
      <Switch>
        <Route path='/clock' component={Clock}/>
        <Route path='/test' component={Test}/>
      </Switch>
    </Router>
  );
}

export default App;
