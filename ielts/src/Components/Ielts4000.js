import React from 'react';
import Search from './Search.js'
import Result from './Result.js'

class Ielts4000 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    loadIelts4000List() {
        var url = "";
        fetch(url)
            .then(function (response) {
                if (response.ok) {
                    return response.text();
                }
                throw new Error('Error message.');
            })
            .then(function (data) {
                console.log("data: ", data);
                var lines = data.split("\n");
                var parsedData = lines.map(line => {
                    var word = line.split(':')[0]
                    var relatedWords = line.split(':')[1].split(",")

                    return {
                        word: word,
                        relatedWords: relatedWords
                    }
                }); 

                this.setState({ content: parsedData });
            }.bind(this))
            .catch(function (err) {
                console.log("failed to load ", url, err.message);
            });
    }

    componentDidMount() {
        if (typeof (Storage) !== "undefined") {
            if (!localStorage.ielts4000List) {
                localStorage.ielts4000List = this.loadIelts4000List();
            }
            document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
        } else {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
        }
    }

    render() {
        return (
            <div>
                <Search></Search>
                <Result word="" relatedWords={[]}></Result>
            </div>
        );
    }
}


export default Ielts4000;