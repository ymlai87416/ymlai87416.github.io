import React from 'react';

class Search extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
            <input type="text" placeholder="Enter your word here."></input>
        </div> 
      );
    }
}

export default Search;