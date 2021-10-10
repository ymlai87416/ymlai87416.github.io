import React, {useState, useContext}  from 'react';
import classes from './Search.module.css';
import {DBContext, SearchResultContext} from '../App';

console.log(classes.parent)

const matchTag = (str, tags) => {
  str = str.toLowerCase().trim();
  let strz = str.split(' ');
  let ok = [];

  for(let j=0; j<strz.length; ++j){
    ok[j]= false;
  }

  for (let i = 0; i < tags.length; i++) {
    for(let j=0; j<strz.length; ++j){
      if(tags[i].trim().toLowerCase().includes(strz[j])) 
        ok[j] = true;
    }
    
  }
  return ok.every(x => x);
}

function Search(){
  const dbContext = useContext(DBContext);
  const searchResultContext = useContext(SearchResultContext);

  const handleChange = e => {
    var result = dbContext.state.content.filter(x => matchTag(e.target.value, x.topics));
    console.log(result);
    searchResultContext.dispatch({type: "search_completed", value: result});
  };

  return(
    <div className={classes.parent}>
        <input 
          className={classes.search}
          type = "search" 
          placeholder = "Search keyword here" 
          onChange = {handleChange}
        />
      </div>
  );

}

export default Search;