import React, {Component} from 'react';
import  {useDispatch,useSelector} from 'react-redux';
import {switchHandler} from "../../state/actions";


export default function Navbar()  {
  const dispatch = useDispatch();
  const switchBoolean = useSelector(state=>state.switchMode.mode);
  const handlerSwitch = () => {
    dispatch(switchHandler());
  }

    return (
       <div style={{ backgroundColor: 'crimson' }}>
         <div className={`btn btn-outline-primary`} onClick={handlerSwitch}>
           Switch :))
         </div>
         {switchBoolean?  <h1>TRUE</h1>:<h1>False</h1>}
       </div>
    );

}

