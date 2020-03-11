import React from 'react';
import {
  BrowserRouter as Router,
  Switch, Route 
} from "react-router-dom";
import './App.css';
import ToolList from './components/ToolList.js'
import Dec2BinTool from './components/Dec2BinTool'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={'${process.env.PUBLIC_URL}/'} exact component = {ToolList} />
          <Route path={'${process.env.PUBLIC_URL}/dec2bin'} exact component = {Dec2BinTool} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
