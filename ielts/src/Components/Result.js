import React from 'react';

class Result extends React.Component {
    constructor(props) {
      super(props);
      this.state = {word: props.word, relatedWords: props.relatedWords};
    }
  
    render() {
        return (
            <div>
                <div>{this.state.word}</div> 
                <div>
                {
                    this.state.relatedWords.map((word) =>
                        <div>word.text word.distance</div>)
                }
                </div>
            </div>
        );
    }
}

export default Result;