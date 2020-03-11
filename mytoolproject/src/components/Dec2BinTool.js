import React, {Component, useCallback} from 'react';
import { debounce } from "lodash";
import './Dec2BinTool.css';

class Dec2BinTool extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dec : "",
            bin : "",
            sameLength: true
        }
        this.codeUrl = "https://github.com/ymlai87416/ymlai87416.github.io/blob/master/mytool/tools/dec2bin/main.go"
        this.binUrl = "https://ymlai87416.github.io/mytool/bin/dec2bin.wasm"
        this.wasmModule = null 
    }

    async componentDidMount(){
        let { instance, module } = await WebAssembly.instantiateStreaming(fetch(this.binUrl), window.go.importObject)
        this.wasmModule = module
        await window.go.run(instance)
    }

    dec2BinHelper = debounce(() => { // this can also dispatch a redux action
        console.log("In dec2BinHelper")
        let arr = this.state.dec.split(/\r?\n/).filter(line => line.trim().length > 0);
        let sameLen = this.state.sameLength

        let result = window.dec2Bin(...arr, sameLen)

        this.setState({bin: result.join("\n")})
    }, 300);
    

    bin2DecHelper = debounce(() => { // this can also dispatch a redux action
        console.log("In bin2DecHelper")
        let arr = this.state.bin.split(/\r?\n/).filter(line => line.trim().length > 0);
        let sameLen = this.state.sameLength

        let result = window.bin2Dec(...arr, sameLen)

        this.setState({dec: result.join("\n")})
    }, 300);

    
    handleDecChange = (e) => {
        this.setState({dec: e.target.value});
        this.dec2BinHelper()
    }

    handleBinChange = (e) => {
        this.setState({bin: e.target.value});
        this.bin2DecHelper()
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
                    Code URL: <a href={this.codeUrl}>{this.codeUrl}</a>
                </div>
                <br/><br/>
                <div className="table">
                    <div className="tr">
                        <span className="td"><h3>Decimal</h3></span>
                        <span className="td"><h3>Binary</h3></span>
                    </div>
                    <div className="tr">
                        <span className="td">
                            <textarea className="taInput" rows = "10" cols = "60" name = "decimal" value={this.state.dec}
                                onChange={this.handleDecChange}/>
                        </span>
                        <span className="td">
                            <textarea className="taInput" rows = "10" cols = "60" name = "binary" value={this.state.bin}
                                onChange={this.handleBinChange}/>
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