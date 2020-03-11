import React from 'react';
import {
  HashRouter, Route 
} from "react-router-dom";
import './App.css';
import ToolList from './components/ToolList.js'
import Dec2BinTool from './components/Dec2BinTool'

function App() {
  return (

    <HashRouter basename="/mytool"> 
      <div>
        <Route exact path="/" component={ToolList} />
        <Route path="/dec2bin" component={Dec2BinTool} />
      </div>
    </HashRouter>
  );
}


export default App;
