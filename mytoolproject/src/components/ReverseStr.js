import React, {Component, useCallback} from 'react';
import { debounce } from "lodash";
import './ReverseStr.css';

class ReverseStr extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dec : "",
            bin : "",
        }
        this.codeUrl = "https://github.com/ymlai87416/ymlai87416.github.io/blob/master/mytoolproject/tools/reversestr/main.go"
        this.binUrl = "/mytool/bin/reversestr.wasm"
        this.wasmModule = null 
    }

    async componentDidMount(){
        let { instance, module } = await WebAssembly.instantiateStreaming(fetch(this.binUrl), window.go.importObject)
        this.wasmModule = module
        await window.go.run(instance)
    }

    helper = debounce(() => { // this can also dispatch a redux action
        console.log("In helper")
        let arr = this.state.in.split(/\r?\n/).map(line=>line.trim()).filter(line => line.length > 0);

        let result = window.reverse(...arr)

        console.log(result)

        this.setState({out: result.join("\n")})
    }, 300);
    
    
    handleChange = (e) => {
        this.setState({in: e.target.value});
        this.helper()
    }

    render(){
        return(
            <div className="main">
                <h1>
                    Reverse string
                </h1>
                <p>Reverse strings</p>
                <br/>
                <div>
                    Code URL: <a href={this.codeUrl}>{this.codeUrl}</a>
                </div>
                <br/><br/>
                <div className="table">
                    <div className="tr">
                        <span className="td"><h3>Input</h3></span>
                        <span className="td"><h3>Output</h3></span>
                    </div>
                    <div className="tr">
                        <span className="td">
                            <textarea className="taInput" rows = "10" cols = "60" name = "decimal" value={this.state.in}
                                onChange={this.handleChange}/>
                        </span>
                        <span className="td">
                            <textarea className="taInput" rows = "10" cols = "60" name = "binary" value={this.state.out} />
                        </span>
                    </div>
                </div>
            </div> 
        )
    }
}


export default ReverseStr;