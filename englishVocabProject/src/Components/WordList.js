import React from 'react';
import Result from './Result.js'

class WordList extends React.Component {
    constructor(props) {
        super(props);
        this.distanceUrl = null;
        this.wordUrl = null;
        this.localStorageName = null; 
        this.headerText = null;
        this.state = {
            errorMessage: "",
            content: [],
            word: null
        };
    }

    loadWordList() {
        var url = this.distanceUrl;
        fetch(url)
            .then(function (response) {
                if (response.ok) {
                    return response.text();
                }
                throw new Error('Error message.');
            })
            .then(function (data) {
                //console.log("data: ", data);
                var lines = data.split("\n");
                var parsedData = lines.map(line => {
                    var record = line.split(':')
                    var word = record[0]
                    var relatedWords = []
                    if (record.length > 1) {
                        relatedWords = record[1].split(",")
                    }

                    return {
                        word: word,
                        relatedWords: relatedWords
                    }
                });

                this.setState({ content: parsedData });
            }.bind(this))
            .catch(function (err) {
                this.setState({ content: [], errorMessage: "failed to load " + url + " " + err.message + err.line });
                console.log(this.state.errorMessage);
            }.bind(this));
    }

    componentDidMount() {
        if (typeof (Storage) !== "undefined") {
            this.loadWordList();
        } else {
            this.setState({ errorMessage: "Sorry, your browser does not support web storage..." });
        }
    }

    render() {
        return (
            <div className="container">
                <br></br>
                <h2>{this.headerText}</h2> 
                <br></br>
                <div className="input-group input-group-sm mb-3">
                    <input className="form-control" type="text" placeholder="Enter your word here." onKeyDown={this._handleKeyDown}></input>
                </div>
                <Result word={this.state.word}></Result>
                <p>{this.state.errorMessage}</p>

                <br/>
                <br/>
                <div className="text-right">
                    <p>Related resources: </p> 
                    <a href={this.wordUrl} >Word list</a>
                    <br />
                    <a href={this.distanceUrl} >Similar words</a>
                </div>
                
            </div>
        );
    }

    _handleKeyDown = (evt) => {
        if (evt.key === 'Enter') {
            var word = evt.target.value;
            evt.target.value = "";
            var matchedEntry = this.state.content.find(function(item, index, array){
                return item.word == word;
              });

            if(matchedEntry)
                this.setState({word: matchedEntry})
        }
    }
}


export default WordList;