import React from 'react';
import {
  HashRouter, Route 
} from "react-router-dom";
import './App.css';
import ToolList from './components/ToolList.js'
import Dec2BinTool from './components/Dec2BinTool'
import ReverseStr from './components/ReverseStr'
import MultiLine from './components/MultiLine'
import Kelly from './components/Kelly'

function App() {
  return (

    <HashRouter basename="/mytool"> 
      <div>
        <Route exact path="/" component={ToolList} />
        <Route path="/dec2bin" component={Dec2BinTool} />
        <Route path="/reverseStr" component={ReverseStr} />
        <Route path="/multiLine" component={MultiLine} />
        <Route path="/kelly" component={Kelly} />
      </div>
    </HashRouter>
  );
}


export default App;
