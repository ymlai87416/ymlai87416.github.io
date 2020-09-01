import React from 'react';
import PinyinGrid from './PinyinGrid.js';

//a grid that show character based 
class PinyinTable extends React.Component {


    constructor(props) {
        super(props);
        this.consonantList = ["b", "p", "m", "f", "d", "t", "n", "l", "g", "k", "h", "j", 
            "q", "x", "zh", "ch", "sh", "r", "z", "c", "s", ""];
        this.vowelList = ["a", "o", "e", "ê", "ai", "ei", "ao", "ou", "an", "en", "ang", "eng", "er", 
            "i", "ia", "ie", "iao", "iu", "ian", "in", "iang", "ing", "u", "ua", "uo", "uai", "ui", "uan", 
            "un", "uang", "ueng", "ong", "ü", "üe", "üan", "ün", "iong"];
        this.listUrl = "https://ymlai87416.github.io/res/pinyin_word.json";
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
                //debugger
                this.setState({ content: myObject });
            }.bind(this))
            .catch(function (err) {
                this.setState({ content: [], errorMessage: "failed to load " + url + " " + err.message + err.line });
                console.log(this.state.errorMessage);
            }.bind(this));
    }

    render() {
        const style={
            minWidth:'1500px'
        }
        var header = this.renderHeader();
        var rows = this.consonantList.map((consonant, i) => this.renderRow(consonant, i));

        return (
            <div className="container-fluid" style={style}>
                {header}
                {rows}
            </div>
        )
    }

    renderHeader(){
        const colStyle = {
            paddingRight: '0px',
            paddingLeft: '0px'
        }
        return(
            <div className="row"> 
                <div className="col" style={colStyle}>&nbsp;</div> 
                {this.vowelList.map((object, i) => <div className="col" key={i}  style={colStyle}>{object}</div>)}
            </div>
        )
    }

    renderRow(consonant, rowNumber){
        const colStyle = {
            paddingRight: '0px',
            paddingLeft: '0px'
        }

        var keyStart = rowNumber * this.vowelList.length
        return(
            <div className="row"> 
                <div className="col border" style={colStyle}><b>{consonant}</b></div> 
                {
                    this.vowelList.map((object, i) =>  this.renderGrid(consonant, object, keyStart+i))
                }
            </div>
        )
    }

    renderGrid(consonant, vowel , key){
        return(
            <PinyinGrid consonant={consonant} vowel={vowel} key={key} content={this.state.content} />
        )
    }
}

export default PinyinTable;