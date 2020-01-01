import React from 'react';
import WordList from './WordList.js'

class Ielts4000 extends WordList {
    constructor(props) {
        super(props);
        this.distanceUrl = "https://ymlai87416.github.io/res/nearest-4000.txt"
        this.wordUrl = "https://ymlai87416.github.io/res/ietls-4000.txt"
        this.localStorageName = "ielts4000"; 
        this.headerText = "IELTS 4000 word list";
    }
}


export default Ielts4000;