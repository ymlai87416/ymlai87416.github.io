import React, {Component} from 'react';

class ToolList extends Component {
    state = {
        tools: []
    }

    componentDidMount(){
        //hard code all the tools here
        var arr = [ 
            {
                title: 'Decimal/Binary converter',
                path: '#/dec2bin',
            },
            {
                title: 'Reverse string',
                path: '#/reverseStr',
            },
            {
                title: 'Multiline',
                path: '#/multiline',
            },
            {
                title: 'Table format to insert SQL',
                path: '#/table2SQL',
            },
         ];
        this.setState({tools: arr})
    }

    render(){
        const tools = this.state.tools.map((tool, i) => <li key={i}><a href={"./"+tool.path}>{tool.title}</a></li>)
        const divStyle = {
            textAlign: 'left',
            margin: '10px'
        }

        return(
            <div style={divStyle}>
                <h2>All tools</h2> 
                <ul>
                   {tools}
                </ul> 
            </div>
        )
    }
}


export default ToolList;