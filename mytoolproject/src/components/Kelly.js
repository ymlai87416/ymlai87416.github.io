import React, {Component} from 'react';
import './Kelly.css';
import MathJax from 'react-mathjax';
import {FindMinimum} from './Cobyla'

class Dec2BinTool extends Component {
    constructor(props) {
        super(props);
        this.state = {
            win1 : 0,
            odds1 : 0,
            bankroll1: 0,
            result1: 0,
            return1: 0,
            kellyM : [{win: 0, odds: 0, result: 0}, ],
            bankrollM: 0,
            returnM: 0,
            rowM: 1,
            //stock 1
            bankrollS1: 0,
            meanS1: 0,
            stdS1: 0,
            optFS1: 0,
            expectRS1: 0,
            //stock 2 
            bankrollS2: 0,
            pS2: 0,
            qS2: 0,
            gainS2: 0,
            lossS2: 0,
            optFS2: 0,
        }
    }

    kelly1 = (bankroll, win, odds) => {
        console.log("R", bankroll, win, odds);
        var fbankroll = parseFloat(bankroll)
        var fwin = parseFloat(win)
        var fodds = parseFloat(odds)

        return fbankroll * (fwin - (1-fwin)/fodds);
    }

    kellyStock1 = (bankroll, mean, std) => {
        //return the optimal f and the expected return
        var fbankroll = parseFloat(bankroll);
        var fmean = parseFloat(mean);
        var fstd = parseFloat(std);
        var opt_f = fmean/fstd/fstd;
        var ret = 0.5 * fmean * fmean / fstd / fstd;

        return [fbankroll* opt_f, ret];
    }

    setBankroll1 = (value) => {
        //const parsed = parseFloat(value)
        //if(isNaN(parsed)) return;
        this.setState({bankroll1: value, result1: this.kelly1(value, this.state.win1, this.state.odds1)})
    }

    setWin1 = (value) => {
        //const parsed = parseFloat(value)
        //if(isNaN(parsed)) return;
        this.setState({win1: value, result1: this.kelly1(this.state.bankroll1, value, this.state.odds1)})
    }

    setOdds1 = (value) => {
        //const parsed = parseFloat(value)
        //if(isNaN(parsed)) return;
        this.setState({odds1: value, result1: this.kelly1(this.state.bankroll1, this.state.win1, value)})
    }

    setBankrollM = (value) => {
        this.setState({bankrollM: value,});
    }

    handleWinMChange = (index, value) => {
        var items = this.state.kellyM;
        items[index].win  = value;

        this.setState({
            kellyM: items
        });
    }

    handleOddsMChange = (index, value) => {
        var items = this.state.kellyM;
        items[index].odds  = value;

        this.setState({
            kellyM: items
        });
    }

    setRowM = (value) => {
        this.setState(
            {rowM: value, }
        );
    }

    handleRowChange = () => {
        let curLen = this.state.kellyM.length;
        if(curLen === this.state.rowM) return;

        if(curLen > this.state.rowM){
            var rlen=  this.state.rowM-curLen;
            this.state.kellyM.splice(rlen);
        }
        else{
            while(this.state.kellyM.length < this.state.rowM)
                this.state.kellyM.push({win: 0, odds: 0, result: 0})
        }
        this.setState(
            {kellyM: this.state.kellyM }
        )
    }

    setBankRollS1 = (value) => {
        var optF, ret;
        [optF, ret] = this.kellyStock1(value, this.state.meanS1, this.state.stdS1);

        this.setState({
            bankrollS1: value, 
            optFS1: optF,
            expectRS1: ret,
        });

    }

    setMeanS1 = (value) => {
        var optF, ret;
        [optF, ret] = this.kellyStock1(this.state.bankrollS1, value, this.state.stdS1);

        this.setState({
            meanS1: value, 
            optFS1: optF,
            expectRS1: ret,
        });

    }

    setStdS1 = (value) => {
        var optF, ret;
        [optF, ret] = this.kellyStock1(this.state.bankrollS1, this.state.meanS1, value);

        this.setState({
            stdS1: value, 
            optFS1: optF,
            expectRS1: ret,
        });
    }


    async componentDidMount(){
    }
 
    loadDebug = () => {
        //0.229, 0.457, 0.0571, 0.114, 0.143
        this.setState({
            bankrollM: 10000,
            rowM: 5,
            kellyM: [{win: 0.229, odds: 4, result: 0}, 
                {win: 0.457, odds: 4, result: 0}, 
                {win: 0.0571, odds: 4, result: 0}, 
                {win: 0.114, odds: 4, result: 0}, 
                {win: 0.143, odds: 4, result: 0}, 
            ]
        });
    }

