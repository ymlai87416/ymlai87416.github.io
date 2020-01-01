import React from 'react';
import WordList from './WordList.js'

class Ielts7000 extends WordList {
    constructor(props) {
        super(props);
        this.distanceUrl = "https://ymlai87416.github.io/res/nearest-7000.txt"
        this.wordUrl = "https://ymlai87416.github.io/res/ietls-7000.txt"
        this.localStorageName = "ielts7000"; 
        this.headerText = "IELTS 7000 word list";
    }
}


export default Ielts7000;