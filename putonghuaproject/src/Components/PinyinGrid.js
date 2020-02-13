import React from 'react';

//a grid that show character based 
class PinyinGrid extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            consonant: props.consonant,
            vowel: props.vowel,
            content: props.content
        };
    }


    static getDerivedStateFromProps(nextProps, prevState){
        return {content : nextProps.content};
    }

    render() {
        const rowStyle = {
            marginLeft: '0px',
            marginRight: '0px'
        }
    
        const colStyle = {
            paddingRight: '0px',
            paddingLeft: '0px'
        }
        
        var pinyin = this.state.consonant + this.state.vowel
        var w1 = '_',  w2 = '_', w3 = '_', w4 = '_'
        var isEmpty = true
        var l1 = this.state.content.find(element => element["pinyin2"] === pinyin+"1")
        if (l1) {w1 = l1["list"][0]; isEmpty = false;}
        var l2 = this.state.content.find(element => element["pinyin2"] === pinyin+"2")
        if (l2) {w2 = l2["list"][0]; isEmpty = false;}
        var l3 = this.state.content.find(element => element["pinyin2"] === pinyin+"3")
        if (l3) {w3 = l3["list"][0]; isEmpty = false;}
        var l4 = this.state.content.find(element => element["pinyin2"] === pinyin+"4")
        if (l4) {w4 = l4["list"][0]; isEmpty = false;}

        if(isEmpty)
            w1=w2=w3=w4=''

        return (
            <div className="col border" style={colStyle} >
                <div className="row" style={rowStyle}>
                    <div className="col mini-box" style={colStyle}>{w1}</div>
                    <div className="col mini-box" style={colStyle}>{w2}</div>
                </div>
                <div className="row" style={rowStyle}>
                    <div className="col mini-box" style={colStyle}>{w3}</div>
                    <div className="col mini-box" style={colStyle}>{w4}</div>
                </div>
            </div>
        )
    }
}

export default PinyinGrid;