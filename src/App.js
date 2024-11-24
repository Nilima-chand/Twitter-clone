// src/App.js
import React from 'react';
import "./App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed"
import { Divider } from '@material-ui/core';
import Widgets from './Widgets';

function App() {
 

  return (
   <div className='app'>
    <Sidebar/>
    {/*Feed section*/}
    <Feed />
    {/*Wedgets*/}
    <Widgets />
   </div>
  );
}

export default App;
