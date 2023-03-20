import React, {useState, useReducer, useEffect, useContext}  from 'react';
import classes from './TopicNote.module.css';
import {DBContext, SearchResultContext} from '../App';

//this is to show statistics of all the related topics

const formatName = (x) => {
  return x.replaceAll('_', ' ');
}

function TopicNote(){
  const searchResultContext = useContext(SearchResultContext);
  let topics = new Map();
  searchResultContext.state.result.forEach((obj) => {

    for (let i = 0; i < obj.topics.length; i++) {
      let tag = obj.topics[i];
      topics.set(
        tag,
        (topics.get(tag) || 0) + 1
      );
    }
  });

  //console.log(topics.entries());

  return(
    <div className={classes.parent}>
      {
        Array.from(topics.entries()).sort().map(([k,v], idx) => <div className={classes.topic} key={idx} >{formatName(k)} - {v}</div>)
      }
    </div>
  );

}

export default TopicNote;