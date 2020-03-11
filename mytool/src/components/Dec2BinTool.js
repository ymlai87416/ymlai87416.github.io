import React, {Component} from 'react';
import './Dec2BinTool.css';

class Dec2BinTool extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input : "",
            output : "",
            sameLength: true
        }
        var codeUrl = "https://www.google.com"
        var binUrl = ""
    }

    

    async componentDidMount(){
        let { instance, module } = await WebAssembly.instantiateStreaming(fetch(this.binUrl), window.go.importObject)
        await window.go.run(instance)
    }

    executeForward(){
        //in here call wasm module and execute the conversion.
        alert("Hello world from executeForward!!")
    }

    executeBackward(){
        //in here call wasm module and execute the conversion.
        alert("Hello world from executeBackward!!")
    }

    flipSameLength(){
        this.setState({sameLength: !this.state.sameLength})
    }

    render(){
        return(
            <div>
                <h1>
                    Decimal 2 binary converter
                </h1>
                <p>Convert a list of decimal to binary format, because Excel does not do it...</p>
                <br/>
                <div>
                    Code URL: <a href={codeUrl}>{codeUrl}</a>
                </div>
                <br/><br/>
                <div className="table">
                    <div className="tr">
                        <span className="td"><h3>Decimal</h3></span>
                        <span className="td"><h3>Binary</h3></span>
                    </div>
                    <div className="tr">
                        <span className="td">
                            <textarea className="taInput" rows = "10" cols = "60" name = "decimal" 
                                onChange={this.executeForward.bind(this)}/>
                        </span>
                        <span className="td">
                            <textarea className="taInput" rows = "10" cols = "60" name = "binary" 
                                onChange={this.executeBackward.bind(this)}/>
                        </span>
                    </div>
                </div>

                <span>
                    <label htmlFor="sameLength"> Same length in result</label>
                    <input type="checkbox" id="sameLength" checked={this.state.sameLength} onChange={this.flipSameLength.bind(this)}/>
                </span>
            </div> 
        )
    }
}


export default Dec2BinTool;