    createRandomStart = (x, maxValue) => {
        for(var i=0; i<x.length; ++i)
            x[i] =  Math.floor(Math.random() * maxValue);
    }

    hanldeSubmit = () => {
        var n=this.state.rowM; 			// + of variables
        var x=new Array(n);
        var m=this.state.rowM+1; 			// number of constraints
        var rhobeg = 20.0;	// Various Cobyla constants, see Cobyla docs in Cobyja.js
        var rhoend = 1.0e-6;
        var iprint = 0;
        var maxfun = 3500;
        var fmaxiter = 20;

        //now convert the whole data into float
        var fodds = [];
        var fwin = [];
        for(var i=0; i<n; ++i){
            fwin.push(parseFloat(this.state.kellyM[i].win));
            fodds.push(parseFloat(this.state.kellyM[i].odds));
        }

        var fbankroll = parseFloat(this.state.bankrollM);

        console.log("Here are the calculation argument.");
        console.log(fwin);
        console.log(fodds);
        console.log(fbankroll);

        function test(n,m,x,con) {  	// objective function
            var sumB = 0;
            for(var i=0; i<n; ++i)
                sumB += x[i];

            var g = 0;
            for(var i=0; i<n; ++i){
                con[i] = x[i];
                g = g + fwin[i] * Math.log(fbankroll + x[i] * fodds[i] - sumB);
            }
            g = -Math.exp(g); 
            con[n] = fbankroll - sumB;
            //console.log("x: "+ x);
            //console.log("g: "+ g);
            return g //to minimize
        }

        //debug 
        //x[0] = 714.2797;
        //x[1] = 2999.99;

        var bestx = null;
        var bestG = 0;

        //This implementation cannot converge, so I just random sample starting point to make it better.
        for(var i=0; i<200; ++i){
            this.createRandomStart(x, fbankroll/n);
            //x[i] = 0;
            //console.log("start x: "+ x);
            var r=FindMinimum(test, n,  m, x, rhobeg, rhoend,  iprint,  maxfun, fmaxiter);
            var curG = this.calcG(x, fbankroll, fwin, fodds);
            if(curG < bestG){
                bestG = curG;
                bestx = x;
            }
        }
        
        //now update all the param and set state
        for(var i=0; i<n; ++i){
            this.state.kellyM[i].result = bestx[i].toFixed(2);
        }

        this.setState({
            kellyM: this.state.kellyM
        });

    }

    calcG = (x, fbankroll, fwin, fodds) => {
        var n = x.length;
        var sumB = 0;
        for(var i=0; i<n; ++i)
            sumB += x[i];

        var g = 0;
        for(var i=0; i<n; ++i){
            g = g + fwin[i] * Math.log(fbankroll + x[i] * fodds[i] - sumB);
        }
        return -Math.exp(g); 
    }

    kellyStock2 = (bankroll, p, q, a, b) => {
        var fbankroll = parseFloat(bankroll);
        var fp = parseFloat(p);
        var fq = parseFloat(q);
        var fa = parseFloat(a);
        var fb = parseFloat(b);

        return fbankroll * (fp/fa - fq/fb);
    }

    setBankrollS2 = (value) => {
        var optF = this.kellyStock2(value, this.state.pS2, this.state.qS2, this.state.gainS2, this.state.lossS2);

        this.setState({
            bankrollS2: value, 
            optFS2: optF,
        });
    }

    setPS2 = (value) =>{
        var optF = this.kellyStock2(this.state.bankrollS2, value, this.state.qS2, this.state.gainS2, this.state.lossS2);

        this.setState({
            pS2: value, 
            optFS2: optF,
        });
    }

    setAS2 = (value) => {
        var optF = this.kellyStock2(this.state.bankrollS2, this.state.pS2, this.state.qS2, value, this.state.lossS2);

        this.setState({
            gainS2: value, 
            optFS2: optF,
        });
    }

    setQS2 = (value) =>{
        var optF = this.kellyStock2(this.state.bankrollS2, this.state.pS2, value, this.state.gainS2, this.state.lossS2);

        this.setState({
            qS2: value, 
            optFS2: optF,
        });
    }

    setBS2 = (value) => {
        var optF = this.kellyStock2(this.state.bankrollS2, this.state.pS2, this.state.qS2, this.state.gainS2, value);

        this.setState({
            lossS2: value, 
            optFS2: optF,
        });
    }

