import React from 'react';
import Search from './Search.js'
import Result from './Result.js'

class Ielts7000 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <Search></Search>
                <Result word="" relatedWords={[]}></Result>
            </div>
        );
    }

    search() {

    }
}

export default Ielts7000;