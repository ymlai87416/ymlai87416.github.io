import logo from './logo.svg';
import React, {useState, useReducer, useEffect}  from 'react';
import classes from './App.css';
import axios from 'axios';
import Search from './component/Search'
import TopicNote from './component/TopicNote'
import QuestionList from './component/QuestionList'

export const DBContext = React.createContext();
export const SearchResultContext = React.createContext();

const reducer = (state, action) => {
  switch(action.type){
    case "fetch_success":
      return {...state, load: true, content: action.value};
    case "fetch_error":
      return {...state, load: true, content: null, error: action.value};
    default:
      return state;
  }
}

const initialState = {
  load: false,
  content: [],
  error: "",
}

const searchReducer = (state, action) => {
  switch(action.type){
    case "search_completed":
      return {...state, result: action.value};
      break;
    default:
      return state;
  }
}

const searchInitialState = {
  result: [],
}

function App() {

  const [db, dbDispatch] = useReducer(reducer, initialState)
  const [searchResult, searchResultDispatch] = useReducer(searchReducer, searchInitialState)

  //use context
  useEffect(() => {
      axios.get("./index.json")
      .then(res => {
        dbDispatch({type: "fetch_success", value: res.data})
      })
      .catch(err => {
        console.log(err)
        dbDispatch({type: "fetch_error", value: err})
      })

  });

  return (
    <DBContext.Provider value ={{ state: db, dispatch: dbDispatch}} >
      <SearchResultContext.Provider value={{state: searchResult, dispatch: searchResultDispatch}}>

        <div className="App">
          <div>
            <Search/>
          </div>
          <div className="parent">
            <div className="question">
              <QuestionList />
            </div>
            <div className="topic">
              <TopicNote />
            </div>
          </div>
          <div className="links">
            <h3> Userful links: </h3>
            <ul>
              <li><a href='https://www.mindmeister.com/2021534788/algorithm'>Mind map</a></li>
              <li><a href='https://uhunt.onlinejudge.org/'>UVaHunt</a></li>
            </ul>
          </div>
        </div>

      </SearchResultContext.Provider>
    </DBContext.Provider>
  );
}

export default App;
