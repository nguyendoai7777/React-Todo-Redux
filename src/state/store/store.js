import React from 'react';
import {configureStore} from '@reduxjs/toolkit';
import  {Provider} from 'react-redux';
import rootReducer from "../reducers";

const storeApp = configureStore({
  reducer:rootReducer,
})

const store = props =>{
  return <Provider store={storeApp}>{props.children}</Provider>
}
export  default  store;
