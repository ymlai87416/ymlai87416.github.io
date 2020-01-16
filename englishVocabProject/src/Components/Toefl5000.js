import React from 'react';
import WordList from './WordList.js'

class Toefl5000 extends WordList {
    constructor(props) {
        super(props);
        this.distanceUrl = "https://ymlai87416.github.io/res/nearest-5000.txt"
        this.wordUrl = "https://ymlai87416.github.io/res/toefl-5000.txt"
        this.localStorageName = "toefl5000"; 
        this.headerText = "TOEFL 5000 word list";
    }
}


export default Toefl5000;