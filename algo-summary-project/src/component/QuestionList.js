import React, {useState, useContext}  from 'react';
import classes from './QuestionList.module.css';
import {SearchResultContext} from '../App';

const initialState = [
  {id: 1, name: "Hello world", link: "http://www.google.com"},
  {id: 2, name: "Hello man", link: "http://www.facebook.com"}, 
  {id: 3, name: "Hello woman", link: "http://www.twitter.com"}
];

const getName = (path) => {
  const lastSegment = path.split("/").pop();
  return lastSegment;
}

function QuestionList(){
  const searchResultContext = useContext(SearchResultContext);

  return(
    <div className={classes.parent}>
      <ul>
      {
        searchResultContext.state.result.map((q, idx) => <li key={idx}><a href={q.path}>{getName(q.path)}</a></li>)
      }
      </ul>
    </div>
  );

}

export default QuestionList;