    render(){

        let simpleKelly = `f^*  = p - \\frac{1-p}{b}`;
        let stock1Kelly = `f^* = \\frac{\\mu}{\\sigma^2}`;
        let stock1KellyReturn = `E(return) = 0.5 * \\frac{\\mu^2}{\\sigma^2}`;
        let stock2Kelly = `f^* = \\frac{p}{a} - \\frac{q}{b}`;
        let horseKelly1 = `\\underset{B}{\\text{max}} \\qquad G =  \\sum_{i=1}^{n} ln(T + B_i * O_i - \\sum_{i=1}^{n} B_i) `;
        let horseKelly2 = `\\displaylines{ \\text{subject to} \\qquad B \\geq 0 \\\\ and \\qquad \\sum_{i=1}^{n} B_i \\leq bankroll }`;
        let kellyInputStyle = {
            minWidth:"150px", display:"inline-block", marginLeft: 25, marginRight: 25,
            textAlign: "right",
        };

        return(

            
            <MathJax.Provider> 
                <div className="main">
                    <h1>
                        Kelly calculator
                    </h1>
                    <p>Tools for win/loss, stock and horse win scenario </p>
                    <br/>
                    <div>
                        <p> COBYLA Code URL: <a href="https://github.com/smee/cobyla2">Github</a> </p>
                        <p> Paul Wilmott on Quantitative Finance, Chapter 17, Kelly criterion <a href="https://github.com/smee/cobyla2">Youtube</a> </p>
                        <p> Kelly wiki <a href="https://en.wikipedia.org/wiki/Kelly_criterion">Link</a> </p>
                    </div>
                    <br/><br/>
                    <div className="table">
                        <div className="tr">
                            <p>For a game, the kelly criterion can be calculated as follow:</p>
                            <MathJax.Node formula={simpleKelly} />
                        </div>
                        <div className="tr">
                            <form>
                            <label>
                                <div style={{ minWidth:"150px", display:"inline-block"}}> Bankroll: </div>
                                <input
                                style={{ width:"200px"}}
                                type="number" 
                                value={this.state.bankroll1}
                                onChange={(e) => this.setBankroll1(e.target.value)}
                                />
                            </label>
                            <br/>
                            <label>
                                <div style={{ minWidth:"150px", display:"inline-block"}}> Wins: </div>
                                <input
                                type='number'
                                step="0.1"
                                min='0'
                                max='99999'
                                style={{ width:"200px" }}
                                value={this.state.win1}
                                onChange={(e) => this.setWin1(e.target.value)}
                                />
                            </label><br/>
                            <label>
                                <div style={{ minWidth:"150px", display:"inline-block"}}> Odds: </div>
                                <input
                                type="number" 
                                step="0.1"
                                min='0'
                                max='1'
                                style={{ width:"200px" }}
                                value={this.state.odds1}
                                onChange={(e) => this.setOdds1(e.target.value)}
                                />
                            </label><br/>
                            <label>
                                <div style={{ minWidth:"150px", display:"inline-block"}}> Result: </div>
                                <input
                                type="text" 
                                readOnly={true}
                                style={{ width:"200px" }}
                                value={this.state.result1}
                                />
                            </label>
                            </form>
                        </div>
                    </div>

                    <div className="table">
                        <div className="tr">
                            <p>For stock, i have a strategy, with average return μ and standard deviation σ, calculate how much I should bet on it.</p>
                            <MathJax.Node formula={stock1Kelly} />
                            <MathJax.Node formula={stock1KellyReturn} />
                        </div>
                        <div className="tr">
                            <form>
                            <label>
                                <div style={{ minWidth:"150px", display:"inline-block"}}> Bankroll: </div>
                                <input
                                style={{ width:"200px"}}
                                type="number" 
                                value={this.state.bankrollS1}
                                onChange={(e) => this.setBankRollS1(e.target.value)}
                                />
                            </label>
                            <br/>
                            <label>
                                <div style={{ minWidth:"150px", display:"inline-block"}}> Mean: </div>
                                <input
                                type='number'
                                style={{ width:"200px" }}
                                value={this.state.meanS1}
                                onChange={(e) => this.setMeanS1(e.target.value)}
                                />
                            </label><br/>
                            <label>
                                <div style={{ minWidth:"150px", display:"inline-block"}}> Standard deviation: </div>
                                <input
                                type="number" 
                                style={{ width:"200px" }}
                                value={this.state.stdS1}
                                onChange={(e) => this.setStdS1(e.target.value)}
                                />
                            </label><br/>
                            <label>
                                <div style={{ minWidth:"150px", display:"inline-block"}}> Optimal f*: </div>
                                <input
                                type="text" 
                                readOnly={true}
                                style={{ width:"200px" }}
                                value={this.state.optFS1}
                                />
                            </label><br/>
                            <label>
                                <div style={{ minWidth:"150px", display:"inline-block"}}> E(return): </div>
                                <input
                                type="text" 
                                readOnly={true}
                                style={{ width:"200px" }}
                                value={this.state.expectRS1}
                                />
                            </label>
                            </form>
                        </div>
                    </div>

                    <div className="table">
                        <div className="tr">
                            <p>For stock, i have a trade with profit taker and loss taker, calculate how much bet I need</p>
                            <MathJax.Node formula={stock2Kelly} />
                        </div>
                        <div className="tr">
                            <form>
                            <label>
                                <div style={{ minWidth:"150px", display:"inline-block"}}> Bankroll: </div>
                                <input
                                style={{ width:"200px"}}
                                type="number" 
                                value={this.state.bankrollS2}
                                onChange={(e) => this.setBankrollS2(e.target.value)}
                                />
                            </label>
                            <br/>
                            <label>
                                <div style={{ minWidth:"150px", display:"inline-block"}}> Win prob(p): </div>
                                <input
                                type='number'
                                step="0.1"
                                min='0'
                                max='1'
                                style={{ width:"200px" }}
                                value={this.state.pS2}
                                onChange={(e) => this.setPS2(e.target.value)}
                                />
                            </label><br/>
                            <label>
                                <div style={{ minWidth:"150px", display:"inline-block"}}> Gain% (b): </div>
                                <input
                                type="number" 
                                step="0.1"
                                style={{ width:"200px" }}
                                value={this.state.lossS2}
                                onChange={(e) => this.setBS2(e.target.value)}
                                />
                            </label><br/>

                            
                            <label>
                                <div style={{ minWidth:"150px", display:"inline-block"}}> Loss prob(p): </div>
                                <input
                                type='number'
                                step="0.1"
                                min='0'
                                max='1'
                                style={{ width:"200px" }}
                                value={this.state.qS2}
                                onChange={(e) => this.setQS2(e.target.value)}
                                />
                            </label><br/>

                            <label>
                                <div style={{ minWidth:"150px", display:"inline-block"}}> Loss% (a): </div>
                                <input
                                type="number" 
                                step="0.1"
                                style={{ width:"200px" }}
                                value={this.state.gainS2}
                                onChange={(e) => this.setAS2(e.target.value)}
                                />
                            </label><br/>
                            
                            <label>
                                <div style={{ minWidth:"150px", display:"inline-block"}}> Optimial: </div>
                                <input
                                type="text" 
                                readOnly={true}
                                style={{ width:"200px" }}
                                value={this.state.optFS2}
                                />
                            </label>
                            </form>
                        </div>
                    </div>

                    <div className="table">

                        <div className="tr">
                            <p>This is for horse win scenario, P is the probability vector, B is the vector of bet, O is vector of odds</p>
                            <p>This impl. use COBYLA for non-linear optimzation</p>
                            <MathJax.Node formula={horseKelly1} />
                            <MathJax.Node formula={horseKelly2} />
                        </div>

                        <div className="tr">
                        <form>
                            <label style={{ minWidth:"150px", display:"inline-block"}}>Bank roll: </label>
                            <input type="number" name="bankroll" value={this.state.bankrollM} onChange={e => this.setBankrollM(e.target.value)} />
                            <div>
                                <label style={{ minWidth:"200px", display:"inline-block"}}>Win</label>
                                <label style={{ minWidth:"200px", display:"inline-block"}}>Odds</label>
                                <label style={{ minWidth:"200px", display:"inline-block"}}>Result</label>
                            </div>
                            {this.state.kellyM.map((element, index) => (
                                <div className="form-inline" key={index}>
                                
                                <input style={kellyInputStyle} type="number" name="win" value={element.win} onChange={e => this.handleWinMChange(index, e.target.value)} />
                                
                                <input style={kellyInputStyle} type="number" name="odds" value={element.odds} onChange={e => this.handleOddsMChange(index, e.target.value)} />
                                
                                <input style={kellyInputStyle} type="number" name="kelly" readOnly={true} value={element.result}/>
                                </div>
                            ))}
                            <br/>
                            <div className="button-section">
                                <input type="number" name="rownumber" value={this.state.rowM} onChange={e => this.setRowM(e.target.value)}/>  
                                <button className="button add" type="button" onClick={() => this.handleRowChange()}>Change</button>
                                <button className="button add" type="button" onClick={() => this.loadDebug()}>Debug</button>
                                <button className="button submit" type="button" onClick={this.hanldeSubmit}>Calculate</button>
                            </div>
                        </form>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div>Written by tom</div>
                </div> 
            </MathJax.Provider> 
        )
    }
}

/*
<label style={{ minWidth:"100px", display:"inline-block"}}>Win</label><label style={{ minWidth:"100px", display:"inline-block"}}>Odds</label><label style={{ minWidth:"100px", display:"inline-block"}}>Result</label>
*/

export default Dec2BinTool;