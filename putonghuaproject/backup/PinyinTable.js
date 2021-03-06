import React from 'react';
import PinyinGrid from './PinyinGrid.js';

//a grid that show character based 
class PinyinTable extends React.Component {


    constructor(props) {
        super(props);
        this.consonantList = ["b", "p", "m", "f", "d", "t", "n", "l", "g", "k", "h", "j", 
            "q", "x", "zh", "ch", "sh", "r", "z", "c", "s", ""];
        this.vowelList = ["i", "a", "o", "e", "ê", "ai", "ei", "ao", "ou", "an", "en", "ang", "eng", "er", 
            "i", "ia", "ie", "iao", "iu", "ian", "in", "iang", "ing", "u", "ua", "uo", "uia", "ui", "uan", 
            "un", "uang", "ueng", "ong", "ü", "üe", "üan", "ün", "iong"];
        this.listUrl = "https://raw.githubusercontent.com/ymlai87416/PSC_putonghua/master/pinyin_word.json";
        this.state = {
            errorMessage: "",
            content: []
        };
    }
    
    componentWillMount() {
        this.readList();
    }

    readList(){
        //read the list in following format
        //read the pinyin, find a vowel with accent, and convert it back to number
        var url = this.listUrl;
        fetch(url)
            .then(function (response) {
                if (response.ok) {
                    return response.text();
                }
                throw new Error('Error message.');
            })
            .then(function (data) {
                var myObject = JSON.parse(data);
                debugger
                this.setState({ content: myObject });
            }.bind(this))
            .catch(function (err) {
                this.setState({ content: [], errorMessage: "failed to load " + url + " " + err.message + err.line });
                console.log(this.state.errorMessage);
            }.bind(this));
    }

    render() {
        var header = this.renderHeader();
        var rows = this.consonantList.map((consonant, i) => this.renderRow(consonant, i));

        return (
            <table>
                {header}
                {rows}
            </table>
        )
    }

    renderHeader(){
        return(
            <thead>
                <tr> 
                    <th>&nbsp;</th> 
                    {this.vowelList.map((object, i) => <th key={i}>{object}</th>)}
                </tr>
            </thead>
        )
    }

    renderRow(consonant, rowNumber){
        var keyStart = rowNumber * this.vowelList.length
        return(
            <tbody>
                <tr> 
                    <td><b>{consonant}</b></td> 
                    {
                        this.vowelList.map((object, i) =>  this.renderGrid(consonant, object, keyStart+i))
                    }
                </tr>
            </tbody>
        )
    }

    renderGrid(consonant, vowel , key){
        return(
            <PinyinGrid consonant={consonant} vowel={vowel} key={key} content={this.state.content} />
        )
    }
}

export default PinyinTable;