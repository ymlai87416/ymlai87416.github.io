import React from 'react';

class Result extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
        var word = ""
        var relatedWords = []

        if(this.props.word){
            word = this.props.word.word;
            relatedWords = this.props.word.relatedWords;

            return (
                <div >
                    <h3 className="text-left">{word}</h3> 
                    <ul className="text-left">
                    {
                        relatedWords.map((line, idx) =>
                            <li key={idx}>{line}</li>)
                    }
                    </ul>
                </div>
            );
        }
        else{
            word = "";
            relatedWords = [];

            return(
                <div>
                    <p>^_^</p> 
                </div>
            )
        }

        
    }
}

export default Result;