import React, {Component} from 'react';
import { debounce } from "lodash";
import './MultiLine.css';

class MultiLine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input : "",
            result : "",
            language: "vb",
            sameLength: true
        }
        this.codeUrl = "https://github.com/ymlai87416/ymlai87416.github.io/blob/master/mytoolproject/tools/multiline/main.go"
        this.binUrl = "/mytool/bin/multiline.wasm"
        this.wasmModule = null 
    }

    async componentDidMount(){
        let { instance, module } = await WebAssembly.instantiateStreaming(fetch(this.binUrl), window.go.importObject)
        this.wasmModule = module
        await window.go.run(instance)
    }

    helper = debounce(() => { // this can also dispatch a redux action
        console.log("In helper")

        let result = window.multiline(this.state.input, this.state.language)

        this.setState({result: result})
    }, 300);

    
    handleChange = (e) => {
        this.setState({input: e.target.value});
        this.helper()
    }

    setLanguage(event) {
        console.log(event.target.value);
        this.setState({language: event.target.value})
    }

    render(){
        return(
            <div className="main">
                <h1>
                    Multiline code statement to just string
                </h1>
                <p>I hate removing all quote for getting back the SQL</p>
                <br/>
                <div>
                    Code URL: <a href={this.codeUrl}>{this.codeUrl}</a>
                </div>
                <br/><br/>
                <div className="table">
                    <div className="tr">
                        <span className="td"><h3>Input</h3></span>
                        <span className="td"><h3>Result</h3></span>
                    </div>
                    <div className="tr">
                        <span className="td">
                            <textarea className="taInput" rows = "10" cols = "80" name = "decimal" value={this.state.input}
                                onChange={this.handleChange}/>
                        </span>
                        <span className="td">
                            <textarea className="taInput" rows = "10" cols = "80" name = "binary" value={this.state.result} readOnly/>
                        </span>
                    </div>
                </div>

                <div onChange={this.setLanguage.bind(this)}>
                    <input type="radio" value="vb" name="gender" checked={true}/> Visual basic
                    <br/>
                    <input type="radio" value="java" name="gender"/> Java
                </div>
            </div> 
        )
    }
}


export default MultiLine;